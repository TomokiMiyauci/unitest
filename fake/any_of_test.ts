// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";
import { AnyOf, anyOf } from "./any_of.ts";

Deno.test({
  name: "AnyOf",
  fn: () => {
    const anyOf = new AnyOf([1, 2, 3]);
    assertExists(anyOf.toString);
    assertExists(anyOf[equality]);

    assertEquals(anyOf.toString(), "any of");
    assertEquals(anyOf[equality](undefined), false);
    assertEquals(anyOf[equality](null), false);
    assertEquals(anyOf[equality](2), true);
  },
});

Deno.test({
  name: "anyOf",
  fn: () => {
    assertEquals(anyOf([]), new AnyOf([]));
  },
});
