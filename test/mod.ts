// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AnyFn } from "../_types.ts";
import { each } from "./each.ts";

type Test<Context extends Record<PropertyKey, unknown>> = {
  setup?: () => Context | void;
  teardown?: (context: Context) => void | Promise<void>;
  fn: (t: Context & Deno.TestContext) => void | Promise<void>;
} & Omit<Deno.TestDefinition, "fn">;

function defineTest<T extends Record<string | symbol, AnyFn>>({
  extendMap,
}: {
  extendMap?: T;
}): typeof _test & T {
  Object.entries(extendMap ?? {}).forEach(([key, value]) => {
    (_test as any)[key] = value;
  });

  return _test as never;
}

function _test<T extends Record<PropertyKey, unknown>>(t: Test<T>) {
  const { setup, teardown, fn, ...rest } = t;

  Deno.test({
    ...rest,
    fn: (denoContext) => {
      const context = setup?.() ?? {} as T;

      try {
        fn({ ...context, ...denoContext });
      } finally {
        teardown?.(context);
      }
    },
  });
}

const test = defineTest({
  extendMap: {
    each,
  },
});

export { defineTest, test };
