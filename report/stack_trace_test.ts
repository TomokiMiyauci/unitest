// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { parseStackTrace, parseStackTraceLine } from "./stack_trace.ts";

Deno.test({
  name: "parseStackTraceLine",
  fn: () => {
    const table: [
      ...Parameters<typeof parseStackTraceLine>,
      ReturnType<typeof parseStackTraceLine>,
    ][] = [
      [
        `    at main (file:///path/to/file.ts:23:11)`,
        {
          file: "file:///path/to/file.ts",
          methodName: "main",
          lineNumber: 23,
          column: 11,
        },
      ],
      [
        `    at assertEquals (https://deno.land/std@0.115.1/testing/asserts.ts:266:9)`,
        {
          file: "https://deno.land/std@0.115.1/testing/asserts.ts",
          methodName: "assertEquals",
          lineNumber: 266,
          column: 9,
        },
      ],

      [
        `    at assertEquals https://deno.land/std@0.115.1/testing/asserts.ts:266:9`,
        {
          file: "https://deno.land/std@0.115.1/testing/asserts.ts",
          methodName: "assertEquals",
          lineNumber: 266,
          column: 9,
        },
      ],

      [
        `    at Array.forEach (<anonymous>)`,
        null,
      ],
    ];

    table.forEach(([value, result]) => {
      assertEquals(parseStackTraceLine(value), result);
    });
  },
});

Deno.test({
  name: "trace",
  fn: () => {
    const table: [
      ...Parameters<typeof parseStackTrace>,
      ReturnType<typeof parseStackTrace>,
    ][] = [
      [
        `ReferenceError: FAIL is not defined
      at Constraint.execute (deltablue.js:525:2)
      at Constraint.execute anonymous
      at Constraint.recalculate (deltablue.js:424:21)`,
        [
          {
            file: "deltablue.js",
            methodName: "Constraint.execute",
            lineNumber: 525,
            column: 2,
          },
          {
            file: "deltablue.js",
            methodName: "Constraint.recalculate",
            lineNumber: 424,
            column: 21,
          },
        ],
      ],
    ];

    table.forEach(([value, result]) => {
      assertEquals(parseStackTrace(value), result);
    });
  },
});
