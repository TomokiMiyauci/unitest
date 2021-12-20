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
        preModifierNames: [],
      }),
  );
});

Deno.test("mergeContext", () => {
  const matcher = () => ({ pass: false, expected: "test" });
  assertEquals(
    mergeContext({
      expectContext: {
        actual: "test",
        actualResult: "test",
        actualHint: "Actual:",
        expectedHint: "Expected:",
        matcher,
        matcherArgs: [],
      },
      matcherContext: {
        name: "toBe",
        args: {
          actual: "test",
          matcherArgs: [],
        },
        returns: {
          "expected": "test",
          "pass": false,
        },
      },
      preModifierContexts: [],
      postModifierContexts: [],
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
        actualResult: Promise.resolve("test"),
        actualHint: "Actual:",
        expectedHint: "Expected:",
        matcher,
        matcherArgs: ["test"],
      },
      postModifierContexts: [],
      matcherContext: {
        name: "toBe",
        args: {
          actual: "test",
          matcherArgs: ["test"],
        },
        returns: {
          "expected": "test",
          "pass": true,
        },
      },
      preModifierContexts: [{
        name: "resolves",
        args: {
          actual: Promise.resolve("test"),
          matcher: matcher,
          matcherArgs: ["test"],
        },
        returns: {
          actualResult: "test",
        },
      }],
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
