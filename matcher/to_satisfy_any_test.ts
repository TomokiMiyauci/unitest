// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertExpected, assertFail, assertSuccess } from "../dev_deps.ts";
import { toSatisfyAny } from "./to_satisfy_any.ts";

Deno.test({
  name: "toSatisfyAny",
  fn: () => {
    assertSuccess(toSatisfyAny(["", 1, null], (v) => v === 1));
    assertFail(toSatisfyAny([], () => true));

    assertExpected({
      matcher: toSatisfyAny,
      expected: "satisfy predicate for any values",
    }, {
      actual: [],
      expectedArgs: [() => true],
    });
  },
});
