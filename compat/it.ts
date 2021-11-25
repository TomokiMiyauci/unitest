// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
// This module is browser compatible.
import { gray, green, red } from "../deps.ts";

const START = "START";
const END = "END";
const TEST = "TEST";

/** Compat for deno.test */
function it(name: string, fn: () => void | (() => Promise<void>)) {
  performance.mark(START);
  try {
    fn();
    performance.mark(END);
    const { duration } = performance.measure(TEST, START, END);

    console.log(`test ${name} ... ${green("ok")} ${gray(`(${duration}ms)`)}`);
  } catch (e) {
    performance.mark(END);
    const { duration } = performance.measure(TEST, START, END);

    console.log(`test ${name} ... ${red("FAILED")} ${gray(`(${duration}ms)`)}`);
    throw e;
  }
}

export { it };
