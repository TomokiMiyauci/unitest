// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expectTo } from "./_utils.ts";
import { assertEquals } from "../dev_deps.ts";
import { not } from "../modifier/not.ts";
import { NOT } from "../dev_deps.ts";
import { toEqualIgnoringWhitespace } from "../matcher/to_equal_ignoring_whitespace.ts";
import { toContainAnyKeys } from "../matcher/to_contain_any_keys.ts";

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
        actual: "",
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
        actual: "",
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
        actual: "",
        expected: "empty string",
        actualHint: "Actual:",
        expectedHint: `Expected value: ${NOT}`,
      },
    );

    assertEquals(
      expectTo({
        actual: " a b c",
        matcher: toEqualIgnoringWhitespace,
        expectedHint: "Expected:",
        matcherArgs: [" e f g "],
        actualHint: "Actual:",
      }),
      {
        pass: false,
        actual: "abc",
        actualHint: "Actual except white-space:",
        expectedHint: `Expected except white-space:`,
        expected: "efg",
      },
    );

    assertEquals(
      expectTo({
        actual: { a: 1, b: 2 },
        matcher: toContainAnyKeys,
        expectedHint: "Expected:",
        actualHint: "Actual:",
        matcherArgs: [["c", "d", "f"]],
      }),
      {
        pass: false,
        actual: Object.keys({ a: 1, b: 2 }),
        actualHint: "Actual keys:",
        expectedHint: `Expected to contain any of keys:`,
        expected: ["c", "d", "f"],
      },
    );
  },
});
