// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AssertionError, isPromise, isString } from "../deps.ts";
import { stringify } from "../matcher/utils.ts";
import type { Matcher, MatchResult } from "../matcher/types.ts";
import type {
  AnyFn,
  OmitBy,
  PropertyFilter,
  ShiftRightParameters,
} from "../_types.ts";
import { jestMatcherMap } from "../matcher/preset.ts";

type MatcherMap = Record<
  string | symbol,
  Matcher
>;

type Expected<
  T extends MatcherMap,
  V extends string = "not" | "resolves" | "rejects",
> =
  & {
    [k in V]: Omit<Shift<T>, k>;
  }
  & Shift<T>;

type Shift<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: ShiftRightParameters<T[k], MatchResult>;
};

function defineExpect<M extends MatcherMap>(
  matcherMap: M,
) {
  return <T = unknown>(actual: T): Expected<OmitBy<PropertyFilter<M, T>>> => {
    let _isNot = false;
    let _isPromise = false;

    const self: any = new Proxy({}, {
      get: (_, name) => {
        if (name === "not") {
          _isNot = true;
          return self;
        }

        if (isString(name) && ["resolves", "rejects"].includes(name)) {
          if (!isPromise(actual)) {
            throw new AssertionError("expected value must be a Promise");
          }

          if (name === "rejects") {
            actual = ((actual as unknown as Promise<T>).then((v) => {
              throw new AssertionError(
                `Promise did not reject. resolved to ${stringify(v)}`,
              );
            }).catch((v) => v)) as unknown as T;
          }

          _isPromise = true;
          return self;
        }

        const matcher = matcherMap[name];
        if (!matcher) {
          throw new TypeError(`matcher not found: ${stringify(name)}`);
        }

        return (...args: any[]) => {
          const assert = ({ pass, message }: MatchResult): void => {
            if (_isNot) {
              if (!pass) return;
              throw new AssertionError(`should not ${message}`);
            } else {
              if (pass) return;
              throw new AssertionError(message || "Unknown error");
            }
          };

          if (_isPromise) {
            (actual as unknown as Promise<T>).then((value) =>
              assert(matcher(value, ...args))
            );
          } else {
            assert(matcher(actual, ...args));
          }
        };
      },
    });

    return self;
  };
}

function expect<T>(actual: T) {
  return defineExpect(jestMatcherMap)(actual);
}

export { defineExpect, expect };
export type { Expected, MatcherMap };
