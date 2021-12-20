// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { predict, toHaveBeenCalledAfter } from "./to_have_been_called_after.ts";
import { fn } from "../mock/fn.ts";

Deno.test("predict", () => {
  const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] = [
    [undefined, undefined, false],
    [undefined, 1, true],
    [1, undefined, false],
    [2, 1, true],
    [1, 1, false],
  ];

  table.forEach(([a, b, result]) => assertEquals(predict(a, b), result));
});

Deno.test({
  name: "toHaveBeenCalledAfter",
  fn: () => {
    const mockObject = fn();
    assertEquals(toHaveBeenCalledAfter(mockObject, mockObject), {
      pass: false,
      actualHint: "Actual older call order number:",
      resultActual: "none",
      expectedHint: "Expected older call order number:",
      expected: "none",
    });

    mockObject();
    const mockObject2 = fn();

    assertEquals(toHaveBeenCalledAfter(mockObject, mockObject2), {
      pass: false,
      actualHint: "Actual older call order number:",
      resultActual: 1,
      expectedHint: "Expected older call order number:",
      expected: "none",
    });

    mockObject2();

    assertEquals(toHaveBeenCalledAfter(mockObject, mockObject2), {
      pass: false,
      actualHint: "Actual older call order number:",
      resultActual: 1,
      expectedHint: "Expected older call order number:",
      expected: 2,
    });
  },
});
