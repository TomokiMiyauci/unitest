// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, rejects } from "./rejects.ts";
import { assertEquals, assertRejects } from "../dev_deps.ts";
import { AssertionError } from "../deps.ts";

Deno.test({
  name: "predict",
  fn: async () => {
    assertEquals(
      await predict({
        actual: Promise.reject("test"),
        expected: [],
        matcher: {} as any,
      }),
      { actual: "test" },
    );

    assertRejects(
      () =>
        predict({
          actual: Promise.resolve("test"),
          expected: [],
          matcher: {} as any,
        }),
      AssertionError,
      `Promise did not reject. resolved to "test"`,
    );

    assertRejects(
      () =>
        predict({
          actual: "test",
          expected: [],
          matcher: {} as any,
        }),
      AssertionError,
      `expected value must be a Promise`,
    );
  },
});

Deno.test({
  name: "rejects",
  fn: () => assertEquals(rejects.type, "pre"),
});
