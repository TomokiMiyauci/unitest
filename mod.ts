// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
// Bundlers such as aleph.js do not handle re-exports. Therefore, each module is exported directly.

export { toSatisfy } from "./matcher/to_satisfy.ts";
export { toBeExtensible } from "./matcher/to_be_extensible.ts";
export { toBeFrozen } from "./matcher/to_be_frozen.ts";
export { toBe } from "./matcher/to_be.ts";
export { toEqual } from "./matcher/to_equal.ts";
export { toBeFalsy } from "./matcher/to_be_falsy.ts";
export { toBeTruthy } from "./matcher/to_be_truthy.ts";
export { toBeUndefined } from "./matcher/to_be_undefined.ts";
export { toBeDefined } from "./matcher/to_be_defined.ts";
export { toBeNull } from "./matcher/to_be_null.ts";
export { toBeAnything } from "./matcher/to_be_anything.ts";
export { toBeNaN } from "./matcher/to_be_nan.ts";
export { toBeInstanceOf } from "./matcher/to_be_instance_of.ts";
export { toBeGreaterThan } from "./matcher/to_be_greater_than.ts";
export { toBeGreaterThanOrEqual } from "./matcher/to_be_greater_than_or_equal.ts";
export { toBeLessThan } from "./matcher/to_be_less_than.ts";
export { toBeLessThanOrEqual } from "./matcher/to_be_less_than_or_equal.ts";
export { toBeCloseTo } from "./matcher/to_be_close_to.ts";
export { toMatch } from "./matcher/to_match.ts";
export { toContain } from "./matcher/to_contain.ts";
export { toThrow } from "./matcher/to_throw.ts";
export { toHaveBeenCalled } from "./matcher/to_have_been_called.ts";
export { toHaveBeenCalledTimes } from "./matcher/to_have_been_called_times.ts";
export { toHaveBeenCalledWith } from "./matcher/to_have_been_called_with.ts";
export { toHaveBeenLastCalledWith } from "./matcher/to_have_been_last_called_with.ts";
export { toHaveBeenNthCalledWith } from "./matcher/to_have_been_nth_called_with.ts";
export { toHaveLength } from "./matcher/to_have_length.ts";
export { toHaveReturned } from "./matcher/to_have_returned.ts";
export { toHaveReturnedTimes } from "./matcher/to_have_returned_times.ts";
export { toHaveReturnedWith } from "./matcher/to_have_returned_with.ts";
export { toHaveLastReturnedWith } from "./matcher/to_have_last_returned_with.ts";
export { toHaveNthReturnedWith } from "./matcher/to_have_nth_returned_with.ts";

export { toBeNil } from "./matcher/to_be_nil.ts";
export { toBeArray } from "./matcher/to_be_array.ts";
export { toBeBoolean } from "./matcher/to_be_boolean.ts";
export { toBeTrue } from "./matcher/to_be_true.ts";
export { toBeFalse } from "./matcher/to_be_false.ts";
export { toBeNumber } from "./matcher/to_be_number.ts";
export { toBeString } from "./matcher/to_be_string.ts";
export { toBeDate } from "./matcher/to_be_date.ts";
export { toBeFunction } from "./matcher/to_be_function.ts";
export { toBeValidDate } from "./matcher/to_be_valid_date.ts";
export { toBeSymbol } from "./matcher/to_be_symbol.ts";
export { toBeAfter } from "./matcher/to_be_after.ts";
export { toBeBefore } from "./matcher/to_be_before.ts";
export { toBeBeforeOrEqualTo } from "./matcher/to_be_before_or_equal_to.ts";
export { toBeAfterOrEqualTo } from "./matcher/to_be_after_or_equal_to.ts";
export { toBeBetween } from "./matcher/to_be_between.ts";
export { toBeOneOf } from "./matcher/to_be_one_of.ts";
export { toBeFinite } from "./matcher/to_be_finite.ts";
export { toBeNegative } from "./matcher/to_be_negative.ts";
export { toBePositive } from "./matcher/to_be_positive.ts";
export { toBeOdd } from "./matcher/to_be_odd.ts";
export { toBeEven } from "./matcher/to_be_even.ts";
export { toBeInteger } from "./matcher/to_be_integer.ts";
export { toBeWithin } from "./matcher/to_be_within.ts";
export { toBeObject } from "./matcher/to_be_object.ts";
export { toBeEmptyObject } from "./matcher/to_be_empty_object.ts";

export * from "./matcher/preset.ts";
export * from "./matcher/types.ts";
export * from "./matcher/utils.ts";

export * from "./mock/fn.ts";
export * from "./mock/types.ts";
export * from "./expect/mod.ts";
export * from "./it/mod.ts";

export { not } from "./modifier/not.ts";
export { rejects } from "./modifier/rejects.ts";
export { resolves } from "./modifier/resolves.ts";
export * from "./modifier/preset.ts";
