// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { assertEquals, assertNotEquals } from "../dev_deps.ts";
import { defineGlobalThis } from "./global_this.ts";

Deno.test("defineGlobalThis", async () => {
  const req = new Response("test");
  const fn = () => Promise.resolve(req);
  const originFetch = globalThis.fetch;
  const reset = defineGlobalThis("fetch", fn);

  assertEquals(fn, globalThis.fetch);
  assertEquals(await fetch(""), req);
  assertNotEquals(await fetch(""), new Response("dummy"));

  reset();
  assertEquals(originFetch, fetch);
  assertNotEquals(fetch, fn);
});
