// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { isNil } from "@/deps.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function toBeAnything(actual: unknown): MatchResult {
  if (!isNil(actual)) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeAnything()`,
  });
}

export { toBeAnything };
