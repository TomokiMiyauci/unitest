// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { bgYellow, black, bold } from "../deps.ts";
import type { PostModifier } from "./types.ts";

const debug: PostModifier = {
  type: "post",
  fn: (context) => {
    console.debug(`\n${bgYellow(black(bold(" DEBUG ")))}\n`, context);
    return {};
  },
};

export { debug };
