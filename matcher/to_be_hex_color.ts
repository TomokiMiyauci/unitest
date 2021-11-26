// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isHexColor } from "../deps.ts";
import type { MatchResult } from "./types.ts";

function toBeHexColor(actual: string): MatchResult {
  return {
    pass: isHexColor(actual),
    expected: "hex color of 3 or 6 digits",
  };
}

export { toBeHexColor };
