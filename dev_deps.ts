// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { assertThrows } from "https://deno.land/std@0.115.1/testing/asserts.ts";
export {
  assert,
  assertRejects,
  assertThrows,
} from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { AssertionError } from "./deps.ts";

import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import type { MatchResult } from "./matcher/types.ts";

function assertSuccess({ pass }: MatchResult): void {
  assertEquals(pass, true);
}

function assertFail({ pass }: MatchResult): void {
  assertEquals(pass, false);
}

function assertThrowsAssertionError(fn: () => unknown): void {
  assertThrows(fn, AssertionError);
}

export { assertEquals, assertFail, assertSuccess, assertThrowsAssertionError };
