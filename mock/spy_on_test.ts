// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { spyOn } from "./spy_on.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("spyOn watch callable property", () => {
  const video = {
    play() {
      return true;
    },
    stop() {
      return false;
    },
  };

  const spy = spyOn(video, "play");

  video.play();
  assertEquals(spy.mock.calls.length, 1);
  assertEquals(spy.mock.results, [{ type: "return", value: true }]);
  video.play();
  assertEquals(spy.mock.calls.length, 2);
  assertEquals(spy.mock.results, [{ type: "return", value: true }, {
    type: "return",
    value: true,
  }]);

  video.stop();
  assertEquals(spy.mock.calls.length, 2);
});

Deno.test("spyOn watch callable property with args", () => {
  const video = {
    play(times?: number) {
      return times ?? 0;
    },
    stop() {
      return false;
    },
  };

  const spy = spyOn(video, "play");

  video.play();
  assertEquals(spy.mock.calls.length, 1);
  assertEquals(spy.mock.results, [{ type: "return", value: 0 }]);
  video.play(3);
  assertEquals(spy.mock.calls.length, 2);
  assertEquals(spy.mock.results, [{ type: "return", value: 0 }, {
    type: "return",
    value: 3,
  }]);
});
