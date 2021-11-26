// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { assertThrows } from "https://deno.land/std@0.115.1/testing/asserts.ts";
export {
  assert,
  assertRejects,
  assertThrows,
} from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { AssertionError, blue } from "./deps.ts";

import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import type { Matcher, MatchResult } from "./matcher/types.ts";

function assertSuccess({ pass }: MatchResult): void {
  assertEquals(pass, true);
}

function assertFail({ pass }: MatchResult): void {
  assertEquals(pass, false);
}

function assertExpected(
  { matcher, expected }: {
    matcher: Matcher;
    expected: MatchResult["expected"];
  },
  options: Partial<{
    actual: unknown;
    expectedArgs: unknown[];
  }> = { actual: {}, expectedArgs: [] },
): void {
  assertEquals(
    matcher(options.actual, ...options.expectedArgs ?? []).expected,
    expected,
  );
}

function assertThrowsAssertionError(fn: () => unknown): void {
  assertThrows(fn, AssertionError);
}

const NOT = blue("[not]");

export {
  assertEquals,
  assertExpected,
  assertFail,
  assertSuccess,
  assertThrowsAssertionError,
  NOT,
};
