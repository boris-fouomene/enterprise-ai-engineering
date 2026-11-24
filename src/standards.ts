export type Standard = {id:string; requirement:string; evidence:string};
/** Canonical Markdown table is the single source of truth. */
export function parseStandards(markdown:string): Standard[] {
  const result:Standard[]=[];
  const ids=new Set<string>();
  for(const line of markdown.split(/\r?\n/)) {
    const cells=line.trim().split("|").map(c=>c.trim());
    if(!/^[A-Z]+-\d+$/.test(cells[1]??"")) continue;
    if(cells.length!==5 || cells[0]!=="" || cells[4]!=="" || !cells[2] || !cells[3]) throw new Error("Malformed standard row");
    const [,id,requirement,evidence]=cells;
    if(ids.has(id)) throw new Error("Duplicate standard: "+id);
    if(!/^(MUST|SHOULD)\b/.test(requirement)) throw new Error("Missing obligation: "+id);
    ids.add(id);
    result.push({id,requirement,evidence});
  }
  if(!result.length) throw new Error("Empty standards catalog");
  return result;
}
