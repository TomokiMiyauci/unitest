// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertExpected, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeSealed } from "./to_be_sealed.ts";

Deno.test({
  name: "toBeSealed",
  fn: () => {
    assertSuccess(toBeSealed(Object.seal({})));
    assertFail(toBeSealed({}));

    assertExpected({
      matcher: toBeSealed,
      expected: "sealed object",
    });
  },
});
