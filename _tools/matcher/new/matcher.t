---
to: matcher/<%= h.changeCase.snake(name) %>.ts
---

// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import type { MatchResult } from "@matcher/types.ts";
import { fail, printHint, success } from "@matcher/utils.ts";

function <%= h.changeCase.camel(name) %>(actual: unknown): MatchResult {
  if (true) return success();

  return fail({
    message: printHint({
      actual,
      expected: "",
      matcher: "<%= h.changeCase.camel(name) %>",
    }),
  });
}

export { <%= h.changeCase.camel(name) %> };
