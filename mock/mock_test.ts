// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { Mock } from "./mock.ts";

Deno.test("Mock", () => {
  const mock = new Mock();
  assertEquals(mock.calls, []);
  assertEquals(mock.results, []);

  mock.add({ args: [], result: { type: "return", value: undefined } });
  assertEquals(mock.calls, [[]]);
  assertEquals(mock.results, [{ type: "return", value: undefined }]);

  mock.add({ args: [1], result: { type: "return", value: 1 } });
  assertEquals(mock.calls, [[], [1]]);
  assertEquals(mock.results, [{ type: "return", value: undefined }, {
    type: "return",
    value: 1,
  }]);
  mock.clear();
  assertEquals(mock.calls, []);
  assertEquals(mock.results, []);
});
