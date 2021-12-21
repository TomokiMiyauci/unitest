// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { predict, resolves } from "./resolves.ts";
import { magenta } from "../deps.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import type { PreModifierContext } from "./types.ts";

Deno.test({
  name: "predict",
  fn: async () => {
    assertEquals(
      await predict(
        Promise.resolve("test"),
      ).then(({ actual }) => actual),
      "test",
    );
  },
});

Deno.test({
  name: "resolves",
  fn: async () => {
    assertEquals(resolves.type, "pre");
    assertExists(
      resolves.fn(Promise.resolve(""), {} as PreModifierContext).then((
        { reserveActualHint },
      ) => reserveActualHint),
    );

    assertEquals(
      await resolves.fn(Promise.resolve(""), {} as PreModifierContext).then((
        { reserveActualHint },
      ) => reserveActualHint?.("Actual:")),
      `Actual: ${magenta("[resolved]")}`,
    );
  },
});
