// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { fail, stringify, success } from "@matcher/utils.ts";
import type { MatchResult } from "@matcher/types.ts";
import type { AnyFn } from "@/_types.ts";
import { isError, isUndefined } from "@/deps.ts";

function predict(actual: AnyFn) {
  let hasError = false;
  let e;

  try {
    actual();
  } catch (_e) {
    hasError = true;
    e = _e;
  }

  return {
    hasError,
    e,
  };
}

function toThrow(actual: AnyFn, error?: string | RegExp): MatchResult {
  const { hasError, e } = predict(actual);

  if (hasError) {
    if (isUndefined(error)) return success();

    if (isError(e) && e.message.match(error)) return success();

    if (e === error) return success();
  }

  return fail({
    message: `expect(${stringify(actual)}).toThrow(${stringify(error)})`,
  });
}

export { predict, toThrow };
