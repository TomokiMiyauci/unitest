// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function toBeGreaterThanOrEqual(
  actual: number | bigint,
  comparison: number | bigint,
): MatchResult {
  if (Number(actual) >= comparison) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeGreaterThanOrEqual(${
      stringify(comparison)
    })`,
  });
}

export { toBeGreaterThanOrEqual };
