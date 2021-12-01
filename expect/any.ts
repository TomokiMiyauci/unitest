// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { equality } from "../helper/equal.ts";
import {
  isBoolean,
  isFunction,
  isObject,
  isString,
  isSymbol,
} from "../deps.ts";
import type { Equality } from "../helper/equal.ts";
import { isAnyNumber } from "./any_number.ts";

function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}

function isAnyString(value: unknown): value is string | String {
  return isString(value) || value instanceof String;
}

function isAnyFunction(value: unknown): value is Function {
  return isFunction(value) || value instanceof Function;
}

function isAnyBoolean(value: unknown): value is boolean | Boolean {
  return isBoolean(value) || value instanceof Boolean;
}

function isAnyBigInt(value: unknown): value is bigint | BigInt {
  return isBigInt(value) || value instanceof BigInt;
}

function isAnySymbol(value: unknown): value is symbol | Symbol {
  return isSymbol(value) || value instanceof Symbol;
}

function equalAnyOf(a: unknown, b: Function): boolean {
  switch (b) {
    case String: {
      return isAnyString(a);
    }
    case Number: {
      return isAnyNumber(a);
    }
    case Function: {
      return isAnyFunction(a);
    }
    case Boolean: {
      return isAnyBoolean(a);
    }
    case BigInt: {
      return isAnyBigInt(a);
    }
    case Symbol: {
      return isAnySymbol(a);
    }
    case Object: {
      return isObject(a);
    }
  }

  return a instanceof b;
}

/** equal to any Object */
class Any implements Equality {
  constructor(private object: Function) {}

  [equality](actual: unknown): boolean {
    return equalAnyOf(actual, this.object);
  }

  toString(): string {
    return "Any";
  }
}

/** make `Any` */
function any(object: Function): Any {
  return new Any(object);
}

export {
  Any,
  any,
  equalAnyOf,
  isAnyBigInt,
  isAnyBoolean,
  isAnyFunction,
  isAnyString,
  isAnySymbol,
  isBigInt,
};
