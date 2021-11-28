// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

interface Context {
  beforeEach?: (() => void)[];
  beforeAll?: (() => void)[];
  afterEach?: (() => void)[];
  afterAll?: (() => void)[];
}

function call(fn: () => void): void {
  fn();
}

/** Creates a block that groups together several related tests
 * @beta
 */

function defineDescribe() {
  const context: Context = {};
  const testQueue: (() => void)[] = [];

  function describe(_: string, fn: () => void) {
    try {
      // queued
      fn();

      context.beforeAll?.forEach(call);

      for (const test of testQueue) {
        context.beforeEach?.forEach(call);

        test();
        context.afterEach?.forEach(call);
      }

      context.afterEach?.forEach(call);
    } finally {
      testQueue.length = 0;
      Object.keys(context).forEach((key) => {
        context[key as keyof Context]!.length = 0;
      });
    }
  }

  function beforeEach(fn: () => void) {
    const before = context.beforeEach ?? [];

    context.beforeEach = [...before, fn];
  }

  function beforeAfter(fn: () => void) {
    const before = context.beforeAll ?? [];
    context.beforeAll = [...before, fn];
  }

  function afterEach(fn: () => void) {
    const after = context.afterEach ?? [];
    context.afterEach = [...after, fn];
  }

  function afterAll(fn: () => void) {
    const after = context.afterAll ?? [];
    context.afterAll = [...after, fn];
  }

  function it(name: string, fn: () => void) {
    testQueue.push(() => {
      Deno.test({
        name,
        fn,
      });
    });
  }

  return {
    describe,
    beforeEach,
    beforeAfter,
    it,
    afterEach,
    afterAll,
  };
}

const { describe, beforeEach, it, afterAll, afterEach, beforeAfter } =
  defineDescribe();

export { afterAll, afterEach, beforeAfter, beforeEach, describe, it };
