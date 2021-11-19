// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineExpect } from "@expect/mod.ts";
import { assertThrows } from "@/dev_deps.ts";
import { AssertionError } from "@/deps.ts";
import { toBe } from "@matcher/to_be.ts";
Deno.test({
  name: "defineExpect",

  fn: () => {
    const expect = defineExpect({
      toBe,
    });

    expect("").toBe("");
    expect("").not.toBe("test");
    expect(Promise.resolve("")).resolves.toBe("");
    expect(Promise.reject("")).rejects.toBe("");

    assertThrows(() => expect("").resolves, AssertionError);
    assertThrows(() => expect("").rejects, AssertionError);
    assertThrows(() => expect(Promise.resolve("")).rejects, AssertionError);
    assertThrows(() => expect("").toBe("test"), AssertionError);
  },
});
