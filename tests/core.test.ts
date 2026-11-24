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
