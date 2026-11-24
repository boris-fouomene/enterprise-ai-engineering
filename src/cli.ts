#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parsePolicy } from "./policy.ts";
import { runGate } from "./gates.ts";
import { adapters, writeNew } from "./generate.ts";
const root=process.cwd();
try {
  switch(process.argv[2]) {
    case "init":
      console.log(writeNew(root,"eae.config.json",JSON.stringify({version:1,gates:[]},null,2)+"\n"));
      console.log("Configure trusted project-specific quality gates before running check.");
      break;
    case "generate": {
      const canonical=readFileSync(new URL("../AGENTS.md",import.meta.url),"utf8");
      for(const [name,body] of Object.entries({"AGENTS.md":canonical,...adapters})) console.log(name,writeNew(root,name,body));
      for(const name of ["standards/ENGINEERING.md","workflows/ENGINEERING_LOOP.md"]) console.log(name,writeNew(root,name,readFileSync(new URL("../"+name,import.meta.url),"utf8")));
      break;
    }
    case "check": {
      if (!process.argv.includes("--trust-config")) throw new Error("Review local configuration, then pass --trust-config to authorize command execution");
      const policy=parsePolicy(JSON.parse(readFileSync(resolve(root,"eae.config.json"),"utf8")));
      if (!policy.gates.some(g=>g.required)) throw new Error("No mandatory gates configured; cannot establish validation evidence");
      const results=policy.gates.map(g=>runGate(g,root));
      console.log(JSON.stringify({results,passed:results.every(r=>!r.required||r.passed)},null,2));
      if(results.some(r=>r.required&&!r.passed)) process.exitCode=1;
      break;
    }
    case "doctor":
      console.log(JSON.stringify({node:process.version,platform:process.platform,root},null,2));
      break;
    default: console.log("eae init | generate | check --trust-config | doctor"); process.exitCode=2;
  }
} catch(error) { console.error(error instanceof Error?error.message:"Unknown error"); process.exitCode=1; }
