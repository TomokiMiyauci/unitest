import { defineExpect } from "@/expect.ts";
import { fail, jestMatcher, success, toBe } from "@matcher/mod.ts";
export type { Expected, MatcherMap } from "@/expect.ts";
export type { Matcher, MatchResult } from "@/matcher/mod.ts";

const expect = defineExpect(jestMatcher);

export { defineExpect, expect, fail, jestMatcher, success, toBe };
