import type { MatchResult } from "./types.ts";

function toBe(actual: any, expected: any): MatchResult {
  if (actual === expected) return { pass: true };

  return {
    pass: false,
    message: `expect(${String(actual)}).toBe(${String(expected)})`,
  };
}

export { toBe };
