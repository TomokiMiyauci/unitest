// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { isReturn, isTypeReturn, pickValue } from "./utils.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("isReturn", () => {
  assertEquals(isReturn("return"), true);
});

Deno.test("isTypeReturn", () => {
  assertEquals(isTypeReturn({ type: "return", value: 0 }), true);
});

Deno.test("pickValue", () => {
  assertEquals(pickValue({ type: "return", value: 0 }), 0);
  assertEquals(pickValue({ type: "return", value: 1 }), 1);
});
