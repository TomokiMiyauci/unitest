// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { AnyFn } from "../_types.ts";
import { isString } from "../deps.ts";
import { each } from "./each.ts";

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

async function hasReadPermission(): Promise<boolean> {
  try {
    const { state } = await Deno.permissions.query({
      name: "read",
    });

    return state === "granted";
  } catch {
    return false;
  }
}

// async function safeReadFile(
//   ...[path, options]: Parameters<typeof Deno.readTextFile>
// ): Promise<[false] | [true, string]> {
//   try {
//     const code = await Deno.readTextFile(
//       path,
//       options,
//     );

//     return [true, code];
//   } catch {
//     return [false];
//   }
// }

function _test<T extends Record<PropertyKey, unknown>>(t: Test<T>): void;
function _test(
  name: string,
  fn: Deno.TestDefinition["fn"],
): void;
function _test<T extends Record<PropertyKey, unknown>>(
  t: string | Test<T>,
  ...args: Deno.TestDefinition["fn"][]
): void {
  if (isString(t)) {
    Deno.test(t, args[0]);
  } else {
    const { setup, teardown, fn, ...rest } = t;
    Deno.test({
      ...rest,
      fn: async (denoContext) => {
        const context = setup?.() ?? {} as T;

        try {
          await fn({ ...context, ...denoContext });
        } catch (e) {
          if (!(e instanceof Error)) {
            throw Error("panic: unexpected error");
          }

          if (!e.stack || !await hasReadPermission()) {
            throw e;
          }

          // TODO:(miyauci) implement friendly stack trace

          throw e;
        } finally {
          teardown?.(context);
        }
      },
    });
  }
}

const test = defineTest({
  extendMap: {
    each,
  },
});

export { defineTest, test };
