// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { expect, spyOn, test } from "../mod.ts";

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
