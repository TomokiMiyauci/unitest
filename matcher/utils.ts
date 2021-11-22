// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { equal, green, isUndefined, red } from "../deps.ts";

function stringify(value: unknown): string {
  return String(value);
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
  preModifier,
  postModifier,
}: {
  actual: string;
  expected: string;
  matcher: string;
  preModifier: string;
  postModifier: string;
}): string {
  return `expect(${actual})${preModifier ? `.${preModifier}` : ""}${
    postModifier ? `.${postModifier}` : ""
  }.${matcher}(${expected})`;
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
    expectedLabel = "Expected:",
    actualLabel = "Actual:",
    preModifier,
    postModifier,
  }: {
    actual: unknown;
    expected: unknown;
    matcherArgs?: unknown[];
    matcher: string;
    expectedLabel?: string;
    actualLabel?: string;
    preModifier?: string | symbol;
    postModifier?: string | symbol;
  },
): string {
  return `${
    stringifyExpect({
      actual: stringify(actual),
      expected: matcherArgs ? printIterable(matcherArgs).join(", ") : "",
      matcher: matcher,
      preModifier: isUndefined(preModifier) ? "" : String(preModifier),
      postModifier: isUndefined(postModifier) ? "" : String(postModifier),
    })
  }

${
    nestText(
      `${actualLabel}
${nestText(green(stringify(actual)), 2)}
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

export { contains, nestText, printHint, stringify, stringifyExpect, takeLast };
