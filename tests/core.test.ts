import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parsePolicy } from "../src/policy.ts";
import { writeNew } from "../src/generate.ts";
import { runGate } from "../src/gates.ts";
const gate={id:"test",command:process.execPath,args:["-e","process.exit(0)"],timeoutMs:5000,required:true};
test("policy rejects duplicates and unsupported versions",()=>{
  assert.throws(()=>parsePolicy({version:2,gates:[]}));
  assert.throws(()=>parsePolicy({version:1,gates:[gate,gate]}));
  assert.deepEqual(parsePolicy({version:1,gates:[gate]}).gates,[gate]);
});
test("generation preserves existing files and rejects traversal",()=>{
  const root=mkdtempSync(join(tmpdir(),"eae-"));
  try {
    assert.equal(writeNew(root,"AGENTS.md","original"),"created");
    assert.equal(writeNew(root,"AGENTS.md","original"),"unchanged");
    assert.throws(()=>writeNew(root,"AGENTS.md","replacement"));
    assert.equal(readFileSync(join(root,"AGENTS.md"),"utf8"),"original");
    assert.throws(()=>writeNew(root,"../escape","bad"));
  } finally {rmSync(root,{recursive:true,force:true});}
});
test("gate reports success, failure and unavailable command",()=>{
  assert.equal(runGate(gate,process.cwd()).passed,true);
  assert.equal(runGate({...gate,args:["-e","process.exit(1)"]},process.cwd()).passed,false);
  assert.equal(runGate({...gate,command:"eae-nonexistent-command-123"},process.cwd()).passed,false);
});

import { evaluate } from "../src/engine.ts";
import { engineeringLoop } from "../src/loop.ts";
test("engine rejects empty mandatory policy and distinguishes optional failure",()=>{
  assert.throws(()=>evaluate({version:1,gates:[]},process.cwd()));
  const optional={...gate,id:"optional",required:false,args:["-e","process.exit(1)"]};
  assert.equal(evaluate({version:1,gates:[gate,optional]},process.cwd()).passed,true);
  assert.equal(evaluate({version:1,gates:[{...optional,required:true}]},process.cwd()).passed,false);
});
test("loop corrects and revalidates before requesting review",async()=>{
  let corrected=0;
  const result=await engineeringLoop(async()=>({passed:corrected===1}),async()=>{corrected++;});
  assert.equal(result.status,"ready-for-review");
  assert.equal(result.attempts,2);
  assert.equal(result.evidence.length,2);
});
test("loop escalates on exhaustion and never corrects after final attempt",async()=>{
  let corrected=0;
  const result=await engineeringLoop(async()=>({passed:false}),async()=>{corrected++;},3);
  assert.equal(result.status,"escalated");
  assert.equal(corrected,2);
  await assert.rejects(engineeringLoop(async()=>({passed:true}),async()=>{},0));
});
test("loop propagates validation errors",async()=>{
  await assert.rejects(engineeringLoop(async()=>{throw new Error("validation failed");},async()=>{}));
});
test("gate timeout is a failure",()=>{
  assert.equal(runGate({...gate,args:["-e","setInterval(()=>{},1000)"],timeoutMs:100},process.cwd()).passed,false);
});
