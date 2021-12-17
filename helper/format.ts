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

function printIterable(iterable: readonly unknown[]): string[] {
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
  matcherName: string;
  matcherArgs: readonly unknown[];

  actualResult: unknown;
  expected: unknown;
  expectedHint: string;
  actualHint: string;
  preModifierName?: PropertyKey;
  postModifierName?: PropertyKey;
};

type StringifyAssertArgs = {
  actualResult: unknown;
  expected: unknown;
  expectedHint?: string;
  actualHint?: string;
};

function stringifyAssert({
  actualResult,
  expected,
  expectedHint,
  actualHint,
}: Required<StringifyAssertArgs>): string {
  return nestText(
    `${actualHint}
${nestText(green(stringify(actualResult)), 2)}
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
    matcherName,
    actualResult,
    expected,
    expectedHint,
    actualHint,
    preModifierName,
    postModifierName,
  }: StringifyResultArgs,
): string {
  return `${
    stringifyExpect({
      actual: stringify(actual),
      matcherArgs: matcherArgs ? printIterable(matcherArgs).join(", ") : "",
      matcher: yellow(matcherName),
      preModifier: isUndefined(preModifierName) ? "" : String(preModifierName),
      postModifier: isUndefined(postModifierName)
        ? ""
        : String(postModifierName),
    })
  }

${
    stringifyAssert({
      actualResult,
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
