// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeNumber } from "./to_be_number.ts";

Deno.test({
  name: "toBeNumber",
  fn: () => {
    assertSuccess(toBeNumber(0));
    assertSuccess(toBeNumber(1));
    assertFail(toBeNumber(new Number(0)));
    assertFail(toBeNumber(1n));
    assertEquals(toBeNumber(""), {
      pass: false,
      expected: "number",
    });
  },
});
