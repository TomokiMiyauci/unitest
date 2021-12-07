<div align="center">
  <h1>Unitest</h1>

<img width="160px" hight="160px" src="./_docs/public/logo.svg" />

[![test](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml/badge.svg?branch=beta)](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml)
![release](https://img.shields.io/github/v/release/TomokiMiyauci/unitest?sort=semver)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/unitest)
[![deno version](https://img.shields.io/badge/deno-^1.14.0-lightgrey?logo=deno)](https://github.com/denoland/deno)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/unitest/mod.ts)

[![codecov](https://codecov.io/gh/TomokiMiyauci/unitest/branch/main/graph/badge.svg?token=nQZ8Nnx3KH)](https://codecov.io/gh/TomokiMiyauci/unitest)
![license](https://img.shields.io/github/license/TomokiMiyauci/unitest)

Deno-first **uni**versal **unit** testing framework

</div>

---

:construction: This is beta

## Features

- 🦕 Deno-first\
  It has been designed with Deno first, and actively uses the Deno Runtime API.

- 🌎 Universal\
  It is also compatible to work in browsers and Node.js environments. Use the
  compatible `compat` module instead of the Deno Runtime API.

- 🃏 Like jest but not jest\
  You can express declarative tests around the symbolic expect in jest. Also,
  all matchers are composable and customizable. jest and jest-extended matchers
  are provided as presets.

- ♻️ Compositable\
  Unitest is also intended to be used in a browser.\
  For this reason, we provide a composable interface to keep the bundle size as
  small as possible.

- 📄 TypeScript-first\
  Type-safe tests can be expressed. A type filter restricts the availability of
  only those matchers that satisfy the data type under test.\
  It also keeps the bundle size small by transferring part of the data type
  validation to TypeScript.

- 🐺 Isolated\
  Each module is independent, with no dependency on context. This means that
  they can be combined with any module.

## Getting Started

Visit <https://unitest.vercel.app/> to get started with Unitest.

## Quick view

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test({
  name: "should not equal",
  fn: () => {
    expect("Deno").not.toBe("Node");
  },
});
```

## Contributing

Please see our [CONTRIBUTING.md](./CONTRIBUTING.MD).

## License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license

## TODO

- [ ] Implement expecter and jest default matcher (rest)
  - toMatchObject
  - toMatchSnapshot
  - toMatchInlineSnapshot
  - toStrictEqual
  - toThrowErrorMatchingSnapshot
  - toThrowErrorMatchingInlineSnapshot
- [ ] Implement third party matcher (rest)
  - jest-extended
    - ~~toBeArrayOfSize~~ toHaveLength
    - toIncludeAllPartialMembers
    - toThrowWithMessage
    - toHaveBeenCalledBefore
    - toHaveBeenCalledAfter
    - toHaveBeenCalledOnce
    - ~~toBeNaN~~ exists in jest
    - ~~toContainKey~~ same as toHaveProperty
    - toContainAllKeys
    - toContainAllValues
    - toContainAllEntries
    - ~~toResolve~~ not pure
    - ~~toReject~~ not pure
    - ~~toBeHexadecimal~~ -> toBeHexColor
- [x] Implement interface of custom matcher
- [ ] Implement `test` suite
- [x] ~~Implement `describe` suite~~
