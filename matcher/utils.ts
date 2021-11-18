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

export { fail, success };
