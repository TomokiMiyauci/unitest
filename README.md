<div align="center">
  <h1>Unitest</h1>

<img width="140px" hight="140px" src="./docs/public/logo.svg" />

[![test](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml/badge.svg?branch=beta)](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/unitest)
[![deno version](https://img.shields.io/badge/deno-^1.14.0-lightgrey?logo=deno)](https://github.com/denoland/deno)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/unitest/mod.ts)
[![codecov](https://codecov.io/gh/TomokiMiyauci/unitest/branch/main/graph/badge.svg?token=nQZ8Nnx3KH)](https://codecov.io/gh/TomokiMiyauci/unitest)

Deno-first **uni**versal **unit** testing framework

</div>

---

:construction: This is beta

## Features

- Like jest but not jest\
  You can express declarative tests around the symbolic expect in jest. Also,
  all matchers are composable and customizable. jest and jest-extended matchers
  are provided as presets.

- Universal\
  It is designed for use with Deno first and foremost.\
  It is also compatible to work in browsers and Node.js environments.

- Compositable\
  Unitest is also intended to be used in a browser.\
  For this reason, we provide a composable interface to keep the bundle size as
  small as possible.

- TypeScript-first\
  Type-safe tests can be expressed. A type filter restricts the availability of
  only those matchers that satisfy the data type under test.\
  It also keeps the bundle size small by transferring part of the data type
  validation to TypeScript.

## Getting Started

Visit <https://unitest.vercel.app/> to get started with Unitest.

## Quick view

```ts
import { expect, it } from "https://deno.land/x/unitest@$VERSION/mod.ts";

it("should not equal", () => {
  expect("Deno").not.toBe("Node");
});
```

## Contributing

Please see our [CONTRIBUTING.md](./CONTRIBUTING.MD).

## License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license

## TODO

- [ ] Implement expecter and jest default matcher (rest)
  - toContainEqual
  - toMatchObject
  - toMatchSnapshot
  - toMatchInlineSnapshot
  - toStrictEqual
  - toThrowErrorMatchingSnapshot
  - toThrowErrorMatchingInlineSnapshot
- [ ] Implement third party matcher (rest)
  - jest-extended
    - toBeEmpty
    - ~~toBeArrayOfSize~~ toHaveLength
    - toIncludeAllMembers
    - toIncludeAllPartialMembers
    - toIncludeAnyMembers
    - toIncludeSameMembers
    - toThrowWithMessage
    - toHaveBeenCalledBefore
    - toHaveBeenCalledAfter
    - toHaveBeenCalledOnce
    - ~~toBeNaN~~ exists in jest
    - ~~toContainKey~~ same as toHaveProperty
    - toContainAllKeys
    - toContainAnyKeys
    - toContainValue
    - toContainValues
    - toContainAllValues
    - toContainAnyValues
    - toContainEntry
    - toContainEntries
    - toContainAllEntries
    - toContainAnyEntries
    - ~~toResolve~~ not pure
    - ~~toReject~~ not pure
    - toBeHexadecimal
    - toBeDateString
    - toEqualCaseInsensitive
    - toInclude
    - toIncludeRepeated
    - toIncludeMultiple
    - toEqualIgnoringWhitespace
- [x] Implement interface of custom matcher
- [ ] Implement `it` suite
- [ ] Implement `describe` suite
