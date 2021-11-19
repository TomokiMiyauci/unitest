// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, stringify, success } from "@matcher/utils.ts";
import type { Mock } from "@mock/types.ts";
import type { MatchResult } from "@matcher/types.ts";
import { isLength0 } from "@/deps.ts";

function toHaveBeenCalled({ mock }: Mock): MatchResult {
  if (!isLength0(mock.calls)) return success();

  return fail({
    message: `expect(${stringify(mock)}).toHaveBeenCalled()`,
  });
}

export { toHaveBeenCalled };
