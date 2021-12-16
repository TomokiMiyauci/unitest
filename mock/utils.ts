// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.

import { MockResult, MockResultType } from "./mock.ts";

/** type guard for return type is `return` */
function isReturn(value: MockResultType): value is "return" {
  return value === "return";
}

/** type guard for mock result return type is `return` */
function isTypeReturn(
  mockResult: MockResult,
): mockResult is { type: "return"; value: unknown } {
  return isReturn(mockResult.type);
}

/** pick `value` field only */
function pickValue({ value }: MockResult): unknown {
  return value;
}

let number = 0;

/** Generate incremental unique number.
 * This scope is each execution files.
 */
function incrementalNumber(): number {
  number++;

  return number;
}

/** queue spec */
interface QueueSpec<T> {
  /** add queue */
  enqueue(value: T): void;

  /** take queue */
  dequeue(): T | undefined;
}

/** tiny FIFO queue */
class Queue<T> implements QueueSpec<T> {
  #value: T[] = [];
  constructor(value?: T[]) {
    if (value) {
      this.#value = value;
    }
  }

  /** add queue to last */
  enqueue(value: T): void {
    this.#value.push(value);
  }

  /** take first queue */
  dequeue(): T | undefined {
    return this.#value.shift();
  }

  /** delete all queue */
  clear(): void {
    this.#value = [];
  }
}

export { incrementalNumber, isReturn, isTypeReturn, pickValue, Queue };
