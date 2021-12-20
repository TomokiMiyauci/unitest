// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import {
  predict,
  toHaveBeenCalledBefore,
} from "./to_have_been_called_before.ts";
import { fn } from "../mock/fn.ts";

Deno.test("predict", () => {
  const table: [...Parameters<typeof predict>, ReturnType<typeof predict>][] = [
    [undefined, undefined, false],
    [undefined, 1, false],
    [1, undefined, true],
    [0, 1, true],
    [1, 2, true],
    [1, 1, false],
  ];

  table.forEach(([a, b, result]) => assertEquals(predict(a, b), result));
});

Deno.test({
  name: "toHaveBeenCalledBefore",
  fn: () => {
    const mockObject = fn();
    assertEquals(toHaveBeenCalledBefore(mockObject, mockObject), {
      pass: false,
      actualHint: "Actual older call order number:",
      resultActual: "none",
      expectedHint: "Expected older call order number:",
      expected: "none",
    });

    mockObject();
    const mockObject2 = fn();

    assertEquals(toHaveBeenCalledBefore(mockObject, mockObject2), {
      pass: true,
      actualHint: "Actual older call order number:",
      resultActual: 1,
      expectedHint: "Expected older call order number:",
      expected: "none",
    });

    mockObject2();

    assertEquals(toHaveBeenCalledBefore(mockObject, mockObject2), {
      pass: true,
      actualHint: "Actual older call order number:",
      resultActual: 1,
      expectedHint: "Expected older call order number:",
      expected: 2,
    });
  },
});
