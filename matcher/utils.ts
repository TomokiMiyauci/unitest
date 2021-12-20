// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { isLength0, isObject, isUndefined } from "../deps.ts";
import { equal } from "../helper/equal.ts";
import type { IsTuple, Minus } from "../_types.ts";

/** take elements except head */
function tail<T extends unknown>(val: readonly T[]): T[] {
  return val.slice(1, Infinity);
}

/** safe accessor for first element */
function head<T extends readonly unknown[]>(
  value: T,
): IsTuple<T> extends true ? T[0] : T[0] | undefined {
  return value[0];
}

/** safe element accessor */
function take<T>(value: readonly T[], index: number): T | undefined {
  return value[index];
}

/** take last element of `array` */
function last<T extends readonly unknown[]>(
  value: T,
): IsTuple<T> extends true ? T[Minus<T["length"]>] : T[number] | undefined {
  return value.slice(-1)[0] as never;
}

/** safe last element accessor */
function takeLast<T extends readonly unknown[] | string>(
  howMany: number,
  val: T,
): T {
  return (howMany <= 0 ? val.slice(0, -howMany) : val.slice(-howMany)) as T;
}

/** check element is exists in `array` */
function contains(array: readonly unknown[], value: unknown): boolean {
  return array.some((v) => equal(v, value));
}

/** check element is exists in `array` deeply */
function containSome(
  target: readonly unknown[],
  part: readonly unknown[],
): boolean {
  return part.some((value) => contains(target, value));
}

/** check all element contain `array` deeply */
function containAll(
  target: readonly unknown[],
  part: readonly unknown[],
): boolean {
  return part.every((value) => contains(target, value));
}

/** check field is exist or not */
function has(
  key: PropertyKey,
  object: object,
): boolean {
  return Object.hasOwnProperty.call(object, key);
}

/** safe get accessor */
function prop(key: PropertyKey, object: object): unknown {
  return (object as never)[key];
}

/** safe get accessor deeply */
function propPath(path: PropertyKey[], object: object): unknown {
  const key = path[0];
  if (isUndefined(key)) return undefined;
  const rest = tail(path);
  if (isLength0(rest)) {
    return prop(key, object);
  }

  const nested = prop(key, object);

  if (has(key, object) && isObject(nested)) {
    return propPath(rest, nested);
  }
  return undefined;
}

/** deep check field is exist or not */
function hasPath(
  path: PropertyKey[],
  object: object,
): boolean {
  const key = path[0];
  if (isUndefined(key)) return false;
  const rest = tail(path);
  if (isLength0(rest)) {
    return has(key, object);
  }

  const nested = prop(key, object);

  if (has(key, object) && isObject(nested)) {
    return hasPath(rest, nested);
  }
  return false;
}

/** Object.entries for `symbol` */
function symbolEntries(value: object): [symbol, unknown][] {
  return Object.getOwnPropertySymbols(value).map((symbol) => [
    symbol,
    prop(symbol, value),
  ]);
}

/** rename field name when `from` is exists, otherwise return as is. */

function rename<
  T extends Record<PropertyKey, unknown>,
  U extends keyof T,
  K extends PropertyKey,
>(
  value: T,
  from: U,
  to: K,
): (Omit<T, U> & { [k in keyof T as k extends U ? K : never]: T[U] }) {
  if (from in value) {
    const { [from]: _, ...rest } = value;
    return {
      ...rest,
      [to as K]: value[from],
    } as never;
  }
  return value as never;
}

export {
  containAll,
  contains,
  containSome,
  has,
  hasPath,
  head,
  last,
  prop,
  propPath,
  rename,
  symbolEntries,
  take,
  takeLast,
};
