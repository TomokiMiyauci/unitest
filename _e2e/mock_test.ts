// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect, spyOn, test } from "../mod.ts";
import { defineGlobalThis } from "../mock/global_this.ts";

const video = {
  play() {
    return true;
  },
};

test("plays video", () => {
  const spy = spyOn(video, "play");
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});

test({
  name: "hoge",
  fn: ({ a }) => {
    a;
  },
  setup: () => {
    const reset = defineGlobalThis("fetch", () => {
      return Promise.resolve(new Response(""));
    });

    return {
      teardown: () => {
        reset();
      },
      localThis: {
        a: "",
      },
    };
  },
});
