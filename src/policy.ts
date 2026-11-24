export type Gate = { id: string; command: string; args: string[]; timeoutMs: number; required: boolean };
export type Policy = { version: 1; gates: Gate[] };
export function parsePolicy(value: unknown): Policy {
  if (!value || typeof value !== "object") throw new Error("Expected policy object");
  const p = value as Record<string, unknown>;
  if (p.version !== 1 || !Array.isArray(p.gates)) throw new Error("Unsupported policy version or missing gates");
  const ids = new Set<string>();
  const gates = p.gates.map((entry: unknown): Gate => {
    if (!entry || typeof entry !== "object") throw new Error("Invalid gate");
    const g = entry as Record<string, unknown>;
    if (typeof g.id !== "string" || !/^[a-zA-Z0-9_-]+$/.test(g.id) || ids.has(g.id)) throw new Error("Invalid or duplicate gate ID");
    if (typeof g.command !== "string" || !g.command.trim() || !Array.isArray(g.args) || !g.args.every(a => typeof a === "string") || typeof g.required !== "boolean" || typeof g.timeoutMs !== "number" || !Number.isInteger(g.timeoutMs) || g.timeoutMs < 1 || g.timeoutMs > 600000) throw new Error("Invalid gate configuration: " + g.id);
    ids.add(g.id);
    return {id:g.id,command:g.command,args:g.args as string[],required:g.required,timeoutMs:g.timeoutMs};
  });
  return {version:1,gates};
}
