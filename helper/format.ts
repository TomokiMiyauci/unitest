// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { green, red, yellow } from "../deps.ts";

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
  matcherName: PropertyKey;
  matcherArgs: readonly unknown[];

  resultActual: unknown;
  expected: unknown;
  expectedHint: string;
  actualHint: string;
  preModifierNames: PropertyKey[];
  postModifierNames: PropertyKey[];
};

type StringifyAssertArgs = {
  resultActual: unknown;
  expected: unknown;
  expectedHint?: string;
  actualHint?: string;
};

function stringifyAssert({
  resultActual,
  expected,
  expectedHint,
  actualHint,
}: Required<StringifyAssertArgs>): string {
  return nestText(
    `${actualHint}
${nestText(green(stringify(resultActual)), 2)}
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
    resultActual,
    expected,
    expectedHint,
    actualHint,
    preModifierNames,
    postModifierNames,
  }: StringifyResultArgs,
): string {
  return `${
    stringifyExpect({
      actual: stringify(actual),
      matcherArgs: matcherArgs ? printIterable(matcherArgs).join(", ") : "",
      matcher: yellow(String(matcherName)),
      preModifier: preModifierNames.join("."),
      postModifier: postModifierNames.join("."),
    })
  }

${
    stringifyAssert({
      resultActual,
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
