// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
/** Creates a test closure */
function it(name: string, fn: () => void | Promise<void>) {
  Deno.test({
    name,
    fn,
  });
}

export { it };
