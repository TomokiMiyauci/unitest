// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { predict, toContainEqual } from "./to_contain_equal.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] =
      [
        [{}, {}, true],
        [{ a: 1 }, {}, true],
        [{ a: 1 }, { a: 1 }, true],
        [{ a: 1 }, { b: 1 }, false],
        [{ a: 1 }, { b: 1, c: 2 }, false],
        [{ a: 1, b: 1 }, { b: 1, c: 2 }, false],
        [{ a: {} }, { a: {} }, true],
        [{ a: {} }, { a: { b: {} } }, false],
        [{ a: { b: [] } }, { a: { b: {} } }, true],
        [{ a: 1, b: "", c: undefined }, { a: 1 }, true],
        [{ a: 1, b: "", c: undefined }, { a: 1, b: {} }, false],
        [
          { a: 1, b: { c: { d: {} } }, c: undefined },
          { b: {} },
          true,
        ],
        [
          { a: 1, b: { c: { d: {} } }, c: undefined },
          { b: { c: { d: {} } } },
          true,
        ],
        [
          { a: 1, b: { c: false, d: "" }, c: undefined },
          { b: { c: false, e: "" } },
          false,
        ],
        [
          { a: 1, b: { c: false, d: "" }, c: undefined },
          { b: { c: false, e: "" } },
          false,
        ],
        [
          { a: 1, b: { c: false, d: "" }, c: undefined },
          { b: { c: false, d: {} } },
          false,
        ],
      ];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toContainEqual",
  fn: () => {
    assertSuccess(toContainEqual({}, {}));
    assertFail(toContainEqual({}, { a: 1 }));

    assertEquals(toContainEqual({ a: 1 }, { b: 1, c: 2 }), {
      pass: false,
      expected: { b: 1, c: 2 },
      expectedHint: "Expected to contain:",
    });
  },
});
