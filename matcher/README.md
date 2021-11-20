# matcher

Unitest provide various matchers. It is fully configurable and can be customised
by selecting the matcher you want to use.

## preset

Unitest offers a range of presets for different matchers.

| module                                                           | preset                   |
| ---------------------------------------------------------------- | ------------------------ |
| [jest](https://jestjs.io/ja/docs/expect)                         | `jestMatcherMap`         |
| [jest-extended](https://github.com/jest-community/jest-extended) | `jestExtendedMatcherMap` |

```ts
import {
  defineExpect,
  jestExtendedMatcherMap,
  jestMatcherMap,
} from "https://deno.land/x/unitest@VERSION/mod.ts";

const { toBeString } = jestExtendedMatcherMap;

const expect = defineExpect({
  ...jestMatcherMap,

  toBeString,
  toBeFoo: (actual: unknown) => {
    if (actual === "foo") return { pass: true };

    return { pass: false };
  },
});
```
