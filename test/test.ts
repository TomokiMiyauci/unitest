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

/** apply setup to map */
function _applySetup([key, value]: [string, () => SetupReturn]): {
  name: string;
  teardown?: (() => void | Promise<void>) | undefined;
  localThis?: Record<PropertyKey, object> | undefined;
} {
  return { ...value(), name: key };
}

/** reducer for `localThis` */
function _localThisReducer<T extends Record<PropertyKey, () => SetupReturn>>(
  acc: PickLocalThis<T>,
  { name, localThis }: {
    name: string;
    localThis?: Record<PropertyKey, object>;
  },
) {
  if (localThis) {
    (acc as Record<PropertyKey, object>)[name] = localThis;
  }
  return acc;
}

type SetupReturn<
  T extends Record<PropertyKey, object> = Record<PropertyKey, object>,
> = Partial<{
  teardown: () => (void | Promise<void>);
  localThis: T;
}>;

type PickLocalThis<T extends Record<PropertyKey, () => SetupReturn>> = {
  [
    k
      in keyof T as (ReturnType<T[k]> extends
        { localThis: Record<PropertyKey, object> } ? k
        : never)
  ]: Required<
    ReturnType<
      T[k]
    >
  >["localThis"];
};

type Test<T extends Record<PropertyKey, () => SetupReturn>> = {
  setupMap?: T;
  fn: (
    t:
      & PickLocalThis<T>
      & Deno.TestContext,
  ) => void | Promise<void>;
} & Omit<Deno.TestDefinition, "fn">;

/** Register a test which will be run when deno test is used on the command line and the containing module looks like a test module.
 * fn can be async if required.
 */
function test<T extends Record<PropertyKey, () => SetupReturn>>(
  t: Test<T>,
): void;
function test<T extends Record<PropertyKey, () => SetupReturn>>(
  name: string,
  fn: (t: PickLocalThis<T> & Deno.TestContext) => void | Promise<void>,
  options?: Omit<Test<T>, "fn" | "name">,
): void;
function test<T extends Record<PropertyKey, () => SetupReturn>>(
  t: string | Test<T>,
  _fn?: (t: PickLocalThis<T> & Deno.TestContext) => void | Promise<void>,
  _options?: Omit<Test<T>, "fn" | "name">,
): void {
  const { setupMap, fn, ...rest } = isString(t)
    ? { ..._options, fn: _fn, name: t }
    : t;

  const setups = Object.entries(setupMap ?? {}).map(_applySetup);
  const localThis = setups.reduce(_localThisReducer, {} as PickLocalThis<T>);

  /** wrap test register */
  const runner = async (context: Deno.TestContext): Promise<void> => {
    try {
      await fn?.({
        ...localThis,
        ...context,
      });
    } catch (e) {
      if (!(e instanceof Error)) {
        throw Error("panic: unexpected error");
      }

      throw e;
    } finally {
      await Promise.all(setups.map(async ({ teardown }) => await teardown?.()));
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

export { _applySetup, _localThisReducer, defineTest, test };
export type { SetupReturn, Test };
