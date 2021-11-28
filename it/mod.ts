// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyFn } from "../_types.ts";
import { it as _it } from "../describe/mod.ts";

import { each } from "./each.ts";

function defineIt<T extends Record<string | symbol, AnyFn>>(
  obj: T,
): typeof _it & T {
  Object.entries(obj).forEach(([key, value]) => {
    (_it as any)[key] = value;
  });

  return _it as any;
}

const it = defineIt({
  each,
});

export { defineIt, it };
