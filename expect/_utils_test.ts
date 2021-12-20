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
        postModifierNames: [],
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

  assertEquals(
    mergeContext({
      expectContext: {
        actual: Promise.resolve("test"),
        actualHint: "Actual:",
        expectedHint: "Expected:",
        matcher,
        matcherArgs: ["test"],
      },
      preModifierContext: {
        args: {
          actual: Promise.resolve("test"),
          matcherArgs: ["test"],
          matcher,
        },
        returns: {
          actualResult: "test",
        },
      },
      matcherContext: {
        args: {
          actual: "test",
          matcherArgs: ["test"],
        },
        returns: {
          "expected": "test",
          "pass": true,
        },
      },
    }),
    {
      actual: Promise.resolve("test"),
      matcher,
      actualHint: "Actual:",
      expectedHint: "Expected:",
      matcherArgs: ["test"],
      expected: "test",
      actualResult: "test",
      pass: true,
    },
  );
});
