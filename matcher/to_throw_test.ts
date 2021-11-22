// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, toThrow } from "./to_throw.ts";
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    assertEquals(
      predict(() => {
        throw Error("test");
      }),
      {
        hasError: true,
        e: new Error(),
      },
    );
  },
});
Deno.test({
  name: "toThrow",
  fn: () => {
    assertSuccess(toThrow(() => {
      throw Error();
    }));
    assertSuccess(toThrow(() => {
      throw Error();
    }, ""));
    assertSuccess(toThrow(() => {
      throw Error("test");
    }, "test"));
    assertSuccess(toThrow(() => {
      throw Error("test");
    }, /^t/));
    assertFail(toThrow(() => 1));
    assertFail(toThrow(() => {
      throw Error("test");
    }, /s$/));
  },
});
