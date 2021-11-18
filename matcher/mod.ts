// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toBe } from "@matcher/to_be.ts";
import { toEqual } from "@matcher/to_equal.ts";
import { toBeFalsy } from "@matcher/to_be_falsy.ts";
export * from "@matcher/types.ts";
export * from "@matcher/utils.ts";

const jestMatcher = {
  toBe,
  toEqual,
  toBeFalsy,
};

export { jestMatcher, toBe, toBeFalsy, toEqual };
