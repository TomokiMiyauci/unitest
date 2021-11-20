// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { toHaveBeenCalledWith } from "@matcher/to_have_been_called_with.ts";
import { fn } from "@mock/mod.ts";
import { assertFail, assertSuccess } from "@/dev_deps.ts";

Deno.test({
  name: "toHaveBeenCalledWith",
  fn: () => {
    const mock = fn();
    mock(1);
    assertSuccess(toHaveBeenCalledWith(mock, 1));

    mock(3, 4);

    assertSuccess(toHaveBeenCalledWith(mock, 3, 4));

    mock([1, 2, 3]);
    assertSuccess(toHaveBeenCalledWith(mock, [1, 2, 3]));

    mock(4, 4, 4);
    assertSuccess(toHaveBeenCalledWith(mock, 4, 4, 4));

    assertFail(toHaveBeenCalledWith(mock, 4));
  },
});
