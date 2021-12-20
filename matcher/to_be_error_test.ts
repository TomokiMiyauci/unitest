// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.

import { assertEquals } from "../dev_deps.ts";
import { isError, toBeError } from "./to_be_error.ts";

Deno.test("isError", () => {
  const table: [...Parameters<typeof isError>, ReturnType<typeof isError>][] = [
    [
      {},
      false,
    ],
    [
      Error("test"),
      true,
    ],
    [
      TypeError("test"),
      true,
    ],
    [
      null,
      false,
    ],
    [
      undefined,
      false,
    ],
    [
      AggregateError([Error()]),
      true,
    ],
    [
      RangeError(),
      true,
    ],
    [ReferenceError(), true],
    [URIError(), true],
  ];

  table.forEach(([value, result]) => assertEquals(isError(value), result));
});

Deno.test("toBeError", () => {
  const table: [
    ...Parameters<typeof toBeError>,
    ReturnType<typeof toBeError>,
  ][] = [
    [null, undefined, undefined, {
      pass: false,
      expected: "Error object",
    }],
    [Error("test"), undefined, undefined, {
      pass: true,
      expected: "Error object",
    }],
    [Error("test"), Error, undefined, {
      actualHint: "Actual error name:",
      resultActual: "Error",
      pass: true,
      expected: "Error",
      expectedHint: "Expected error name:",
    }],
    [TypeError("test"), Error, undefined, {
      actualHint: "Actual error name:",
      resultActual: "TypeError",
      pass: false,
      expected: "Error",
      expectedHint: "Expected error name:",
    }],
    [TypeError("test"), TypeError, undefined, {
      actualHint: "Actual error name:",
      resultActual: "TypeError",
      pass: true,
      expected: "TypeError",
      expectedHint: "Expected error name:",
    }],
    [TypeError("test"), TypeError, "tes", {
      actualHint: "Actual error message:",
      resultActual: "test",
      pass: true,
      expected: "tes",
      expectedHint: "Expected to includes:",
    }],
    [Error("test"), Error, "test test", {
      actualHint: "Actual error message:",
      resultActual: "test",
      pass: false,
      expected: "test test",
      expectedHint: "Expected to includes:",
    }],
  ];

  table.forEach(([actual, ErrorClass, message, result]) =>
    assertEquals(toBeError(actual, ErrorClass, message), result)
  );
});
