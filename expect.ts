// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { AssertionError } from "@/deps.ts";
import { stringify } from "@matcher/utils.ts";
import type { Matcher, MatchResult } from "@matcher/types.ts";
import type {
  AnyFn,
  OmitBy,
  PropertyFilter,
  ShiftRightParameters,
} from "@/_types.ts";

type MatcherMap = Record<
  string | symbol,
  Matcher
>;

type Expected<
  T extends MatcherMap,
  V extends string = "not",
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
    let isNot = false;

    const self: any = new Proxy({}, {
      get: (_, name) => {
        if (name === "not") {
          isNot = true;
          return self;
        }

        const matcher = matcherMap[name];
        if (!matcher) {
          throw new TypeError(`matcher not found: ${stringify(name)}`);
        }

        return (...args: any[]) => {
          const { pass, message } = matcher(actual, ...args);

          if (isNot) {
            if (!pass) return;
            throw new AssertionError(`should not ${message}`);
          } else {
            if (pass) return;
            throw new AssertionError(message || "Unknown error");
          }
        };
      },
    });

    return self;
  };
}

export { defineExpect };
export type { Expected, MatcherMap };
