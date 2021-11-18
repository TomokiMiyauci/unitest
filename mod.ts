// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineExpect } from "@/expect.ts";
export * from "@matcher/mod.ts";
import { jestMatcher } from "@matcher/mod.ts";
export type { Expected, MatcherMap } from "@/expect.ts";

const expect = defineExpect(jestMatcher);

export { defineExpect, expect };
