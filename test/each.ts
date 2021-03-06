// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { sprintf } from "../deps.ts";
import type { MatchResult } from "../matcher/types.ts";

function each<T extends ReadonlyArray<unknown> | [unknown]>(
  cases: ReadonlyArray<T>,
): (
  name: string,
  fn: (...arg: T) => Promise<void | MatchResult> | void | MatchResult,
) => void {
  return (name: string, fn: (...args: T) => void): void => {
    cases.forEach((_case) => {
      Deno.test({
        name: sprintf(name, ..._case),
        fn: () => fn(..._case),
      });
    });
  };
}

export { each };
