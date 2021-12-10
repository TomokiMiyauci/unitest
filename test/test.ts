// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { isString } from "../deps.ts";
import type { AnyFn } from "../_types.ts";

// interface CallSite {
//   getThis(): any;
//   getTypeName(): string;
//   getFunctionName(): string;
//   getMethodName(): string;
//   getFileName(): string;
//   getLineNumber(): number;
//   getColumnNumber(): number;
//   getFunction(): Function;
//   getEvalOrigin(): string;
//   isNative(): boolean;
//   isToplevel(): boolean;
//   isEval(): boolean;
//   isConstructor(): boolean;
// }

// declare global {
//   interface ErrorConstructor {
//     prepareStackTrace(err: Error, callsites: CallSite[]): any;
//   }
// }

type SetupCallback<T extends Record<PropertyKey, object>> = {
  teardown: () => void | Promise<void>;
  localThis: T;
};

type Test<LocalThis extends Record<PropertyKey, object>> = {
  setup?: () => Partial<SetupCallback<LocalThis>> | void;
  fn: (t: LocalThis & Deno.TestContext) => void | Promise<void>;
} & Omit<Deno.TestDefinition, "fn">;

/** Register a test which will be run when deno test is used on the command line and the containing module looks like a test module.
 * fn can be async if required.
 */
function test<T extends Record<PropertyKey, object>>(t: Test<T>): void;
function test<T extends Record<PropertyKey, object>>(
  name: string,
  fn: (t: T & Deno.TestContext) => void | Promise<void>,
  options?: Omit<Test<T>, "fn" | "name">,
): void;
function test<T extends Record<PropertyKey, object>>(
  t: string | Test<T>,
  _fn?: (t: T & Deno.TestContext) => void | Promise<void>,
  _options?: Omit<Test<T>, "fn" | "name">,
): void {
  const { setup, fn, ...rest } = isString(t)
    ? { ..._options, fn: _fn, name: t }
    : t;

  const runner = async (context: Deno.TestContext): Promise<void> => {
    const { localThis = {} as T, teardown } = setup?.() ?? {};

    try {
      await fn?.({ ...localThis, ...context });
    } catch (e) {
      if (!(e instanceof Error)) {
        throw Error("panic: unexpected error");
      }

      throw e;
    } finally {
      await teardown?.();
    }
  };

  Deno.test({
    ...rest,
    fn: runner,
  });
}

/** define custom test register */
function defineTest<T extends Record<string | symbol, AnyFn>>({
  extendMap,
}: {
  extendMap?: T;
}): typeof test & T {
  Object.entries(extendMap ?? {}).forEach(([key, value]) => {
    (test as any)[key] = value;
  });

  return test as never;
}

export { defineTest, test };
export type { SetupCallback, Test };
