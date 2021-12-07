// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

interface MockSpec {
  calls: readonly unknown[][];
  results: readonly MockResult[];
  add(value: { args: unknown[]; result: MockResult }): void;
  clear(): void;
}

type MockResultType = "return";

interface MockResult {
  type: MockResultType;
  value: unknown;
}

interface MockObject<T extends readonly unknown[] = any[]> {
  (...args: T): void;
  mock: Pick<MockSpec, "calls" | "results">;
}

/** mock result store */
class Mock implements MockSpec {
  public calls: readonly unknown[][] = [];
  public results: readonly MockResult[] = [];

  add({ args, result }: { args: unknown[]; result: MockResult }): void {
    this.calls = [...this.calls, args];
    this.results = [...this.results, result];
  }

  clear(): void {
    this.calls = [];
    this.results = [];
  }
}

export { Mock };
export type { MockObject, MockResult, MockResultType, MockSpec };
