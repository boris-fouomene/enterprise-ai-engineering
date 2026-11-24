import { mkdirSync, readFileSync, writeFileSync, lstatSync, realpathSync } from "node:fs";
import { resolve, dirname, relative, isAbsolute } from "node:path";
export function writeNew(root:string, name:string, content:string): "created"|"unchanged" {
  const base=realpathSync(root);
  const target=resolve(base,name);
  const rel=relative(base,target);
  if (!rel || rel.startsWith("..") || isAbsolute(rel)) throw new Error("Path escapes project");
  const parts=rel.split(/[\\/]/);
  let parent=base;
  for (const part of parts.slice(0,-1)) {
    parent=resolve(parent,part);
    try { mkdirSync(parent); } catch(e) { if ((e as NodeJS.ErrnoException).code!=="EEXIST") throw e; }
    const stat=lstatSync(parent);
    if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error("Unsafe directory: "+parent);
  }
  try { writeFileSync(target,content,{flag:"wx"}); return "created"; }
  catch(e) {
    if ((e as NodeJS.ErrnoException).code!=="EEXIST") throw e;
    const stat=lstatSync(target);
    if (stat.isFile() && !stat.isSymbolicLink() && readFileSync(target,"utf8")===content) return "unchanged";
    throw new Error("Existing file preserved: "+name);
  }
}
export const adapters: Record<string,string> = {
  "CLAUDE.md":"# Claude instructions\nRead AGENTS.md and follow its canonical engineering policy.\n",
  ".cursor/rules/engineering.mdc":"---\ndescription: Shared engineering policy\nalwaysApply: true\n---\nRead and follow AGENTS.md.\n",
  ".github/copilot-instructions.md":"Read and follow AGENTS.md for engineering standards and validation.\n"
};
