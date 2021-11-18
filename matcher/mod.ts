// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toBe } from "@matcher/to_be.ts";
import { toEqual } from "@matcher/to_equal.ts";
import { toBeFalsy } from "@matcher/to_be_falsy.ts";
import { toBeTruthy } from "@matcher/to_be_truthy.ts";
import { toBeUndefined } from "@matcher/to_be_undefined.ts";
import { toBeDefined } from "@matcher/to_be_defined.ts";
import { toBeNull } from "@matcher/to_be_null.ts";
export * from "@matcher/types.ts";
export * from "@matcher/utils.ts";

const jestMatcher = {
  toBe,
  toEqual,
  toBeFalsy,
  toBeTruthy,
  toBeDefined,
  toBeUndefined,
  toBeNull,
};

export {
  jestMatcher,
  toBe,
  toBeDefined,
  toBeFalsy,
  toBeNull,
  toBeTruthy,
  toBeUndefined,
  toEqual,
};
