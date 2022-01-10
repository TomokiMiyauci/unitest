// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertExists } from "../dev_deps.ts";
import { equality } from "../helper/equal.ts";
import { expect } from "../expect/expect.ts";
import { fn } from "../mock/fn.ts";
import { AnyObject, anyObject } from "./any_object.ts";

Deno.test({
  name: "AnyObject",
  fn: () => {
    const anyObject = new AnyObject();
    assertExists(anyObject.toString);
    assertExists(anyObject[equality]);

    assertEquals(anyObject.toString(), "any object");
    assertEquals(anyObject[equality](undefined), false);
    assertEquals(anyObject[equality](null), false);
    assertEquals(anyObject[equality]({}), true);
    assertEquals(anyObject[equality](new Object()), true);
    assertEquals(anyObject[equality]([]), true);
  },
});

Deno.test({
  name: "anyObject with condition",
  fn: () => {
    const anyObject = new AnyObject((value) => {
      return "test" in value;
    });

    assertEquals(anyObject[equality]("test"), false);
    assertEquals(anyObject[equality]({ test: "hello" }), true);
    assertEquals(anyObject[equality]({}), false);

    const mockFn = fn(() => true);

    const anyObj = new AnyObject(mockFn);
    anyObj[equality]({});
    expect(mockFn).toHaveBeenCalledWith({});
    expect(mockFn).toHaveReturnedWith(true);
  },
});

Deno.test({
  name: "anyObject",
  fn: () => {
    assertEquals(anyObject(), new AnyObject());
  },
});
