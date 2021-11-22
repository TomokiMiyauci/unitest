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
        post: {
          not,
        },
      },
    });

    expect("").toBe("");
    expect("").not.toBe("test");
    // expect(Promise.resolve("")).resolves.toBe("");
    // expect(Promise.reject("")).rejects.toBe("");

    // assertThrows(() => expect("").resolves, AssertionError);
    // assertThrows(() => expect("").rejects, AssertionError);
    // assertThrows(() => expect("").toBe("test"), AssertionError);
  },
});
