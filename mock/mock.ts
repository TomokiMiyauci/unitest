// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Mock implementation spec */
interface MockSpec {
  /** A `array` args with invocation */
  calls: readonly unknown[][];

  /** A `array` return value with invocation */
  results: readonly MockResult[];

  /** A `array` call order numbers */
  callOrderNumbers: readonly number[];

  /** push values to store */
  add(
    value: { args: unknown[]; result: MockResult; orderNumber: number },
  ): void;

  /** reset all values */
  clear(): void;
}

type MockResultType = "return";

interface MockResult {
  type: MockResultType;
  value: unknown;
}

interface MockObject<T extends readonly unknown[] = any[]> {
  (...args: T): void;
  mock: Pick<MockSpec, "calls" | "results" | "callOrderNumbers">;
}

/** mock result store */
class Mock implements MockSpec {
  public calls: readonly unknown[][] = [];
  public results: readonly MockResult[] = [];
  public callOrderNumbers: readonly number[] = [];

  add(
    { args, result, orderNumber }: {
      args: unknown[];
      result: MockResult;
      orderNumber: number;
    },
  ): void {
    this.calls = [...this.calls, args];
    this.results = [...this.results, result];
    this.callOrderNumbers = [...this.callOrderNumbers, orderNumber];
  }

  clear(): void {
    this.calls = [];
    this.results = [];
    this.callOrderNumbers = [];
  }
}

export { Mock };
export type { MockObject, MockResult, MockResultType, MockSpec };
