// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { toBeExtensible } from "./to_be_extensible.ts";
import { toBeFrozen } from "./to_be_frozen.ts";
import { toSatisfy } from "./to_satisfy.ts";
import { toBeEmptyObject } from "./to_be_empty_object.ts";
import { toBeObject } from "./to_be_object.ts";
import { toBeWithin } from "./to_be_within.ts";
import { toBeInteger } from "./to_be_integer.ts";
import { toBeEven } from "./to_be_even.ts";
import { toBeOdd } from "./to_be_odd.ts";
import { toBePositive } from "./to_be_positive.ts";
import { toBeNegative } from "./to_be_negative.ts";
import { toBeFinite } from "./to_be_finite.ts";
import { toBeOneOf } from "./to_be_one_of.ts";
import { toBeBetween } from "./to_be_between.ts";
import { toBeAfterOrEqualTo } from "./to_be_after_or_equal_to.ts";
import { toBeBeforeOrEqualTo } from "./to_be_before_or_equal_to.ts";
import { toBeBefore } from "./to_be_before.ts";
import { toBeAfter } from "./to_be_after.ts";
import { toBeSymbol } from "./to_be_symbol.ts";
import { toBeValidDate } from "./to_be_valid_date.ts";
import { toBeFunction } from "./to_be_function.ts";
import { toBeDate } from "./to_be_date.ts";
import { toBeString } from "./to_be_string.ts";
import { toBeNumber } from "./to_be_number.ts";
import { toBeFalse } from "./to_be_false.ts";
import { toBeTrue } from "./to_be_true.ts";
import { toBeBoolean } from "./to_be_boolean.ts";
import { toBe } from "./to_be.ts";
import { toEqual } from "./to_equal.ts";
import { toBeFalsy } from "./to_be_falsy.ts";
import { toBeTruthy } from "./to_be_truthy.ts";
import { toBeUndefined } from "./to_be_undefined.ts";
import { toBeDefined } from "./to_be_defined.ts";
import { toBeNull } from "./to_be_null.ts";
import { toBeAnything } from "./to_be_anything.ts";
import { toBeNaN } from "./to_be_nan.ts";
import { toBeInstanceOf } from "./to_be_instance_of.ts";
import { toBeGreaterThan } from "./to_be_greater_than.ts";
import { toBeGreaterThanOrEqual } from "./to_be_greater_than_or_equal.ts";
import { toBeLessThan } from "./to_be_less_than.ts";
import { toBeLessThanOrEqual } from "./to_be_less_than_or_equal.ts";
import { toBeCloseTo } from "./to_be_close_to.ts";
import { toMatch } from "./to_match.ts";
import { toContain } from "./to_contain.ts";
import { toThrow } from "./to_throw.ts";
import { toHaveBeenCalled } from "./to_have_been_called.ts";
import { toHaveBeenCalledTimes } from "./to_have_been_called_times.ts";
import { toHaveBeenCalledWith } from "./to_have_been_called_with.ts";
import { toHaveBeenLastCalledWith } from "./to_have_been_last_called_with.ts";
import { toHaveBeenNthCalledWith } from "./to_have_been_nth_called_with.ts";
import { toHaveLength } from "./to_have_length.ts";
import { toHaveReturned } from "./to_have_returned.ts";
import { toHaveReturnedTimes } from "./to_have_returned_times.ts";
import { toHaveReturnedWith } from "./to_have_returned_with.ts";
import { toHaveLastReturnedWith } from "./to_have_last_returned_with.ts";
import { toHaveNthReturnedWith } from "./to_have_nth_returned_with.ts";

import { toBeNil } from "./to_be_nil.ts";
import { toBeArray } from "./to_be_array.ts";

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
  toBeExtensible,
  toBeFrozen,
  toSatisfy,
  toBeEmptyObject,
  toBeObject,
  toBeWithin,
  toBeInteger,
  toBeEven,
  toBeOdd,
  toBePositive,
  toBeNegative,
  toBeFinite,
  toBeOneOf,
  toBeBetween,
  toBeAfterOrEqualTo,
  toBeBeforeOrEqualTo,
  toBeBefore,
  toBeAfter,
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
