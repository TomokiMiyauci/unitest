---
to: matcher/<%= h.changeCase.snake(name) %>_test.ts
---

// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { <%= h.changeCase.camel(name) %> } from "./<%= h.changeCase.snake(name) %>.ts";

Deno.test({
  name: "<%= h.changeCase.camel(name) %>",
  fn: () => {
    assertSuccess(<%= h.changeCase.camel(name) %>(true));
    assertFail(<%= h.changeCase.camel(name) %>(false));

    assertEquals(<%= h.changeCase.camel(name) %>(true), {
      pass: true,
      expected: ""
    });
  },
});
