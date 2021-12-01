// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect, test } from "../mod.ts";

test("should work as jest style", () => {
  expect("jest").toBeTruthy();
});

test({
  name: "should work Deno.test sytle",
  fn: () => {
    expect("deno").toBeTruthy();
  },
});
