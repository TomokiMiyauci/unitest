// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { assertExpected, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeFrozen } from "./to_be_frozen.ts";

Deno.test({
  name: "toBeFrozen",
  fn: () => {
    assertSuccess(toBeFrozen(Object.freeze({})));
    assertFail(toBeFrozen({}));
    assertExpected({
      matcher: toBeFrozen,
      expected: "frozen object",
    });
  },
});
