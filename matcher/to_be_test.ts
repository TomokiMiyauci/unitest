import { predict } from "@matcher/to_be.ts";
import { assertEquals } from "@/dev_deps.ts";

Deno.test({
  name: "predict",
  fn: () => {
    const table = [
      ["", "", true],
      ["test", "test", true],
      [1, 1, true],
      [0, 0, true],
      [-0, -0, true],
      [true, true, true],
      [false, false, true],
      [undefined, undefined, true],
      [null, null, true],
      [1n, 1n, true],
      [0n, 0n, true],
      ["", " ", false],
      [{}, {}, false],
    ];
    table.forEach(([actual, expected, exp]) =>
      assertEquals(predict(actual, expected), exp)
    );
  },
});
