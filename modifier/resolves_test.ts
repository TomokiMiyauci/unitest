// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, resolves } from "./resolves.ts";
import { assertEquals, assertRejects } from "../dev_deps.ts";
import { AssertionError } from "../deps.ts";

Deno.test({
  name: "predict",
  fn: async () => {
    assertEquals(
      await predict({
        actual: Promise.resolve("test"),
        expected: [],
        matcher: {} as any,
      }),
      { actual: "test" },
    );

    assertRejects(
      () => {
        return predict({
          actual: "test",
          expected: [],
          matcher: {} as any,
        });
      },
      AssertionError,
      "expected value must be a Promise",
    );
  },
});

Deno.test({
  name: "resolves",
  fn: () => assertEquals(resolves.type, "pre"),
});
