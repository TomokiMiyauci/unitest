// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { not, predict } from "./not.ts";
import { assertEquals } from "../dev_deps.ts";
import { NOT } from "../dev_deps.ts";
import {
  DEFAULT_ACTUAL_HINT,
  DEFAULT_EXPECTED_HINT,
} from "../expect/_utils.ts";

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
        expectedHint: DEFAULT_EXPECTED_HINT,
        actualHint: DEFAULT_ACTUAL_HINT,
        resultActual: "",
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
        actualHint: DEFAULT_ACTUAL_HINT,
        resultActual: "",
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
