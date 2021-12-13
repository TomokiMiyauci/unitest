<div align="center">
  <h1>Unitest</h1>

<img width="160px" hight="160px" src="./_docs/public/logo.svg" />

Deno-first **uni**versal **unit** testing framework

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/unitest)
[![nest.land](https://nest.land/badge.svg)](https://nest.land/package/unitest)

![release](https://img.shields.io/github/v/release/TomokiMiyauci/unitest?sort=semver&logo=github)
[![deno version](https://img.shields.io/badge/deno-^1.15.0-lightgrey?logo=deno)](https://github.com/denoland/deno)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/unitest/mod.ts)

[![test](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml/badge.svg?branch=beta)](https://github.com/TomokiMiyauci/unitest/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/TomokiMiyauci/unitest/branch/main/graph/badge.svg?token=nQZ8Nnx3KH)](https://codecov.io/gh/TomokiMiyauci/unitest)
[![DeepSource](https://deepsource.io/gh/TomokiMiyauci/unitest.svg/?label=active+issues&token=1Omp7qqFQESc-ArgLDUEIpUI)](https://deepsource.io/gh/TomokiMiyauci/unitest/)
[![DeepScan grade](https://deepscan.io/api/teams/10684/projects/19438/branches/504638/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10684&pid=19438&bid=504638)

![Semver](https://img.shields.io/badge/semver-2.0.0-black?logo=semVer)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?logo=git)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![license](https://img.shields.io/github/license/TomokiMiyauci/unitest?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABHddaYAAAC5UlEQVRIDd2WPWtVQRCGby5pVASLiGghQSxyG8Ui2KWwCfkH9olY2JneQkiR0oCIxH/gB+qVFDYBIWBAbAIRSbCRpLXwIxLiPT7vnNm9e87ZxJtUwYH3zO47Mzv7Mbv3tlo5KYriGtgAJ81OY1ENdG/YI4boFEOI911BXgY/pdtwGuAtXpvmB1tAXHDnUolE5urkPOQo6MqA3pXWmJJL4Bb4rQ7yEYfxsjnIF29NJIoNC6e5fxOL/qN+9KCz7AaLpN8zI415N2i2EptpGrkRIjGeAuvR6IY1hSFLFUOug9Ms2M7ZxIUNytm1mnME186sdI2BOCwAyQMg54ugzSmKmwbPwSbolKH+hbAtQdsOoF+BsF3anUVwBdiOWRidFZDKTTrKEAJTm3GVrGkHzw/uPZbyx7DNNLfB7KGmRsCcr+/gjaiPSpAOTyX9qG4L/XBDdWXDDf1M+wtQ5fwCOtcb4Dto6VpLmzByB6gqdHbTItGSJdAGqibJQhmRfCF7IN4beSF2G9CqnGXQrxofXU+EykllNeoczRgYytDKMubDIRK0g5MF8rE69cGu0u9nlUcqaUZ41W0qK2nGcSzr4D2wV9U9wxp1rnpxn8agXAOHMQ9cy9kbHM7ngY4gFb03TxrO/yfBUifTtXt78jCrjY/jgEFnMn45LuNWUtknuu7NSm7D3QEn3HbatV1Q2jvgIRf1sfODKQaeymxZoMLlTqsq1LF+HvaTqQOzEzUCfni0/eNIA+DfuE3KEtbsegckGmMktTXacnBHPVe687ugkpT+axCkkhBSyRSjWI2xf1KMMVmYiQdWksK9BEFiQoiYLIlvJA3/zeTzCejP0RbB6YPbhZuB+0pR3KcdX0LaJtju0ZgBL8Bd+sbz2QIaU2OfBX3BaQLsgZysQtrk0M8Sh1A0w3DyyYnGnAiZ4gqZ/TvI2A8OGd1YIbF7+F3P+B6dYpYdsJNZgrjO0UdOIhmom0nwL0pnfnzkL1803jAoKhvyAAAAAElFTkSuQmCC)

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

## Requirements

- deno 1.15+

## Getting Started

Visit <https://unitest.vercel.app/> to get started with Unitest.

## Quick view

[All available matchers](./matcher/README.md)

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test({
  name: "should not equal",
  fn: () => {
    expect("Deno").not.toBe("Node");
  },
});
```

then, `deno test`

**Currently the test runner CLI relies on the Deno CLI. This is subject to
change in the future.**

## Contributing

Please see our [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
