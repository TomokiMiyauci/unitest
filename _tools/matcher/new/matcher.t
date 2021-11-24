---
to: matcher/<%= h.changeCase.snake(name) %>.ts
---

// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function <%= h.changeCase.camel(name) %>(actual: unknown): MatchResult {
  return {
    pass: true,
    expected: ""
  }
}

export { <%= h.changeCase.camel(name) %> };
