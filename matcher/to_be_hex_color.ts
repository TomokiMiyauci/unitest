// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { MatchResult } from "./types.ts";

function isHexColor(value: string): boolean {
  const hex3 = /^#[a-f\d]{3}$/i;
  const hex6 = /^#[a-f\d]{6}$/i;

  return hex3.test(value) || hex6.test(value);
}

function toBeHexColor(actual: string): MatchResult {
  return {
    pass: isHexColor(actual),
    expected: "hex color of 3 or 6 digits",
  };
}

export { isHexColor, toBeHexColor };
