// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { test } from "./mod.ts";
import { fn } from "../mock/fn.ts";
import { assertEquals } from "../dev_deps.ts";
import { expect } from "../expect/mod.ts";

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
    test({
      name: "test",

      fn: ({ mock }) => {
        assertEquals(mock.mock.calls.length, 0);
      },
      setup: () => {
        const mock = fn();
        return {
          localThis: {
            mock,
          },
          teardown: () => {
            mock();
          },
        };
      },
    });
  },
});

Deno.test({
  name: "should call teardown when test is done",
  fn: () => {
    test({
      name: "test",

      fn: () => {
      },
      setup() {
        const mock = fn();

        return {
          localThis: { mock },
          teardown: () => {
            mock();
            assertEquals(mock.mock.calls.length, 1);
          },
        };
      },
    });
  },
});

Deno.test({
  name: "should handle promise",
  fn: () => {
    test({
      name: "test",

      fn: async () => {
        await Promise.resolve("");
      },
    });
  },
});

Deno.test({
  name: "each is defined by default",
  fn: () => {
    expect(test).toBeDefined();
    expect(test).toHaveProperty("each");
  },
});
