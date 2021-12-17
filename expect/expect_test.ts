// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { defineExpect, expect, extendExpect } from "./mod.ts";
import {
  assertEquals,
  assertExists,
  assertThrowsAssertionError,
} from "../dev_deps.ts";
import { trim } from "../modifier/trim.ts";

import { jestExtendedMatcherMap, jestMatcherMap } from "../matcher/preset.ts";
import { jestModifierMap } from "../modifier/preset.ts";
import { MockObject } from "../mock/fn.ts";

type JestMatcherMap = typeof jestMatcherMap;

type PickByFirstArg<
  T extends Record<string, (...args: any[]) => any>,
  U = never,
> = {
  [k in keyof T as Parameters<T[k]>[0] extends U ? k : never]: T[k];
};

type NumberMatcher = PickByFirstArg<JestMatcherMap, number | bigint>;
type StringMatcher = PickByFirstArg<JestMatcherMap, string>;
type MockMatcher = PickByFirstArg<JestMatcherMap, MockObject>;
type FunctionMatcher = PickByFirstArg<
  JestMatcherMap,
  (...args: readonly unknown[]) => any
>;
type IterableMatcher = PickByFirstArg<
  JestMatcherMap,
  Iterable<unknown>
>;

type TypeMatcher = Omit<
  typeof jestMatcherMap,
  | keyof NumberMatcher
  | keyof StringMatcher
  | keyof MockMatcher
  | keyof FunctionMatcher
  | keyof IterableMatcher
>;

Deno.test({
  name: "expect",
  fn: async () => {
    expect("").toBe("");
    expect("").not.toBe(" ");
    assertThrowsAssertionError(() => expect("").toBe("1"));
    assertThrowsAssertionError(() => expect("").not.toBe(""));

    expect({}).toEqual({});
    expect({}).not.toEqual([]);
    assertThrowsAssertionError(() => expect({}).toEqual({ a: 1 }));
    assertThrowsAssertionError(() => expect({}).not.toEqual({}));

    expect("").toBeFalsy();
    expect(" ").not.toBeFalsy();
    assertThrowsAssertionError(() => expect(" ").toBeFalsy());
    assertThrowsAssertionError(() => expect("").not.toBeFalsy());

    expect(" ").toBeTruthy();
    assertThrowsAssertionError(() => expect("").toBeTruthy());

    expect(undefined).toBeUndefined();
    assertThrowsAssertionError(() => expect(null).toBeUndefined());

    expect(null).toBeDefined();
    assertThrowsAssertionError(() => expect(undefined).toBeDefined());

    expect(null).toBeNull();
    assertThrowsAssertionError(() => expect(undefined).toBeNull());

    expect(NaN)["toBeNaN"].apply(NaN);
    assertThrowsAssertionError(() => expect(1).toBeNaN());

    expect(new String("")).toBeInstanceOf(String);
    assertThrowsAssertionError(() => expect("").toBeInstanceOf(String));

    await expect(Promise.resolve("aa")).resolves.toBe("aa");
    await expect(Promise.reject("a") as Promise<string>).rejects.toBe("a");
  },
});

Deno.test("getDefinition", () => {
  assertExists(expect.getDefinition);
  assertExists(defineExpect({ matcherMap: {} }).getDefinition);

  assertEquals(defineExpect({ matcherMap: {} }).getDefinition(), {
    matcherMap: {},
    modifierMap: undefined,
  });

  assertEquals(defineExpect({ matcherMap: jestMatcherMap }).getDefinition(), {
    matcherMap: jestMatcherMap,
    modifierMap: undefined,
  });

  assertEquals(
    defineExpect({ matcherMap: jestMatcherMap, modifierMap: jestModifierMap })
      .getDefinition(),
    {
      matcherMap: jestMatcherMap,
      modifierMap: jestModifierMap,
    },
  );
});

Deno.test("extendExpect", () => {
  const ex = extendExpect(expect, {
    matcherMap: jestExtendedMatcherMap,
  });

  ex("unitest").toEndWith("test");

  const ex2 = extendExpect(ex, {
    matcherMap: {
      toFoo: (actual: unknown) => ({
        pass: actual === "foo",
        expected: "foo",
      }),
    },
  });

  ex2("foo")["toFoo"]();

  const ex3 = extendExpect(expect, {
    modifierMap: {
      trim,
    },
  });

  ex3(" test ").trim.toBe("test");
});

export type { TypeMatcher };
