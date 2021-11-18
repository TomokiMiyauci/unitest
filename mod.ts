import { defineExpect } from "./expect.ts";
import { toBe } from "./matcher/mod.ts";
export type { Expected, MatcherMap } from "./expect.ts";
export type { Matcher, MatchResult } from "./matcher/mod.ts";

const expect = defineExpect({
  toBe,
});

export { defineExpect, expect, toBe };
