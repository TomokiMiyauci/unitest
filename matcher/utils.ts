// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { equal, red } from "@/deps.ts";

function success(options?: {
  message: string;
}): MatchResult {
  return {
    pass: true,
    message: options?.message,
  };
}

function fail(options?: {
  message: string;
}): MatchResult {
  return {
    pass: false,
    message: options?.message,
  };
}

function stringify(value: unknown): string {
  return Deno.inspect(value);
}

function takeLast<T extends readonly unknown[] | string>(
  howMany: number,
  val: T,
): T {
  return (howMany <= 0 ? val.slice(0, -howMany) : val.slice(-howMany)) as T;
}

function nestText(text: string, space: number): string {
  const whiteSpace = " ";
  return `${whiteSpace.repeat(space)}${text}`.replaceAll(
    "\n",
    `\n${whiteSpace.repeat(space)}`,
  );
}

function stringifyExpect({
  actual,
  expected,
  matcher,
}: {
  actual: string;
  expected: string;
  matcher: string;
}): string {
  return `expect(${actual}).${matcher}(${expected})`;
}

function printIterable(iterable: unknown[]): string[] {
  return iterable.map((item) => stringify(item));
}

function printHint(
  {
    actual,
    expected,
    matcher,
    matcherArgs,
    expectedLabel = "Expected value to be:",
    actualLabel = "Received:",
  }: {
    actual: unknown;
    expected: unknown;
    matcherArgs?: unknown[];
    matcher: string;
    expectedLabel?: string;
    actualLabel?: string;
  },
): string {
  return `${
    stringifyExpect({
      actual: stringify(actual),
      expected: matcherArgs ? printIterable(matcherArgs).join(", ") : "",
      matcher: matcher,
    })
  }

${
    nestText(
      `${actualLabel}
${nestText(red(stringify(actual)), 2)}
${expectedLabel}
${nestText(red(stringify(expected)), 2)}
`,
      4,
    )
  }`;
}

function contains(array: unknown[], value: unknown): boolean {
  return array.some((v) => equal(v, value));
}

export {
  contains,
  fail,
  nestText,
  printHint,
  stringify,
  stringifyExpect,
  success,
  takeLast,
};
