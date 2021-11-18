// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, stringify, success } from "@matcher/utils.ts";

function toBeGreaterThan(
  actual: unknown,
  comparison: number | bigint,
): MatchResult {
  if (Number(actual) > comparison) return success();

  return fail({
    message: `expect(${stringify(actual)}).toBeGreaterThan(${
      stringify(comparison)
    })`,
  });
}

export { toBeGreaterThan };
