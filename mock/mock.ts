// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Mock implementation spec */
interface MockSpec {
  /** A `array` args with invocation */
  calls: readonly unknown[][];

  /** A `array` return value with invocation */
  results: readonly MockResult[];

  /** A `array` invocation timestamp */
  invocationTimestamps: readonly number[];

  add(value: { args: unknown[]; result: MockResult; timestamp: number }): void;
  clear(): void;
}

type MockResultType = "return";

interface MockResult {
  type: MockResultType;
  value: unknown;
}

interface MockObject<T extends readonly unknown[] = any[]> {
  (...args: T): void;
  mock: Pick<MockSpec, "calls" | "results" | "invocationTimestamps">;
}

/** mock result store */
class Mock implements MockSpec {
  public calls: readonly unknown[][] = [];
  public results: readonly MockResult[] = [];
  public invocationTimestamps: readonly number[] = [];

  add(
    { args, result, timestamp }: {
      args: unknown[];
      result: MockResult;
      timestamp: number;
    },
  ): void {
    this.calls = [...this.calls, args];
    this.results = [...this.results, result];
    this.invocationTimestamps = [...this.invocationTimestamps, timestamp];
  }

  clear(): void {
    this.calls = [];
    this.results = [];
    this.invocationTimestamps = [];
  }
}

export { Mock };
export type { MockObject, MockResult, MockResultType, MockSpec };
