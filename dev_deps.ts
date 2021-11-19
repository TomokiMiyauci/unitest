// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
export {
  assert,
  assertThrows,
} from "https://deno.land/std@0.115.1/testing/asserts.ts";

import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import type { MatchResult } from "@matcher/types.ts";

function assertSuccess({ pass }: MatchResult): void {
  assertEquals(pass, true);
}

function assertFail({ pass }: MatchResult): void {
  assertEquals(pass, false);
}

export { assertEquals, assertFail, assertSuccess };
