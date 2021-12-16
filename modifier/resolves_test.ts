// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, resolves } from "./resolves.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: async () => {
    assertEquals(
      await predict(
        Promise.resolve("test"),
      ),
      { actual: "test" },
    );
  },
});

Deno.test({
  name: "resolves",
  fn: () => assertEquals(resolves.type, "pre"),
});
