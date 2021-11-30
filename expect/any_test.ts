// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import {
  Any,
  any,
  equalAnyOf,
  isAnyBigInt,
  isAnyBoolean,
  isAnyFunction,
  isAnyNumber,
  isAnyString,
  isAnySymbol,
  isBigInt,
} from "./any.ts";
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";

Deno.test("isAnyString", () => {
  const table: [
    ...Parameters<typeof isAnyString>,
    ReturnType<typeof isAnyString>,
  ][] = [
    ["", true],
    ["test", true],
    [new String("hello"), true],
    [String, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyString(value), result));
});

Deno.test("isAnyBoolean", () => {
  const table: [
    ...Parameters<typeof isAnyBoolean>,
    ReturnType<typeof isAnyBoolean>,
  ][] = [
    [false, true],
    [true, true],
    [new Boolean(false), true],
    [new Boolean(true), true],
    [Boolean, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyBoolean(value), result));
});

Deno.test("isAnySymbol", () => {
  const table: [
    ...Parameters<typeof isAnySymbol>,
    ReturnType<typeof isAnySymbol>,
  ][] = [
    [Symbol.for(""), true],
    [Symbol("test"), true],
    [Symbol, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnySymbol(value), result));
});

Deno.test("isAnyBigInt", () => {
  const table: [
    ...Parameters<typeof isAnyBigInt>,
    ReturnType<typeof isAnyBigInt>,
  ][] = [
    [1n, true],
    [BigInt(0n), true],
    [BigInt, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyBigInt(value), result));
});

Deno.test("isAnyBigInt", () => {
  const table: [
    ...Parameters<typeof isAnyBigInt>,
    ReturnType<typeof isAnyBigInt>,
  ][] = [
    [1n, true],
    [BigInt(0n), true],
    [BigInt, false],
    [1, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyBigInt(value), result));
});

Deno.test("isAnyNumber", () => {
  const table: [
    ...Parameters<typeof isAnyNumber>,
    ReturnType<typeof isAnyNumber>,
  ][] = [
    [1, true],
    [0, true],
    [new Number(100), true],
    [Number, false],
    [1n, false],
  ];

  table.forEach(([value, result]) => assertEquals(isAnyNumber(value), result));
});

Deno.test("isAnyFunction", () => {
  const table: [
    ...Parameters<typeof isAnyFunction>,
    ReturnType<typeof isAnyFunction>,
  ][] = [
    [new Function(), true],
    [() => {}, true],
    [class A {}, true],
    [Function, true],
    [String, true],
    [Number, true],
    [{}, false],
  ];

  table.forEach(([value, result]) =>
    assertEquals(isAnyFunction(value), result)
  );
});

Deno.test("isBitInt", () => {
  const table: [
    ...Parameters<typeof isBigInt>,
    ReturnType<typeof isBigInt>,
  ][] = [
    [1n, true],
    [0n, true],
    [0, false],
    [1, false],
    ["", false],
    [{}, false],
    [null, false],
  ];

  table.forEach(([value, result]) => assertEquals(isBigInt(value), result));
});

Deno.test("equalAnyOf", () => {
  const table: [
    ...Parameters<typeof equalAnyOf>,
    ReturnType<typeof equalAnyOf>,
  ][] = [
    ["", String, true],
    ["", Number, false],
    [0, Number, true],
    [0, BigInt, false],
    [0n, BigInt, true],
    [false, Boolean, true],
    [true, Boolean, true],
    [Symbol.for("test"), Symbol, true],
    [() => {}, Function, true],
    [{}, Object, true],
    [[], Object, true],
    [new Date(), Object, true],
    [null, String, false],
    [undefined, String, false],
  ];

  table.forEach(([a, b, result]) => assertEquals(equalAnyOf(a, b), result));
});

Deno.test("Any", () => {
  const any = new Any(String);
  assertExists(any["toString"]);
  assertExists(any["object"]);
  assertExists(any[equality]);
  assertEquals(any.toString(), "Any");
  assertEquals(any[equality](""), true);
});

Deno.test("any", () => {
  assertEquals(any(String), new Any(String));
});
