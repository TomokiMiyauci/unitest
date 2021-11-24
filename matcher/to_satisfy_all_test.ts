// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertExpected, assertFail, assertSuccess } from "../dev_deps.ts";
import { toSatisfyAll } from "./to_satisfy_all.ts";
import { isNumber, isString } from "../deps.ts";

Deno.test({
  name: "toSatisfyAll",
  fn: () => {
    assertSuccess(toSatisfyAll([""], (v) => v === ""));
    assertSuccess(toSatisfyAll(["", 1, 2], (v) => isString(v) || isNumber(v)));
    assertFail(toSatisfyAll(["a", "b", "c"], (v) => v === "d"));

    assertExpected({
      matcher: toSatisfyAll,
      expected: "satisfy predicate for all values",
    }, {
      actual: [],
      expectedArgs: [() => true],
    });
  },
});
