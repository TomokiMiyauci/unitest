// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
type Test<Context extends Record<PropertyKey, unknown>> = {
  setup?: () => Context | void;
  teardown?: (context: Context) => void | Promise<void>;
  fn: (t: Context) => void | Promise<void>;
} & Omit<Deno.TestDefinition, "fn">;

function test<T extends Record<PropertyKey, unknown>>(t: Test<T>) {
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

export { test };
