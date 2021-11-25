// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { stringify, stringifyExpect } from "./format.ts";
import { assertEquals } from "../dev_deps.ts";
import type { StringifyExpectArgs } from "./format.ts";
Deno.test({
  name: "stringify",
  fn: () => {
    class Test {}
    function test() {}
    const table: [unknown, string][] = [
      ["", `""`],
      ["a", `"a"`],
      [1, `1`],
      [false, `false`],
      [true, `true`],
      [null, `null`],
      [undefined, `undefined`],
      [null, `null`],
      [Symbol.for("test"), `Symbol(test)`],
      [1n, `1n`],
      [{}, `{}`],
      [{ a: "" }, `{ a: "" }`],
      [{ a: {} }, `{ a: {} }`],
      [{ a: { b: { c: {} } } }, `{ a: { b: { c: {} } } }`],
      [[], `[]`],
      [[1], `[ 1 ]`],
      [[1, 2, 3], `[ 1, 2, 3 ]`],
      [() => {}, `[Function]`],
      [new Function(), `[Function]`],
      [(a: string) => a, `[Function]`],
      [Test, `[Function: Test]`],
      [test, `[Function: test]`],
      [new Set(), `Set {}`],
      [new Set([["a", "b"]]), `Set { [ "a", "b" ] }`],
      [new Set([["a", new Set()]]), `Set { [ "a", Set {} ] }`],
      [new Map(), `Map {}`],
      [new Map([["a", 1]]), `Map { "a" => 1 }`],
      [new Map([[1, 1]]), `Map { 1 => 1 }`],
      [new Map([[{}, 1]]), `Map { {} => 1 }`],
      [new Map([[() => {}, 1]]), `Map { [Function] => 1 }`],
      [Promise.resolve("test"), `Promise { "test" }`],
    ];

    table.forEach(([value, result]) => assertEquals(stringify(value), result));
  },
});

Deno.test({
  name: "stringifyExpect",
  fn: () => {
    const table: [StringifyExpectArgs, string][] = [
      [{
        actual: `"a"`,
        matcher: "toBe",
        matcherArgs: `"a"`,
        preModifier: "",
        postModifier: "",
      }, `expect("a").toBe("a")`],
      [{
        actual: `{}`,
        matcher: "toEqual",
        matcherArgs: `{ a: 1 }`,
        preModifier: "",
        postModifier: "not",
      }, `expect({}).not.toEqual({ a: 1 })`],
      [{
        actual: `Promise { 1 }`,
        matcher: "toBe",
        matcherArgs: `2`,
        preModifier: "resolves",
        postModifier: "not",
      }, `expect(Promise { 1 }).resolves.not.toBe(2)`],
    ];

    table.forEach(([value, result]) =>
      assertEquals(stringifyExpect(value), result)
    );
  },
});

Deno.test({
  name: "stringifyAssert",
  fn: () => {
    const table: [StringifyExpectArgs, string][] = [
      [{
        actual: `"a"`,
        matcher: "toBe",
        matcherArgs: `"a"`,
        preModifier: "",
        postModifier: "",
      }, `expect("a").toBe("a")`],
      [{
        actual: `{}`,
        matcher: "toEqual",
        matcherArgs: `{ a: 1 }`,
        preModifier: "",
        postModifier: "not",
      }, `expect({}).not.toEqual({ a: 1 })`],
      [{
        actual: `Promise { 1 }`,
        matcher: "toBe",
        matcherArgs: `2`,
        preModifier: "resolves",
        postModifier: "not",
      }, `expect(Promise { 1 }).resolves.not.toBe(2)`],
    ];

    table.forEach(([value, result]) =>
      assertEquals(stringifyExpect(value), result)
    );
  },
});
