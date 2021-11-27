// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
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

type Promisify<T extends AnyFn, Do extends boolean> = ((
  ...args: Parameters<T>
) => Do extends true ? Promise<ReturnType<T>> : ReturnType<T>);

type PromisifyMap<T extends Record<PropertyKey, AnyFn>, Do extends boolean> = {
  [k in keyof T]: Promisify<T[k], Do extends true ? true : false>;
};

type Writable<T> = {
  -readonly [k in keyof T]: T[k];
};

export type {
  AnyFn,
  IsArityX,
  OmitBy,
  PromisifyMap,
  PropertyFilter,
  ShiftRightParameters,
  Writable,
};
