export type LoopResult<T> = { status: "ready-for-review" | "escalated"; attempts: number; evidence: T[] };

/** Host supplies implementation and validation callbacks; no model API required.
 * A successful check is not authorization to release.
 */
export async function engineeringLoop<T extends {passed:boolean}>(
  validate: () => Promise<T>,
  correct: (evidence: T, attempt: number) => Promise<void>,
  maxAttempts = 5
): Promise<LoopResult<T>> {
  if (!Number.isInteger(maxAttempts) || maxAttempts < 1 || maxAttempts > 20) throw new Error("Invalid attempt budget");
  const evidence: T[] = [];
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const result = await validate();
    evidence.push(result);
    if (result.passed) return {status:"ready-for-review", attempts:attempt, evidence};
    if (attempt < maxAttempts) await correct(result, attempt);
  }
  return {status:"escalated", attempts:maxAttempts, evidence};
}
