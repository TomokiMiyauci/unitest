// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { not, predict } from "./not.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    assertEquals(
      predict({
        pass: true,
        expected: [],
        expectedValue: 1,
        "matcher": {} as any,
        "actual": {} as any,
      }),
      {
        pass: false,
        expected: "[not] 1",
      },
    );

    assertEquals(
      predict({
        pass: false,
        expected: [],
        expectedValue: 1,
        "matcher": {} as any,
        "actual": {} as any,
      }),
      {
        pass: true,
        expected: undefined,
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
