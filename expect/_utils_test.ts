// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertThrowsAssertionError, NOT } from "../dev_deps.ts";
import {
  assert,
  makePostModifierReducer,
  makePreModifierReducer,
  mergeContext,
} from "./_utils.ts";
import { toBe } from "../matcher/to_be.ts";
import { not } from "../modifier/not.ts";
import { trim } from "../modifier/trim.ts";
import { number } from "../modifier/number.ts";
import { resolves } from "../modifier/resolves.ts";
import type { ExpectContext, PreModifierContext } from "./_utils.ts";
import type { PreModifierFn } from "../modifier/types.ts";

Deno.test("assert", () => {
  const matcher = () => ({ pass: false, expected: "test" });

  assertThrowsAssertionError(
    () =>
      assert({
        expectContext: {
          actual: "test",
          actualHint: "Actual:",
          expectedHint: "Expected:",
          matcher,
          matcherArgs: [],
        },
        matcherContext: {
          name: "toBe",
          args: ["test"],
          returns: {
            "expected": "test",
            "pass": false,
          },
        },
        preModifierContexts: [],
        postModifierContexts: [],
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
        name: "toBe",
        args: ["test"],
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
      postModifierContexts: [],
      matcherContext: {
        name: "toBe",
        args: ["test"],
        returns: {
          expected: "test",
          pass: true,
        },
      },
      preModifierContexts: [{
        name: "resolves",
        args: [Promise.resolve("test"), {
          matcher: matcher,
          matcherArgs: ["test"],
        }],
        returns: {
          actual: "test",
        },
      }],
    }),
    {
      actual: "test",
      matcher,
      actualHint: "Actual:",
      expectedHint: "Expected:",
      matcherArgs: ["test"],
      expected: "test",
      pass: true,
    },
  );
});

Deno.test("makePreModifierReducer sync", () => {
  const args: Parameters<PreModifierFn> = ["test ", {
    matcherArgs: ["test"],
    matcher: toBe,
  }];
  const acc: [
    | PreModifierContext[]
    | (PreModifierContext | Promise<PreModifierContext>)[],
    boolean,
  ] = [[{
    args,
    name: "trim",
    returns: {
      actual: "test",
    },
  }], false];
  assertEquals(
    makePreModifierReducer(args)([[], false], ["trim", trim.fn]),
    acc,
  );

  assertEquals(makePreModifierReducer(args)(acc, ["number", number.fn]), [
    [...acc[0], {
      args: ["test", {
        matcherArgs: ["test"],
        matcher: toBe,
      }],
      name: "number",
      returns: {
        actual: NaN,
      },
    }],
    false,
  ]);
});

Deno.test("makePreModifierReducer async", async () => {
  const args: Parameters<PreModifierFn> = ["test ", {
    matcherArgs: ["test"],
    matcher: toBe,
  }];

  const asyncResult = makePreModifierReducer(args)([[], false], [
    "resolves",
    resolves.fn,
  ]);
  assertEquals(
    makePreModifierReducer(args)([[], false], ["resolves", resolves.fn]),
    asyncResult,
  );
  assertEquals(await Promise.all(asyncResult[0]), [{
    args,
    name: "resolves",
    returns: {
      actual: "test ",
    },
  }]);

  const result2 = makePreModifierReducer(args)(asyncResult, ["trim", trim.fn]);

  assertEquals(result2[1], true);
  assertEquals(await Promise.all(result2[0]), [{
    args,
    name: "resolves",
    returns: {
      actual: "test ",
    },
  }, {
    args,
    name: "trim",
    returns: {
      actual: "test",
    },
  }]);
});

Deno.test("makePostModifierReducer", () => {
  const acc = [{
    args: [{
      actual: "test",
      actualHint: "Actual:",
      expected: "test",
      expectedHint: "Expected:",
      matcher: toBe,
      matcherArgs: ["test"],
      pass: true,
      resultActual: undefined,
    }],
    name: "not",
    returns: {
      expectedHint: `Expected: ${NOT}`,
      pass: false,
    },
  }] as ExpectContext["postModifierContexts"];
  assertEquals(
    makePostModifierReducer([{
      actual: "test",
      matcherArgs: ["test"],
      pass: true,
      matcher: toBe,
      actualHint: "Actual:",
      expectedHint: "Expected:",
      expected: "test",
      resultActual: undefined,
    }])([], ["not", not.fn]),
    acc,
  );

  assertEquals(
    makePostModifierReducer([{
      actual: "test",
      matcherArgs: ["test"],
      pass: true,
      matcher: toBe,
      actualHint: "Actual:",
      expectedHint: "Expected:",
      expected: "test",
      resultActual: undefined,
    }])(acc, ["not", not.fn]),
    [...acc, {
      args: [{
        actual: "test",
        actualHint: "Actual:",
        expected: "test",
        expectedHint: `Expected: ${NOT}`,
        matcher: toBe,
        matcherArgs: ["test"],
        pass: false,
        resultActual: undefined,
      }],
      name: "not",
      returns: {
        expectedHint: `Expected: ${NOT} ${NOT}`,
        pass: true,
      },
    }],
  );
});
