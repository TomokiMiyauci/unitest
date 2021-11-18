type AnyFn<P = any, R = unknown> = (...args: P[]) => R;

type ShiftRightParameters<T extends AnyFn, R> = IsArityX<T, 0 | 1> extends true
  ? () => R
  : (
    ...args: Parameters<T> extends [infer _, ...infer Rest] ? Rest : never
  ) => R;

type IsArityX<T extends AnyFn, X extends number> =
  Parameters<T>["length"] extends X ? true : false;

export type { AnyFn, IsArityX, ShiftRightParameters };
