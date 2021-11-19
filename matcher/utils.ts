// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";

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

export { fail, stringify, success, takeLast };
