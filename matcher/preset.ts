// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toBeSymbol } from "@matcher/to_be_symbol.ts";
import { toBeValidDate } from "@matcher/to_be_valid_date.ts";
import { toBeFunction } from "@matcher/to_be_function.ts";
import { toBeDate } from "@matcher/to_be_date.ts";
import { toBeString } from "@matcher/to_be_string.ts";
import { toBeNumber } from "@matcher/to_be_number.ts";
import { toBeFalse } from "@matcher/to_be_false.ts";
import { toBeTrue } from "@matcher/to_be_true.ts";
import { toBeBoolean } from "@matcher/to_be_boolean.ts";
import { toBe } from "@matcher/to_be.ts";
import { toEqual } from "@matcher/to_equal.ts";
import { toBeFalsy } from "@matcher/to_be_falsy.ts";
import { toBeTruthy } from "@matcher/to_be_truthy.ts";
import { toBeUndefined } from "@matcher/to_be_undefined.ts";
import { toBeDefined } from "@matcher/to_be_defined.ts";
import { toBeNull } from "@matcher/to_be_null.ts";
import { toBeAnything } from "@matcher/to_be_anything.ts";
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
import { toHaveReturned } from "@matcher/to_have_returned.ts";
import { toHaveReturnedTimes } from "@matcher/to_have_returned_times.ts";
import { toHaveReturnedWith } from "@matcher/to_have_returned_with.ts";
import { toHaveLastReturnedWith } from "@matcher/to_have_last_returned_with.ts";
import { toHaveNthReturnedWith } from "@matcher/to_have_nth_returned_with.ts";

import { toBeNil } from "@matcher/to_be_nil.ts";
import { toBeArray } from "@matcher/to_be_array.ts";

/**
 * jest built-in matcher map
 * @see https://jestjs.io/docs/expect
 *
 * @beta
 */
const jestMatcherMap = {
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
  toHaveReturned,
  toHaveReturnedTimes,
  toHaveReturnedWith,
  toHaveLastReturnedWith,
  toHaveNthReturnedWith,
  toMatch,
  toContain,
  toThrow,

  // alternative jest matcher
  toBeAnything,
};

/**
 * Additional jest matchers
 * @see https://github.com/jest-community/jest-extended
 */
const jestExtendedMatcherMap = {
  toBeSymbol,
  toBeValidDate,
  toBeFunction,
  toBeDate,
  toBeString,
  toBeNil,
  toBeArray,
  toBeBoolean,
  toBeTrue,
  toBeFalse,
  toBeNumber,
};

export { jestExtendedMatcherMap, jestMatcherMap };
