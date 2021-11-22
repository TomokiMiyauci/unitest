// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
type AnyFn<R = unknown> = (...args: any) => R;

type ShiftRightParameters<T extends AnyFn, R> = IsArityX<T, 0 | 1> extends true
  ? () => R
  : (
    ...args: Parameters<T> extends [infer _, ...infer Rest] ? Rest : never
  ) => R;

type IsArityX<T extends AnyFn, X extends number> =
  Parameters<T>["length"] extends X ? true : false;

type Parameter<T extends AnyFn, X extends number> = Parameters<T> extends []
  ? never
  : Parameters<T>[X];

type FirstParameter<T extends AnyFn> = Parameter<T, 0>;

type PropertyFilter<T extends Record<string, AnyFn>, U> = {
  [k in keyof T]: U extends FirstParameter<T[k]> ? T[k] : never;
};

type OmitBy<T, U = never> = {
  [k in keyof T as T[k] extends U ? never : k]: T[k];
};

export type { AnyFn, IsArityX, OmitBy, PropertyFilter, ShiftRightParameters };
