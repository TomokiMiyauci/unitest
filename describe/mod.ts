// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
/** Creates a block that groups together several related tests
 * @beta
 */
function describe(_: string, fn: () => void): void {
  try {
    fn();
  } finally {
    //
  }
}

export { describe };
