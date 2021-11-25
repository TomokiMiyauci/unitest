// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { green, isUndefined, red, yellow } from "../deps.ts";

function isDeno(): boolean {
  return "Deno" in globalThis;
}

function stringify(value: unknown): string {
  const _stringify = isDeno() ? Deno.inspect : String;
  return _stringify(value);
}

function printIterable(iterable: unknown[]): string[] {
  return iterable.map((item) => stringify(item));
}

function nestText(text: string, space: number): string {
  const whiteSpace = " ";
  return `${whiteSpace.repeat(space)}${text}`.replaceAll(
    "\n",
    `\n${whiteSpace.repeat(space)}`,
  );
}

type StringifyExpectArgs = {
  actual: string;
  matcherArgs: string;
  matcher: string;
  preModifier: string;
  postModifier: string;
};

function stringifyExpect({
  actual,
  matcherArgs,
  matcher,
  preModifier,
  postModifier,
}: StringifyExpectArgs): string {
  return `expect(${actual})${preModifier ? `.${preModifier}` : ""}${
    postModifier ? `.${postModifier}` : ""
  }.${matcher}(${matcherArgs})`;
}

type StringifyResultArgs = {
  actual: unknown;
  expected: unknown;
  matcherArgs?: unknown[];
  matcher: string;
  expectedHint?: string;
  actualHint?: string;
  preModifier?: string | symbol;
  postModifier?: string | symbol;
};

type StringifyAssertArgs = {
  actual: unknown;
  expected: unknown;
  expectedHint?: string;
  actualHint?: string;
};

function stringifyAssert({
  actual,
  expected,
  expectedHint = "Expected:",
  actualHint = "Actual:",
}: StringifyAssertArgs): string {
  return nestText(
    `${actualHint}
${nestText(green(stringify(actual)), 2)}
${expectedHint}
${nestText(red(stringify(expected)), 2)}
`,
    4,
  );
}

function stringifyResult(
  {
    actual,
    matcherArgs,
    matcher,
    expected,
    expectedHint = "Expected:",
    actualHint = "Actual:",
    preModifier,
    postModifier,
  }: StringifyResultArgs,
): string {
  return `${
    stringifyExpect({
      actual: stringify(actual),
      matcherArgs: matcherArgs ? printIterable(matcherArgs).join(", ") : "",
      matcher: yellow(matcher),
      preModifier: isUndefined(preModifier) ? "" : String(preModifier),
      postModifier: isUndefined(postModifier) ? "" : String(postModifier),
    })
  }

${
    stringifyAssert({
      actual,
      actualHint,
      expected,
      expectedHint,
    })
  }`;
}

export {
  nestText,
  stringify,
  stringifyAssert,
  stringifyExpect,
  stringifyResult,
};
export type { StringifyAssertArgs, StringifyExpectArgs, StringifyResultArgs };
