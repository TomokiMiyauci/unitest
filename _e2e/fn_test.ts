// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect, fn, test } from "../mod.ts";

test("should define implementation as default", () => {
  const mockObject = fn().defaultImplementation(() => true);
  expect(mockObject()).toBe(true);
});
