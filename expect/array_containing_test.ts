// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { ArrayContaining, arrayContaining } from "./array_containing.ts";
import { equality } from "../helper/equal.ts";
import { assertEquals, assertThrows } from "../dev_deps.ts";

Deno.test({
  name: "ArrayContaining",
  fn: () => {
    assertThrows(
      () => new ArrayContaining([])[equality](""),
      TypeError,
      "Actual must be array",
    );

    assertEquals(new ArrayContaining([1])[equality]([1, 2, 3]), true);
    assertEquals(new ArrayContaining([]).toString(), "array contain");
  },
});

Deno.test({
  name: "arrayContaining",
  fn: () => {
    assertEquals(arrayContaining([]), new ArrayContaining([]));
  },
});
