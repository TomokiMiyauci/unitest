// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { not, predict } from "./not.ts";
import { assertEquals } from "../dev_deps.ts";
import { NOT } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    assertEquals(
      predict({
        pass: true,
        matcherArgs: [],
        expected: 1,
        matcher: {} as any,
        actual: {} as any,
        expectedHint: "Expected:",
      }),
      {
        pass: false,
        expectedHint: `Expected: ${NOT}`,
      },
    );

    assertEquals(
      predict({
        pass: false,
        matcherArgs: [],
        expected: 1,
        matcher: {} as any,
        actual: {} as any,
        expectedHint: "Expected value is:",
      }),
      {
        pass: true,
        expectedHint: `Expected value is: ${NOT}`,
      },
    );
  },
});

Deno.test({
  name: "not",
  fn: () => {
    assertEquals(not["type"], "post");
  },
});
