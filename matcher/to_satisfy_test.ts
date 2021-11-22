// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toSatisfy } from "./to_satisfy.ts";

Deno.test({
  name: "toSatisfy",
  fn: () => {
    assertSuccess(toSatisfy(true, (actual) => {
      assertEquals(actual, true);
      return true;
    }));
    assertFail(toSatisfy(false, (actual) => {
      assertEquals(actual, false);
      return false;
    }));
  },
});
