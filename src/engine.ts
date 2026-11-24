import type { Policy, Gate } from "./policy.ts";
import { runGate } from "./gates.ts";

export type GateRunner = (gate: Gate, cwd: string) => ReturnType<typeof runGate>;

/** Execute a policy using an injectable runner. No agent or language dependency. */
export function evaluate(policy: Policy, cwd: string, runner: GateRunner = runGate) {
  if (!policy.gates.some(g => g.required)) throw new Error("No mandatory gates configured; cannot establish validation evidence");
  const results = policy.gates.map(g => runner(g, cwd));
  return {results, passed: results.every(r => !r.required || r.passed)};
}
