// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { Anything, anything } from "./anything.ts";
import { equality } from "../helper/equal.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";

Deno.test({
  name: "Anything",
  fn: () => {
    const anything = new Anything();
    assertExists(anything.toString);
    assertExists(anything[equality]);

    assertEquals(anything.toString(), "except undefined or null");
    assertEquals(anything[equality](undefined), false);
    assertEquals(anything[equality](null), false);
    assertEquals(anything[equality]({}), true);
  },
});

Deno.test({
  name: "anything",
  fn: () => {
    assertEquals(anything(), new Anything());
  },
});
