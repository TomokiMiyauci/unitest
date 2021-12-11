// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { roundTo, toBeCloseTo } from "./to_be_close_to.ts";

Deno.test("roundTo", () => {
  const table: [
    ...Parameters<typeof roundTo>,
    ReturnType<typeof roundTo>,
  ][] = [
    [0.1, 1, 0.1],
    [0.1, 2, 0.1],
    [0.1, 3, 0.1],
    [0.1, 4, 0.1],
    [0.1, 5, 0.1],
    [0.4, 1, 0.4],
    [0.4, 2, 0.4],
    [0.4, 3, 0.4],
    [0.4, 4, 0.4],
    [0.4, 5, 0.4],
    [0.5, 1, 0.5],
    [0.5, 2, 0.5],
    [0.5, 3, 0.5],
    [0.5, 4, 0.5],
    [0.5, 5, 0.5],
    [1.0, 1, 1.0],
    [1.0, 2, 1.0],
    [1.0, 3, 1.0],
    [1.0, 4, 1.0],
    [1.0, 5, 1.0],
    [1.5, 1, 1.5],
    [1.5, 2, 1.5],
    [1.5, 3, 1.5],
    [1.5, 4, 1.5],
    [1.01, 1, 1.0],
    [1.01, 2, 1.01],
    [1.01, 3, 1.01],
    [1.01, 4, 1.01],
    [1.01, 5, 1.01],
    [1.05, 1, 1.1],
    [1.05, 2, 1.05],
    [1.05, 3, 1.05],
    [1.05, 4, 1.05],
    [1.05, 5, 1.05],
    [1.001, 1, 1.0],
    [1.001, 2, 1.00],
    [1.001, 3, 1.001],
    [1.001, 4, 1.001],
    [1.001, 5, 1.001],
    [1.005, 1, 1.0],
    [1.005, 2, 1.01],
    [1.005, 3, 1.005],
    [1.005, 4, 1.005],
    [1.005, 5, 1.005],
    [1.0005, 1, 1.0],
    [1.0005, 2, 1.0],
    [1.0005, 3, 1.001],
    [1.0005, 4, 1.0005],
    [1.0005, 5, 1.0005],
    [1.00005, 1, 1.0],
    [1.00005, 2, 1.0],
    [1.00005, 3, 1.0],
    [1.00005, 4, 1.0001],
    [1.00005, 5, 1.00005],
    [1.000005, 1, 1.0],
    [1.000005, 2, 1.0],
    [1.000005, 3, 1.0],
    [1.000005, 4, 1.0],
    [1.000005, 5, 1.00001],
    [1.00123, 3, 1.001],
    [1.00123, 0, 1],
    [1.00123, -0, 1],
    [1.00123, -1, NaN],
    [0.101, 1, 0.1],
    [0.101, 0, 0],
  ];

  table.forEach(([value, digit, result]) =>
    assertEquals(roundTo(value, digit), result)
  );
});

Deno.test({
  name: "toBeCloseTo",
  fn: () => {
    assertSuccess(toBeCloseTo(0.1 + 0.2, 0.3));
    assertSuccess(toBeCloseTo(0.1 + 0.2, 0.3, 10));
    assertSuccess(toBeCloseTo(0.1, 0.101, 0));
    assertFail(toBeCloseTo(0.1, 0.101, 3));
    assertEquals(toBeCloseTo(0.1, 0.101, 3), {
      pass: false,
      actualHint: `Actual rounded 3 digit:`,
      actual: 0.1,
      expected: 0.101,
      expectedHint: `Expected rounded 3 digit:`,
    });
    assertEquals(toBeCloseTo(0.500001, 0.500003, 5), {
      pass: true,
      actualHint: `Actual rounded 5 digit:`,
      actual: 0.5,
      expected: 0.5,
      expectedHint: `Expected rounded 5 digit:`,
    });
  },
});
