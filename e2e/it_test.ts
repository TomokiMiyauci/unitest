// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { it } from "../mod.ts";

Deno.test({
  name: "it.each is exists",
  fn: () => {
    // use toHaveProperty
    console.log(it.each);
  },
});
