// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { debug } from "./debug.ts";
import { bgYellow, black, bold } from "../deps.ts";
import { expect } from "../mod.ts";
import { fn } from "../mock/fn.ts";
import type { PostModifierContext } from "./types.ts";

Deno.test("debug", () => {
  const consoleDebug = console.debug;

  const context: PostModifierContext = {
    actual: "test",
    actualHint: "Actual:",
    actualResult: undefined,
    expected: "string",
    expectedHint: "Expected:",
    matcher: () => ({ pass: false, expected: "string" }),
    matcherArgs: [],
    pass: false,
  };

  const table: [PostModifierContext, Record<PropertyKey, unknown>][] = [
    [{} as PostModifierContext, {}],
    [context, context],
  ];

  table.forEach(([value, result]) => {
    const mockObject = fn();
    console.debug = mockObject;
    debug.fn(value);
    expect(mockObject).toHaveBeenCalledWith(
      `\n${bgYellow(black(bold(" DEBUG ")))}\n`,
      result,
    );
  });

  console.debug = consoleDebug;
});
