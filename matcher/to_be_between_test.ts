// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertFail, assertSuccess } from "@/dev_deps.ts";
import { toBeBetween } from "@matcher/to_be_between.ts";

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
  },
});
