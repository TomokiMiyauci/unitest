---
inject: true
to: matcher/preset.ts
at_line: 2
eof_last: false
---

import { <%= h.changeCase.camel(name) %> } from "./<%= h.changeCase.snake(name) %>.ts";
