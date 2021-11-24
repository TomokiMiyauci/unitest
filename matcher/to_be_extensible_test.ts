// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { assertExpected, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeExtensible } from "./to_be_extensible.ts";

Deno.test({
  name: "toBeExtensible",
  fn: () => {
    assertSuccess(toBeExtensible({}));
    assertFail(toBeExtensible(Object.preventExtensions({})));

    assertExpected({
      matcher: toBeExtensible,
      expected: "extensible object",
    });
  },
});
