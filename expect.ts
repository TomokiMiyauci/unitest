import { AssertionError } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import type { Matcher, MatchResult } from "./matcher/types.ts";
import type { AnyFn, ShiftRightParameters } from "./_types.ts";

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
  return (value: any): Expected<M> => {
    let isNot = false;

    const self: any = new Proxy({}, {
      get: (_, name) => {
        if (name === "not") {
          isNot = true;
          return self;
        }

        const matcher = matcherMap[name];
        if (!matcher) {
          throw new TypeError(`matcher not found: ${String(name)}`);
        }

        return (...args: any[]) => {
          const { pass, message } = matcher(value, ...args);

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
