---
inject: true
to: matcher/preset.ts
at_line: 1
eof_last: false
---

import { <%= h.changeCase.camel(name) %> } from "@matcher/<%= h.changeCase.snake(name) %>.ts";