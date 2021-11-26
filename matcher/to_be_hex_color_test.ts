// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { isHexColor, toBeHexColor } from "./to_be_hex_color.ts";

Deno.test({
  name: "isHexColor",
  fn: () => {
    const table: [string, boolean][] = [
      ["#000000", true],
      ["#123abc", true],
      ["#ABC123", true],
      ["#FFF", true],
      ["#00F", true],
      ["#ecECec", true],
      ["#000", true],
      ["#ecec", false],
      ["#", false],
      ["#f", false],
      ["#ff", false],
      ["#ffff", false],
      ["#fffff", false],
      ["#ffffff", true],
      ["#fffffff", false],
      ["#00", false],
      ["000", false],
      ["#GGG", false],
      ["ececec", false],
      ["#gggggg", false],
      ["#123ffg", false],
      ["#0000000", false],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isHexColor(value), result, value)
    );
  },
});

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
