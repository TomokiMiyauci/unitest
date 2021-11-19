// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
interface Mock {
  (...args: unknown[]): void;
  mock: { calls: unknown[][] };
}

export type { Mock };
