// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { test } from "./mod.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "should call setup function before test",
  fn: () => {
    const mock = fn();

    test({
      name: "test",
      setup: () => {
        mock();
      },
      fn: () => {
        assertEquals(mock.mock.calls.length, 1);
      },
    });
  },
});

Deno.test({
  name: "should not call teardown function before test",
  fn: () => {
    const mock = fn();

    test({
      name: "test",

      fn: () => {
        assertEquals(mock.mock.calls.length, 0);
      },
      teardown: () => {
        mock();
      },
    });
  },
});

Deno.test({
  name: "should call teardown when test is done",
  fn: () => {
    const mock = fn();

    test({
      name: "test",

      fn: () => {
      },
      teardown: () => {
        mock();
        assertEquals(mock.mock.calls.length, 1);
      },
    });
  },
});
