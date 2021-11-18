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
  return String(value);
}

export { fail, stringify, success };
