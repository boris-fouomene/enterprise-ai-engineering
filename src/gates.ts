import { spawnSync } from "node:child_process";
import type { Gate } from "./policy.ts";
export function runGate(gate: Gate, cwd: string) {
  const start = Date.now();
  const result = spawnSync(gate.command, gate.args, {cwd, shell:false, timeout:gate.timeoutMs, killSignal:"SIGKILL", stdio:"ignore", windowsHide:true});
  return {id:gate.id,required:gate.required,passed:!result.error && result.status===0,exitCode:result.status,signal:result.signal,error:result.error ? (result.error as NodeJS.ErrnoException).code ?? "execution_error" : null,durationMs:Date.now()-start};
}
