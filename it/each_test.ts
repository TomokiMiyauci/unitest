// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect } from "../mod.ts";
import { each } from "./each.ts";
import { fn } from "../mock/fn.ts";

const mock = fn();

each([])("never array", () => {
  mock();
});
Deno.test({
  name: "empty array should not called",
  fn: () => {
    expect(mock).not.toHaveBeenCalled();
  },
});

const mock1 = fn();
each([[1, 2, 3]])("mock", (a, b, c) => {
  mock1(a, b, c);
});

Deno.test({
  name: "it should pass each values by order",
  fn: () => {
    expect(mock1).toHaveBeenCalledWith(1, 2, 3);
    expect(mock1).toHaveBeenCalledTimes(1);
  },
});
