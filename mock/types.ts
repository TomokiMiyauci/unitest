// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

type MockCall = { calls: unknown[][] };

interface Mock {
  (...args: unknown[]): void;
  mock: MockCall;
}

export type { Mock, MockCall };
