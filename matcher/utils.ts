// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equal, isLength0, isObject, isUndefined } from "../deps.ts";

function takeLast<T extends readonly unknown[] | string>(
  howMany: number,
  val: T,
): T {
  return (howMany <= 0 ? val.slice(0, -howMany) : val.slice(-howMany)) as T;
}

function contains(array: unknown[], value: unknown): boolean {
  return array.some((v) => equal(v, value));
}

function containSome(target: unknown[], part: unknown[]): boolean {
  return part.some((value) => contains(target, value));
}

function containAll(target: unknown[], part: unknown[]): boolean {
  return part.every((value) => contains(target, value));
}

function has(
  key: PropertyKey,
  object: object,
): boolean {
  return Object.hasOwnProperty.call(object, key);
}

function prop(key: PropertyKey, object: object): unknown {
  return (object as never)[key];
}

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

const tail = <T extends unknown>(val: T[]): T[] => val.slice(1, Infinity);

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

export {
  containAll,
  contains,
  containSome,
  has,
  hasPath,
  prop,
  propPath,
  takeLast,
};
