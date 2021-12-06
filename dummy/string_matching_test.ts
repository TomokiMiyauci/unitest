// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { StringMatching, stringMatching } from "./string_matching.ts";
import { assertEquals, assertExists, assertThrows } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("stringMatching", () => {
  assertEquals(stringMatching(""), new StringMatching(""));
});

Deno.test({
  name: "StringMatching",
  fn: () => {
    const anyNumber = new StringMatching("");
    assertExists(anyNumber.toString);
    assertExists(anyNumber[equality]);

    assertEquals(anyNumber.toString(), "string matching");
    assertThrows(
      () => anyNumber[equality](undefined),
      TypeError,
      "Actual must be string",
    );
    assertThrows(
      () => anyNumber[equality](/test/),
      TypeError,
      "Actual must be string",
    );
    assertEquals(anyNumber[equality](""), true);
    assertEquals(new StringMatching(/^t/)[equality]("test"), true);
    assertEquals(new StringMatching("test")[equality]("test"), true);
  },
});
