// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toContainValues } from "./to_contain_values.ts";

Deno.test({
  name: "toContainValues",
  fn: () => {
    assertSuccess(toContainValues({}, []));
    assertSuccess(toContainValues({ a: 1 }, [1]));
    assertSuccess(toContainValues({ a: 1, b: {}, c: [], d: 2 }, [1, {}, []]));
    assertSuccess(toContainValues({ a: 1, b: 1, c: [], d: [], e: 2 }, [[], 1]));
    assertFail(toContainValues({ a: 1, b: {}, c: [], d: 2 }, [undefined]));

    assertEquals(toContainValues({ a: 1, b: null, c: {} }, [1, undefined]), {
      pass: false,
      resultActual: [1, null, {}],
      actualHint: "Actual values:",
      expected: [1, undefined],
      expectedHint: "Expected to contain all:",
    });
  },
});
