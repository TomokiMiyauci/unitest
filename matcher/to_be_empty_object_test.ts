// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeEmptyObject } from "./to_be_empty_object.ts";

Deno.test({
  name: "toBeEmptyObject",
  fn: () => {
    assertSuccess(toBeEmptyObject({}));
    assertSuccess(toBeEmptyObject([]));
    assertSuccess(toBeEmptyObject(new Map()));
    assertSuccess(toBeEmptyObject(new Set()));
    assertFail(toBeEmptyObject([1]));
    assertFail(toBeEmptyObject([new Map([[1, 2]])]));
    assertEquals(toBeEmptyObject([1]), {
      pass: false,
      expected: "empty object",
    });
  },
});
