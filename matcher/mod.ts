// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toBe } from "@matcher/to_be.ts";
import { toEqual } from "@matcher/to_equal.ts";
import { toBeFalsy } from "@matcher/to_be_falsy.ts";
import { toBeTruthy } from "@matcher/to_be_truthy.ts";
import { toBeUndefined } from "@matcher/to_be_undefined.ts";
export * from "@matcher/types.ts";
export * from "@matcher/utils.ts";

const jestMatcher = {
  toBe,
  toEqual,
  toBeFalsy,
  toBeTruthy,
  toBeUndefined,
};

export { jestMatcher, toBe, toBeFalsy, toBeTruthy, toBeUndefined, toEqual };
