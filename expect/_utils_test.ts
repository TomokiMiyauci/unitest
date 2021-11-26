// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expectTo } from "./_utils.ts";
import { assertEquals } from "../dev_deps.ts";
import { not } from "../modifier/not.ts";
import { NOT } from "../dev_deps.ts";

Deno.test({
  name: "expectTo",
  fn: () => {
    assertEquals(
      expectTo({
        actual: "",
        matcher: (actual: unknown) => ({
          pass: actual === "",
          expected: "empty string",
        }),
        matcherArgs: [""],
        expectedHint: "Expected:",
        actualHint: "Actual:",
      }),
      {
        pass: true,
        expected: "empty string",
        actualHint: "Actual:",
        expectedHint: "Expected:",
      },
    );

    assertEquals(
      expectTo({
        actual: "",
        matcher: (actual: unknown) => ({
          pass: actual === "",
          expected: "empty string",
          expectedHint: "Expected value:",
          actualHint: "Actual value:",
        }),
        expectedHint: "Expected:",
        actualHint: "Actual:",
        matcherArgs: [""],
      }),
      {
        pass: true,
        expected: "empty string",
        actualHint: "Actual value:",
        expectedHint: "Expected value:",
      },
    );

    assertEquals(
      expectTo({
        actual: "",
        postModifier: not.fn,
        matcher: (actual: unknown) => ({
          pass: actual === "",
          expected: "empty string",
          expectedHint: "Expected value:",
        }),
        expectedHint: "Expected:",
        matcherArgs: [""],
        actualHint: "Actual:",
      }),
      {
        pass: false,
        expected: "empty string",
        actualHint: "Actual:",
        expectedHint: `Expected value: ${NOT}`,
      },
    );
  },
});