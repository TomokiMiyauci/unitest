// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { equal } from "../deps.ts";

function takeLast<T extends readonly unknown[] | string>(
  howMany: number,
  val: T,
): T {
  return (howMany <= 0 ? val.slice(0, -howMany) : val.slice(-howMany)) as T;
}

function contains(array: unknown[], value: unknown): boolean {
  return array.some((v) => equal(v, value));
}

export { contains, takeLast };
