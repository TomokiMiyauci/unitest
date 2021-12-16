// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertThrowsAssertionError } from "../dev_deps.ts";
import { assert, mergeContext } from "./_utils.ts";

Deno.test("assert", () => {
  assertThrowsAssertionError(
    () =>
      assert({
        pass: false,
        actual: "test",
        actualHint: "Actual:",
        expected: "tes",
        expectedHint: "Expected:",
        matcherArgs: [],
        actualResult: "test",
        matcherName: "toBe",
      }),
  );
});

Deno.test("mergeContext", () => {
  const matcher = () => ({ pass: false, expected: "test" });
  assertEquals(
    mergeContext({
      expectContext: {
        actual: "test",
        actualHint: "Actual:",
        expectedHint: "Expected:",
        matcher,
        matcherArgs: [],
      },
      matcherContext: {
        args: {
          actual: "test",
          matcherArgs: [],
        },
        returns: {
          "expected": "test",
          "pass": false,
        },
      },
    }),
    {
      actual: "test",
      matcher,
      actualHint: "Actual:",
      expectedHint: "Expected:",
      matcherArgs: [],
      expected: "test",
      actualResult: "test",
      pass: false,
    },
  );
});
