// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
type AnyFn<R = unknown> = (...args: any) => R;
type IsNever<T> = [T] extends [never] ? true : false;

type IsArityX<T extends AnyFn, X extends number> =
  Parameters<T>["length"] extends X ? true : false;

type Parameter<T extends AnyFn, X extends number> = Parameters<T> extends []
  ? never
  : Parameters<T>[X];

type FirstParameter<T extends AnyFn> = Parameter<T, 0>;

type PickByFirstParameter<T extends Record<string, AnyFn>, U> = {
  [k in keyof T as (U extends FirstParameter<T[k]> ? k : never)]: T[k];
};

type Resolve<T> = T extends Promise<infer X> ? X : T;

type IsPromise<T> = T extends Promise<unknown> ? true : false;

type ReturnTypePromisifyMap<T extends Record<PropertyKey, AnyFn>> = {
  [k in keyof T]: (...args: Parameters<T[k]>) => Promise<ReturnType<T[k]>>;
};

type Shift<T> = T extends [unknown, ...infer Rest] ? Rest : never;

type ShiftFnArg<T extends AnyFn> = IsNever<Shift<Parameters<T>>> extends true
  ? () => ReturnType<T>
  : (...args: Shift<Parameters<T>>) => ReturnType<T>;

type Writable<T> = {
  -readonly [k in keyof T]: T[k];
};

/** Alias for `Tuple` */
type IsTuple<T extends readonly unknown[]> = number extends T["length"] ? false
  : true;

type Primitive = string | number | bigint | symbol | boolean | null | undefined;

type PickOf<T, U> = {
  [k in keyof T as (T[k] extends U ? k : never)]: T[k];
};

type OverwriteOf<T, U> = {
  [k in keyof T]: U;
};

type Rename<T, From extends PropertyKey, To extends PropertyKey> = {
  [k in keyof T as (k extends From ? To : k)]: T[k];
};

export type {
  AnyFn,
  FirstParameter,
  IsArityX,
  IsPromise,
  IsTuple,
  OverwriteOf,
  PickByFirstParameter,
  PickOf,
  Primitive,
  Rename,
  Resolve,
  ReturnTypePromisifyMap,
  Shift,
  ShiftFnArg,
  Writable,
};
