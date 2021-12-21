// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertThrowsAssertionError, NOT } from "../dev_deps.ts";
import {
  assert,
  makeActualHintHookReducer,
  makePostModifierReducer,
  makePreModifierReducer,
  mergeContext,
} from "./_utils.ts";
import { toBe } from "../matcher/to_be.ts";
import { not } from "../modifier/not.ts";
import { number } from "../modifier/number.ts";
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
        hookContext: {
          actualHints: [],
        },
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
      hookContext: {
        actualHints: [],
      },
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
      hookContext: {
        actualHints: [],
      },
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
    makePreModifierReducer(args)([[], false], [
      "trim",
      (actual: string) => ({ actual: actual.trim() }),
    ]),
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
    async (actual: Promise<unknown>) => ({ actual: await actual }),
  ]);
  assertEquals(
    makePreModifierReducer(args)([[], false], [
      "resolves",
      async (actual: Promise<unknown>) => ({ actual: await actual }),
    ]),
    asyncResult,
  );
  assertEquals(await Promise.all(asyncResult[0]), [{
    args,
    name: "resolves",
    returns: {
      actual: "test ",
    },
  }]);

  const result2 = makePreModifierReducer(args)(asyncResult, [
    "trim",
    (actual: string) => ({ actual: actual.trim() }),
  ]);

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

Deno.test("makeActualHintHookReducer", () => {
  assertEquals(
    makeActualHintHookReducer("Actual:")([], {
      name: "trim",
      returns: {
        actual: "test",
      },
      args: [" test  ", {} as never],
    }),
    [],
  );

  assertEquals(
    makeActualHintHookReducer("Actual:")([], {
      name: "trim",
      returns: {
        actual: "test",
        reserveActualHint: (t) => t,
      },
      args: [" test  ", {} as never],
    }),
    [{
      name: "trim",
      actualHint: "Actual:",
    }],
  );

  assertEquals(
    makeActualHintHookReducer("Actual:")([], {
      name: "trim",
      returns: {
        actual: "test",
        reserveActualHint: (t) => `${t} test`,
      },
      args: [" test  ", {} as never],
    }),
    [{
      name: "trim",
      actualHint: "Actual: test",
    }],
  );

  assertEquals(
    makeActualHintHookReducer("Actual:")([{
      name: "trim",
      actualHint: "Actual: test",
    }], {
      name: "string",
      returns: {
        actual: "test",
        reserveActualHint: (t) => `${t} str`,
      },
      args: [" test  ", {} as never],
    }),
    [{
      name: "trim",
      actualHint: "Actual: test",
    }, {
      name: "string",
      actualHint: "Actual: test str",
    }],
  );
  assertEquals(
    makeActualHintHookReducer("Actual:")([{
      name: "trim",
      actualHint: "Actual: test",
    }, {
      name: "string",
      actualHint: "Actual: test str",
    }], {
      name: "number",
      returns: {
        actual: "test",
      },
      args: [" test  ", {} as never],
    }),
    [{
      name: "trim",
      actualHint: "Actual: test",
    }, {
      name: "string",
      actualHint: "Actual: test str",
    }],
  );
});
