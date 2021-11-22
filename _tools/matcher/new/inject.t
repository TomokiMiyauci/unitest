---
inject: true
to: mod.ts
before: toBe
eof_last: false
---

export { <%= h.changeCase.camel(name) %> } from "./matcher/<%= h.changeCase.snake(name) %>.ts";
