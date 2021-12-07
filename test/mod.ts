// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { each } from "./each.ts";
import { defineTest, test as _test } from "./test.ts";

const test = defineTest({
  extendMap: {
    each,
  },
});

export { defineTest, test };
