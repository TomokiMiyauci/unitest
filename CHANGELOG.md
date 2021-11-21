# [1.0.0-beta.18](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2021-11-21)


### Bug Fixes

* not use import map, switch to relative path ([e135caa](https://github.com/TomokiMiyauci/unitest/commit/e135caaf2f87d70e9c28c4255cacfa764c58a246)), closes [#5](https://github.com/TomokiMiyauci/unitest/issues/5)

# [1.0.0-beta.17](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2021-11-21)


### Bug Fixes

* **matcher:** use universal stringify function ([0a105fc](https://github.com/TomokiMiyauci/unitest/commit/0a105fc950fb8d7e5598510c38ccfd1259a04499))


### Features

* **it:** add `it` closure ([705094c](https://github.com/TomokiMiyauci/unitest/commit/705094cbced1c9950a37dbe38a881980325d77b5))

# [1.0.0-beta.16](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2021-11-21)


### Features

* **matcher:** add `toBeEmptyObject` matcher ([2a6870a](https://github.com/TomokiMiyauci/unitest/commit/2a6870adccd9d910fb0356ed7485c2b993f12ff2))
* **matcher:** add `toBeObject` matcher ([8c965b3](https://github.com/TomokiMiyauci/unitest/commit/8c965b3aebbbdee635881b5ccf3dcbc63783b122))

# [1.0.0-beta.15](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2021-11-20)


### Bug Fixes

* **matcher:** `toBeNegative` accept number only and fix logic ([a4e3df0](https://github.com/TomokiMiyauci/unitest/commit/a4e3df08f09be661a45768a558db8ec9afe19fb0))


### Features

* **matcher:** add `toBeEven` matcher ([a6d80d6](https://github.com/TomokiMiyauci/unitest/commit/a6d80d6e83a00e1bf793740d8a593731e653130d))
* **matcher:** add `toBeFinite` matcher ([7a94ee8](https://github.com/TomokiMiyauci/unitest/commit/7a94ee849076f118e48e798556a69393b96213d6))
* **matcher:** add `toBeInteger` matcher ([583d2d3](https://github.com/TomokiMiyauci/unitest/commit/583d2d34007cd36699f5fe6b1197ffe09863489b))
* **matcher:** add `toBeNegative` matcher ([14cdb32](https://github.com/TomokiMiyauci/unitest/commit/14cdb32e3df2d9cc0107f68091b0e2fb930fd805))
* **matcher:** add `toBeOdd` matcher ([1ff6b23](https://github.com/TomokiMiyauci/unitest/commit/1ff6b23376076ae8ce8d2b5dea021bf5a0f2f2b9))
* **matcher:** add `toBePositive` matcher ([ca3bec6](https://github.com/TomokiMiyauci/unitest/commit/ca3bec684170ac1da895d1fc108be0bd9b7698d1))
* **matcher:** add `toBeWithin` matcher ([46da609](https://github.com/TomokiMiyauci/unitest/commit/46da609118db999e485ca85ac935a740fda737be))

# [1.0.0-beta.14](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2021-11-20)


### Features

* **matcher:** add `toBeAfterOrEqualTo` matcher ([b8c90b5](https://github.com/TomokiMiyauci/unitest/commit/b8c90b52c8b2e0646763131140d42394b120e5f8))
* **matcher:** add `toBeBefore` matcher ([c7c8002](https://github.com/TomokiMiyauci/unitest/commit/c7c80027cba3d8c3ecb73bb26034512dead5c4cd))
* **matcher:** add `toBeBeforeOrEqualTo` matcher ([10b36a2](https://github.com/TomokiMiyauci/unitest/commit/10b36a23030d46f52203e88ddee83f1ee6e8df9e))
* **matcher:** add `toBeBetween` matcher ([e0c4949](https://github.com/TomokiMiyauci/unitest/commit/e0c49496398417ae0a2ef973ca1bff19e9f3c9bb))
* **matcher:** add `toBeOneOf` matcher ([94ee680](https://github.com/TomokiMiyauci/unitest/commit/94ee680d7ef57f3b9b7c002d065712a1a8315d33))

# [1.0.0-beta.13](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2021-11-20)


### Bug Fixes

* **expect:** wrap `expect` on function for tree-shaking ([ba51f65](https://github.com/TomokiMiyauci/unitest/commit/ba51f652be4acba7f67d5a26d41077543677f156))


### Features

* **matcher:** add `toBeAfter` matcher ([0f15283](https://github.com/TomokiMiyauci/unitest/commit/0f152832107844ed2f523221bc0e47dba94dddb8))
* **matcher:** add `toBeDate` matcher ([f321728](https://github.com/TomokiMiyauci/unitest/commit/f3217289bdc6a053aeda09b709fb64cca82005e5))
* **matcher:** add `toBeFunction` matcher ([481b7bd](https://github.com/TomokiMiyauci/unitest/commit/481b7bd45ad34d8c2528901f0afa6805b3982d19))
* **matcher:** add `toBeSymbol` matcher ([8530c41](https://github.com/TomokiMiyauci/unitest/commit/8530c41b26cce13c242118e9dfd035f59a97f04d))
* **matcher:** add `toBeValidDate` matcher ([ac6584f](https://github.com/TomokiMiyauci/unitest/commit/ac6584f1c69eb9d62b1f6d8244383cf4e1c48501))
* **matcher:** improve assertion error message ([40c8e13](https://github.com/TomokiMiyauci/unitest/commit/40c8e139491e75bee0035e78f63fd28843c4b7da)), closes [#3](https://github.com/TomokiMiyauci/unitest/issues/3)

# [1.0.0-beta.12](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2021-11-20)


### Features

* **matcher:** add `toBeArray` matcher ([9b52eb2](https://github.com/TomokiMiyauci/unitest/commit/9b52eb297fb758520430e167c3abd62f3b5e05d5))
* **matcher:** add `toBeBoolean` matcher ([85234d3](https://github.com/TomokiMiyauci/unitest/commit/85234d3ce0768a1b897c4a155c428908ad1baf8e))
* **matcher:** add `toBeFalse` matcher ([3c1f4ed](https://github.com/TomokiMiyauci/unitest/commit/3c1f4ed3a70813db6c6b6341eff162619aa42f4d))
* **matcher:** add `toBeNumber` matcher ([8eb85aa](https://github.com/TomokiMiyauci/unitest/commit/8eb85aa34c0dd1fc4b4de63d5c55bbabd04c517f))
* **matcher:** add `toBeString` matcher ([a401afa](https://github.com/TomokiMiyauci/unitest/commit/a401afa2adbce123d35eaab53a815a2271e0f3b8))
* **matcher:** add `toBeTrue` matcher ([4287ca3](https://github.com/TomokiMiyauci/unitest/commit/4287ca37639a406ce07284687e478f20e1304b33))

# [1.0.0-beta.11](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2021-11-19)


### Features

* **matcher:** add `toBeAnything` matcher ([38afded](https://github.com/TomokiMiyauci/unitest/commit/38afded166f01001fcae705d2abd527dbb4368d6))
* **matcher:** add `toBeNil` matcher ([2374c7e](https://github.com/TomokiMiyauci/unitest/commit/2374c7e62ead2abe13edf728de075fb20475d06b))

# [1.0.0-beta.10](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2021-11-19)


### Features

* **matcher:** add `toHaveLastReturnedWith` matcher ([56aeb08](https://github.com/TomokiMiyauci/unitest/commit/56aeb08ac7a7cd70388898f67376e834ff5bf336))
* **matcher:** add `toHaveNthReturnedWith` matcher ([13606e7](https://github.com/TomokiMiyauci/unitest/commit/13606e7c290ff98bccce2add081ba9609466db5e))
* **matcher:** add `toHaveReturned` matcher ([9c051ef](https://github.com/TomokiMiyauci/unitest/commit/9c051efbab87c482080a9df0aee61bfb2a7f22ff))
* **matcher:** add `toHaveReturnedTimes` matcher ([6281f93](https://github.com/TomokiMiyauci/unitest/commit/6281f930d47949e0485cb333b61f395f6cf2b2e1))
* **matcher:** add `toHaveReturnedWith` matcher ([bade2ae](https://github.com/TomokiMiyauci/unitest/commit/bade2aed23e58c156952eda36a3ea6630fb6bb6f))
* **mock:** save returned value to mock ([f86e15e](https://github.com/TomokiMiyauci/unitest/commit/f86e15e3d120d85cf44230c100da72772473d55c))

# [1.0.0-beta.9](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2021-11-19)


### Features

* **matcher:** add `toHaveBeenCalledTimes` matcher ([89232fb](https://github.com/TomokiMiyauci/unitest/commit/89232fb3bb8d07d3bd6ca4d5a7b7a0b804c758cd))
* **matcher:** add `toHaveBeenCalledWith` matcher ([c10b04d](https://github.com/TomokiMiyauci/unitest/commit/c10b04d0af5bf22100d3f888844410a1c27b3aaa))
* **matcher:** add `toHaveBeenLastCalledWith` matcher ([e6c8fcd](https://github.com/TomokiMiyauci/unitest/commit/e6c8fcd2f2dac4ca964825f8f355c5034dd44bd3))
* **matcher:** add `toHaveBeenNthCalledWith` matcher ([b1260fc](https://github.com/TomokiMiyauci/unitest/commit/b1260fc13c1b0791970ed453d3471a5f6ee74fe9))

# [1.0.0-beta.8](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2021-11-19)


### Features

* **matcher:** add `toBeCloseTo` matcher ([dc66577](https://github.com/TomokiMiyauci/unitest/commit/dc66577ef750b630bd8d346ef82976674f6f48b9))
* **matcher:** add `toHaveBeenCalled` matcher ([2668260](https://github.com/TomokiMiyauci/unitest/commit/2668260fe32ab58b35d25f1e5853c2f1bf60d06e))
* **mock:** add `fn` function what make mock ([9b315f1](https://github.com/TomokiMiyauci/unitest/commit/9b315f174b5de3aa6d77961351a7ea4471a17714))

# [1.0.0-beta.7](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2021-11-19)


### Features

* **expect:** add `.rejects` helper ([9f9424e](https://github.com/TomokiMiyauci/unitest/commit/9f9424ea7bc8e35e66eab86b94c2ffa7a1d62c8c))

# [1.0.0-beta.6](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2021-11-19)


### Features

* **expect:** add `.resolve` helper ([5d9027d](https://github.com/TomokiMiyauci/unitest/commit/5d9027d0e0814832c3e9e16b59f28536ec727918))

# [1.0.0-beta.5](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2021-11-19)


### Bug Fixes

* **matcher:** change `to_contain` matcher logic to includes ([b260b4b](https://github.com/TomokiMiyauci/unitest/commit/b260b4bac964564582aca19e64e1aca4da562938))


### Features

* **matcher:** add `toContain` matcher ([294c543](https://github.com/TomokiMiyauci/unitest/commit/294c543fced929ab5ac7614e12fb95d0b0db072e))
* **matcher:** add `toThrow` matcher ([a0f8432](https://github.com/TomokiMiyauci/unitest/commit/a0f8432fd5ffeee1c4002a9aaec19818bef55b06))

# [1.0.0-beta.4](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2021-11-18)


### Bug Fixes

* **matcher:** assign a specific type to actual ([142acc6](https://github.com/TomokiMiyauci/unitest/commit/142acc6e10b6f0fc14814ae48fd796d704fee5f6))


### Features

* **expect:** add filtering matcher by generic types ([86026d7](https://github.com/TomokiMiyauci/unitest/commit/86026d748ccd6b6d514c85f6005def270e3fda0c))
* **matcher:** add `toMatch` matcher ([7fd531c](https://github.com/TomokiMiyauci/unitest/commit/7fd531c82b82fc3cefabd7e199ce4f08a27ab315))

# [1.0.0-beta.3](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2021-11-18)


### Features

* **matcher:** add `toBeGreaterThan` matcher ([2fb4d3e](https://github.com/TomokiMiyauci/unitest/commit/2fb4d3e9564f1982c645b788b02a0dfae98bdb5a))
* **matcher:** add `toBeGreaterThanOrEqual` matcher ([8afdcc8](https://github.com/TomokiMiyauci/unitest/commit/8afdcc8f6a4ea011e1e234d3dd02a18fc70e826f))
* **matcher:** add `toBeLessThan` matcher ([5ce628b](https://github.com/TomokiMiyauci/unitest/commit/5ce628b24e20ab963b9c747aa08c38f4f88f2cb8))
* **matcher:** add `toBeLessThanOrEqual` matcher ([0636932](https://github.com/TomokiMiyauci/unitest/commit/0636932af9987d21ade80a94507b4b111643646f))

# [1.0.0-beta.2](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2021-11-18)


### Features

* **matcher:** add `toBeDefined` matcher ([52ac1b3](https://github.com/TomokiMiyauci/unitest/commit/52ac1b30c29ddf9d3f1f31bdac4b5e654ead54b5))
* **matcher:** add `toBeFalsy` matcher ([c946e40](https://github.com/TomokiMiyauci/unitest/commit/c946e40d5d3185dc81a1f0429a9fc63b936a4d59))
* **matcher:** add `toBeInstanceOf` matcher ([af9c8b6](https://github.com/TomokiMiyauci/unitest/commit/af9c8b629f58c0d73112dc0e8d3e12a53bd487d5))
* **matcher:** add `toBeNaN` matcher ([10da18a](https://github.com/TomokiMiyauci/unitest/commit/10da18a4312ce7c55d95adb79778c90433c8bc7e))
* **matcher:** add `toBeNull` matcher ([7fe9bdf](https://github.com/TomokiMiyauci/unitest/commit/7fe9bdf02492ab8802772c6ec28f98465e5abb3a))
* **matcher:** add `toBeTruthy` matcher ([06b7d55](https://github.com/TomokiMiyauci/unitest/commit/06b7d55b161e9dcaec7046db1f13e2e1f511f273))
* **matcher:** add `toBeUndefined` matcher ([d01e927](https://github.com/TomokiMiyauci/unitest/commit/d01e927181909cf5b945441b9ed4bcb95c056be8))
* **matcher:** add `toEqual` matcher ([da43373](https://github.com/TomokiMiyauci/unitest/commit/da4337366231e40ed2800dd0c0afa312193af50c))
* **matcher:** add `toHaveLength` matcher ([b56d6d6](https://github.com/TomokiMiyauci/unitest/commit/b56d6d6595238434b1898ed8426e6b6464093516))

# 1.0.0-beta.1 (2021-11-18)


### Features

* initial release ([adce059](https://github.com/TomokiMiyauci/unitest/commit/adce059ab69abdd38cf304b007e3b6f5e14be645))
