// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineExpect } from "./mod.ts";
import { toBe } from "../matcher/to_be.ts";
import { not } from "../modifier/mod.ts";
Deno.test({
  name: "defineExpect",

  fn: () => {
    const expect = defineExpect({
      matcherMap: {
        toBe,
      },
      modifierMap: {
        not,
      },
    });

    expect("").toBe("");
    expect("").not.toBe("test");
  },
});
