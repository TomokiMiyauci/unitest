// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
export {
  AssertionError,
  equal,
} from "https://deno.land/std@0.115.1/testing/asserts.ts";
export {
  isBoolean,
  isDate,
  isEmptyObject,
  isError,
  isEven,
  isFalse,
  isFunction,
  isLength0,
  isNegativeNumber,
  isNil,
  isNull,
  isNumber,
  isObject,
  isOdd,
  isPositiveNumber,
  isPromise,
  isString,
  isSymbol,
  isTrue,
  isUndefined,
  isValidDate,
} from "https://deno.land/x/isx@v1.0.0-beta.15/mod.ts";

export {
  blue,
  gray,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.116.0/fmt/colors.ts";

// third party

// deno standard module of sprintf is print error when specifier has not used
// see https://deno.land/std@0.115.1/fmt/printf.ts#L743
// TODO:(miayuci) re-implementation
export { sprintf } from "https://esm.sh/sprintf-js";
