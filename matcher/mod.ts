// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toBe } from "./to_be.ts";
export * from "./types.ts";
export * from "./utils.ts";

const jestMatcher = {
  toBe,
};

export { jestMatcher, toBe };
