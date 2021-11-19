// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toBe } from "@matcher/to_be.ts";
import { toEqual } from "@matcher/to_equal.ts";
import { toBeFalsy } from "@matcher/to_be_falsy.ts";
import { toBeTruthy } from "@matcher/to_be_truthy.ts";
import { toBeUndefined } from "@matcher/to_be_undefined.ts";
import { toBeDefined } from "@matcher/to_be_defined.ts";
import { toBeNull } from "@matcher/to_be_null.ts";
import { toBeNaN } from "@matcher/to_be_nan.ts";
import { toBeInstanceOf } from "@matcher/to_be_instance_of.ts";
import { toBeGreaterThan } from "@matcher/to_be_greater_than.ts";
import { toBeGreaterThanOrEqual } from "@matcher/to_be_greater_than_or_equal.ts";
import { toBeLessThan } from "@matcher/to_be_less_than.ts";
import { toBeLessThanOrEqual } from "@matcher/to_be_less_than_or_equal.ts";
import { toBeCloseTo } from "@matcher/to_be_close_to.ts";
import { toMatch } from "@matcher/to_match.ts";
import { toContain } from "@matcher/to_contain.ts";
import { toThrow } from "@matcher/to_throw.ts";
import { toHaveBeenCalled } from "@matcher/to_have_been_called.ts";
import { toHaveBeenCalledTimes } from "@matcher/to_have_been_called_times.ts";
import { toHaveBeenCalledWith } from "@matcher/to_have_been_called_with.ts";
import { toHaveBeenLastCalledWith } from "@matcher/to_have_been_last_called_with.ts";
import { toHaveBeenNthCalledWith } from "@matcher/to_have_been_nth_called_with.ts";
import { toHaveLength } from "@matcher/to_have_length.ts";

const jestMatcher = {
  toBe,
  toEqual,
  toBeFalsy,
  toBeTruthy,
  toBeDefined,
  toBeUndefined,
  toBeNull,
  toBeNaN,
  toBeInstanceOf,
  toBeGreaterThan,
  toBeGreaterThanOrEqual,
  toBeLessThan,
  toBeCloseTo,
  toBeLessThanOrEqual,
  toHaveLength,
  toHaveBeenCalled,
  toHaveBeenCalledTimes,
  toHaveBeenCalledWith,
  toHaveBeenLastCalledWith,
  toHaveBeenNthCalledWith,
  toMatch,
  toContain,
  toThrow,
};

export {
  jestMatcher,
  toBe,
  toBeCloseTo,
  toBeDefined,
  toBeFalsy,
  toBeGreaterThan,
  toBeGreaterThanOrEqual,
  toBeInstanceOf,
  toBeLessThan,
  toBeLessThanOrEqual,
  toBeNaN,
  toBeNull,
  toBeTruthy,
  toBeUndefined,
  toContain,
  toEqual,
  toHaveBeenCalled,
  toHaveBeenCalledTimes,
  toHaveBeenCalledWith,
  toHaveBeenLastCalledWith,
  toHaveBeenNthCalledWith,
  toHaveLength,
  toMatch,
  toThrow,
};
