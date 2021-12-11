// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { MockResult, MockResultType } from "./mock.ts";

/** type guard for mock result return type is `return` */
function isTypeReturn(
  mockResult: MockResult,
): mockResult is { type: "return"; value: unknown } {
  return isReturn(mockResult.type);
}

/** pick `value` field only */
function pickValue({ value }: MockResult): unknown {
  return value;
}

/** type guard for return type is `return` */
function isReturn(value: MockResultType): value is "return" {
  return value === "return";
}

export { isReturn, isTypeReturn, pickValue };
