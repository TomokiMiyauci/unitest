// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineExpect, it, toHaveProperty } from "../mod.ts";

const expect = defineExpect({
  matcherMap: {
    toHaveProperty,
  },
});

it("should not occur error", () => {
  expect({ a: "" }).toHaveProperty("a");
});
