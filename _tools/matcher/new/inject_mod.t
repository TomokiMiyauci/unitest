---
inject: true
to: matcher/mod.ts
append: true
eof_last: false
---

export { <%= h.changeCase.camel(name) %> } from "./<%= h.changeCase.snake(name) %>.ts";
