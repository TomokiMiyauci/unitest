// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { toHaveBeenCalledOnce } from "./to_have_been_called_once.ts";
import { fn } from "../mock/fn.ts";

Deno.test({
  name: "toHaveBeenCalledOnce",
  fn: () => {
    const mockObject = fn();

    assertEquals(toHaveBeenCalledOnce(mockObject), {
      pass: false,
      resultActual: 0,
      actualHint: "Actual called times:",
      expectedHint: "Expected called times:",
      expected: 1,
    });
    mockObject();
    assertEquals(toHaveBeenCalledOnce(mockObject), {
      pass: true,
      resultActual: 1,
      actualHint: "Actual called times:",
      expectedHint: "Expected called times:",
      expected: 1,
    });
    mockObject();
    assertEquals(toHaveBeenCalledOnce(mockObject), {
      pass: false,
      resultActual: 2,
      actualHint: "Actual called times:",
      expectedHint: "Expected called times:",
      expected: 1,
    });
  },
});
