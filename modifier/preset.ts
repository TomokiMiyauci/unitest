// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { not } from "./not.ts";
import { resolves } from "./resolves.ts";
import { rejects } from "./rejects.ts";
import { ModifierMap } from "./types.ts";

/** Jest default modifier map */
const jestModifierMap: ModifierMap = {
  pre: {
    resolves,
    rejects,
  },
  post: {
    not,
  },
};

export { jestModifierMap };
