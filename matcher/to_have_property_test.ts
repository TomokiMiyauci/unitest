// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import {
  assertEquals,
  assertExpected,
  assertFail,
  assertSuccess,
} from "../dev_deps.ts";
import { predict, toHaveProperty } from "./to_have_property.ts";
import type { PredictResult } from "./to_have_property.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const symbol = Symbol.for("test");
    const table: [object, PropertyKey | PropertyKey[], PredictResult][] = [[
      {},
      [],
      { result: false, path: [] },
    ], [
      { a: undefined },
      ["a"],
      { result: true, path: ["a"] },
    ], [
      { a: undefined },
      ["a"],
      { result: true, path: ["a"] },
    ], [
      { a: 1 },
      ["a"],
      { result: true, path: ["a"] },
    ], [
      { a: { b: undefined } },
      ["a", "b"],
      { result: true, path: ["a", "b"] },
    ], [
      { a: { b: undefined } },
      ["a", "b", "c"],
      { result: false, path: ["a", "b", "c"] },
    ], [
      { a: { b: [] } },
      ["a", "b"],
      { result: true, path: ["a", "b"] },
    ], [
      { 1: 1 },
      [1],
      { result: true, path: [1] },
    ], [
      { [symbol]: 1 },
      [symbol],
      { result: true, path: [symbol] },
    ], [
      { a: 1 },
      "a",
      { result: true, path: ["a"] },
    ], [
      { a: 1 },
      "b",
      { result: false, path: ["b"] },
    ], [
      { 1: 2 },
      1,
      { result: true, path: [1] },
    ], [
      { 1: 2 },
      "1",
      { result: true, path: ["1"] },
    ], [
      { "1": 2 },
      1,
      { result: true, path: [1] },
    ], [
      { [symbol]: 2 },
      symbol,
      { result: true, path: [symbol] },
    ], [
      { a: { b: { c: {} } } },
      "a.b.c",
      { result: true, path: ["a", "b", "c"] },
    ]];

    table.forEach(([actual, expected, result]) =>
      assertEquals(predict(actual, expected), result)
    );
  },
});

Deno.test({
  name: "toHaveProperty",
  fn: () => {
    assertSuccess(toHaveProperty({ a: 1 }, ["a"]));
    assertSuccess(
      toHaveProperty({ a: { b: { c: undefined } } }, ["a", "b", "c"]),
    );
    assertSuccess(toHaveProperty({ a: 1 }, "a"));
    assertSuccess(toHaveProperty({ a: { b: { c: {} } } }, "a.b.c"));
    assertSuccess(toHaveProperty({ "a.b.c": { b: undefined } }, ["a.b.c"]));
    assertFail(toHaveProperty({}, []));
    assertFail(toHaveProperty({ a: { b: undefined } }, "a.b.c"));

    assertExpected({
      matcher: toHaveProperty,
      expected: "a -> b -> c",
    }, {
      actual: { a: { b: { c: {} } } },
      expectedArgs: ["a.b.c"],
    });
  },
});
