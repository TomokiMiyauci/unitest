// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { defineExpect, expect } from "./mod.ts";
import { assertExists } from "../dev_deps.ts";
Deno.test({
  name: "export module is right or not",
  fn: () => {
    assertExists(defineExpect);
    assertExists(expect);
  },
});
