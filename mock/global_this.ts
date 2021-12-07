// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
/** define custom globalThis property and return reset it */
function defineGlobalThis<T extends keyof typeof globalThis>(
  key: T,
  fn: typeof globalThis[T],
): () => void {
  const original = globalThis[key];
  globalThis[key] = fn;

  const reset = (): void => {
    globalThis[key] = original;
  };

  return reset;
}

export { defineGlobalThis };
