// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect } from "./mod.ts";
import { assertThrowsAssertionError } from "../dev_deps.ts";

import { jestMatcherMap } from "../matcher/preset.ts";
import { Mock } from "../mock/types.ts";
import type { ContainIterable } from "../matcher/to_contain.ts";

type JestMatcherMap = typeof jestMatcherMap;

type PickByFirstArg<
  T extends Record<string, (...args: any[]) => any>,
  U = never,
> = {
  [k in keyof T as Parameters<T[k]>[0] extends U ? k : never]: T[k];
};

type NumberMatcher = PickByFirstArg<JestMatcherMap, number | bigint>;
type StringMatcher = PickByFirstArg<JestMatcherMap, string>;
type MockMatcher = PickByFirstArg<JestMatcherMap, Mock>;
type FunctionMatcher = PickByFirstArg<
  JestMatcherMap,
  (...args: readonly unknown[]) => any
>;
type ContainMatcher = PickByFirstArg<
  JestMatcherMap,
  ContainIterable
>;

type TypeMatcher = Omit<
  typeof jestMatcherMap,
  | keyof NumberMatcher
  | keyof StringMatcher
  | keyof MockMatcher
  | keyof FunctionMatcher
  | keyof ContainMatcher
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

    expect("").toBeAnything();
    assertThrowsAssertionError(() => expect(undefined).toBeAnything());

    expect(NaN)["toBeNaN"].apply(NaN);
    assertThrowsAssertionError(() => expect(1).toBeNaN());

    expect(new String("")).toBeInstanceOf(String);
    assertThrowsAssertionError(() => expect("").toBeInstanceOf(String));

    await expect(Promise.resolve("aa")).resolves.toBe("aa");
    await expect(Promise.reject("a")).rejects.toBe("a");
  },
});

export type { TypeMatcher };
