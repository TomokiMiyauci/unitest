// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  incrementalNumber,
  isReturn,
  isTypeReturn,
  pickValue,
  Queue,
} from "./utils.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";

Deno.test("isReturn", () => {
  assertEquals(isReturn("return"), true);
});

Deno.test("isTypeReturn", () => {
  assertEquals(isTypeReturn({ type: "return", value: 0 }), true);
});

Deno.test("pickValue", () => {
  assertEquals(pickValue({ type: "return", value: 0 }), 0);
  assertEquals(pickValue({ type: "return", value: 1 }), 1);
});

Deno.test({
  name: "incrementalNumber",
  fn: () => {
    assertEquals(incrementalNumber(), 1);
    assertEquals(incrementalNumber(), 2);
    assertEquals(incrementalNumber(), 3);
  },
});

Deno.test("Queue", () => {
  const q = new Queue();

  assertExists(q.enqueue);
  assertExists(q.dequeue);
  assertExists(q.clear);

  assertEquals(q.enqueue(1), undefined);
  q.enqueue(2);
  q.enqueue(3);
  assertEquals(q.dequeue(), 1);
  assertEquals(q.dequeue(), 2);
  assertEquals(q.dequeue(), 3);
  assertEquals(q.dequeue(), undefined);
  assertEquals(q.clear(), undefined);
  assertEquals(q.dequeue(), undefined);
});
