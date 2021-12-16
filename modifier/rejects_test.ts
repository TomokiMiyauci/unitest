// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, rejects } from "./rejects.ts";
import { assertEquals, assertRejects } from "../dev_deps.ts";
import { AssertionError } from "../deps.ts";

Deno.test({
  name: "predict",
  fn: async () => {
    assertEquals(
      await predict(
        Promise.reject("test"),
      ),
      { actual: "test" },
    );

    assertRejects(
      () =>
        predict(
          Promise.resolve("test"),
        ),
      AssertionError,
      `Promise did not reject. resolved to "test"`,
    );

    assertRejects(
      () =>
        predict(
          Promise.resolve(1),
        ),
      AssertionError,
      `Promise did not reject. resolved to 1`,
    );
  },
});

Deno.test({
  name: "rejects",
  fn: () => assertEquals(rejects.type, "pre"),
});
