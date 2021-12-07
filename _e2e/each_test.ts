// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { each, expect } from "../mod.ts";

each([[1, "1"]])("test(%d) => %s", (value, result) => {
  expect(String(value)).toBe(result);
});
