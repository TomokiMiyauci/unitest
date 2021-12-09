// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeInstanceOf } from "./to_be_instance_of.ts";

Deno.test({
  name: "toBeInstanceOf",
  fn: () => {
    assertSuccess(toBeInstanceOf(new Date("2000/1/1"), Date));
    assertSuccess(toBeInstanceOf(new Error(), Error));
    assertFail(toBeInstanceOf("", String));
    assertEquals(toBeInstanceOf(new class A {}(), Function), {
      pass: false,
      expected: Function,
      expectedHint: "Expected to be instance of:",
    });
  },
});
