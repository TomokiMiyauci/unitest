// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeHexColor } from "./to_be_hex_color.ts";

Deno.test({
  name: "toBeHexColor",
  fn: () => {
    assertSuccess(toBeHexColor("#ffffff"));
    assertFail(toBeHexColor("#ff"));

    assertEquals(toBeHexColor("#FFF"), {
      pass: true,
      expected: "hex color of 3 or 6 digits",
    });
  },
});
