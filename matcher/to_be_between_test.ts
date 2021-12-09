// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertFail, assertSuccess } from "../dev_deps.ts";
import { toBeBetween } from "./to_be_between.ts";
import { stringify } from "../helper/format.ts";

Deno.test({
  name: "toBeBetween",
  fn: () => {
    assertSuccess(
      toBeBetween(
        new Date("2000/1/2"),
        new Date("2000/1/1"),
        new Date("2000/1/3"),
      ),
    );

    assertSuccess(
      toBeBetween(
        new Date("2000/1/1 00:00:01"),
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:02"),
      ),
    );

    assertSuccess(
      toBeBetween(
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:00"),
      ),
    );

    assertFail(
      toBeBetween(
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:01"),
        new Date("2000/1/1 00:00:01"),
      ),
    );

    assertFail(
      toBeBetween(
        new Date("2000/1/1 00:00:01"),
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:00"),
      ),
    );

    assertEquals(
      toBeBetween(
        new Date("2000/1/1 00:00:01"),
        new Date("2000/1/1 00:00:00"),
        new Date("2000/1/1 00:00:00"),
      ),
      {
        pass: false,
        expected: `${stringify(new Date("2000/1/1 00:00:00"))} <= Actual <= ${
          stringify(new Date("2000/1/1 00:00:00"))
        }`,
      },
    );
  },
});
