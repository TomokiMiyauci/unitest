// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

type MockCall = {
  calls: unknown[][];
  results: MockResult[];
};

type MockResultType = "return";

type MockResult = {
  type: MockResultType;
  value: unknown;
};

interface Mock<T = unknown, Y extends unknown[] = any[]> extends Function {
  (...args: Y): T;
  mock: MockCall;
}

export type { Mock, MockCall, MockResult, MockResultType };
