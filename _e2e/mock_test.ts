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
  name: "localThis",
  fn: async ({ value }) => {
    expect(value).toEqual({});
    await fetch("https://example.com/");
    expect(value.url).toEqual("https://example.com/");
  },
  setup: () => {
    const value: Record<PropertyKey, unknown> = {};
    const reset = defineGlobalThis("fetch", (input) => {
      value.url = input;
      return Promise.resolve(new Response(""));
    });

    return {
      teardown: () => {
        reset();
      },
      localThis: {
        value,
      },
    };
  },
});
