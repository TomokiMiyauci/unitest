# [1.0.0-beta.56](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.55...v1.0.0-beta.56) (2021-12-11)


### Bug Fixes

* **matcher:** improve assertion message for `toBeCloseTo` ([53ff2b6](https://github.com/TomokiMiyauci/unitest/commit/53ff2b602239233c37128c78fc3bf6f9efdc6bcd)), closes [#46](https://github.com/TomokiMiyauci/unitest/issues/46)
* **matcher:** improve assertion message for `toHaveReturned` ([0f38afc](https://github.com/TomokiMiyauci/unitest/commit/0f38afcb74052be1bb589d0bf59319d0a7efc1f5)), closes [#46](https://github.com/TomokiMiyauci/unitest/issues/46)
* **matcher:** improve assertion message for `toHaveReturnedTimes` ([dde2ce4](https://github.com/TomokiMiyauci/unitest/commit/dde2ce4e7bd4a1bddac4186c29ce79f6e2d8f3d9)), closes [#46](https://github.com/TomokiMiyauci/unitest/issues/46)
* **matcher:** improve assertion message for `toHaveReturnedWith` ([0c5b347](https://github.com/TomokiMiyauci/unitest/commit/0c5b3475513a0bd173c96bd08a4156e2d13ef20b)), closes [#46](https://github.com/TomokiMiyauci/unitest/issues/46)

# [1.0.0-beta.55](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.54...v1.0.0-beta.55) (2021-12-10)


### Bug Fixes

* **matcher:** improve `toHaveProperty` matcher assertion message ([999e4a3](https://github.com/TomokiMiyauci/unitest/commit/999e4a306b49d20db720e9969995c53b582da1b2))


### Features

* **matcher:** accept value 3rd argument `toHaveProperty` ([6893e2d](https://github.com/TomokiMiyauci/unitest/commit/6893e2de4b5e0638dd96c26828e6f162c88bb7c2))

# [1.0.0-beta.54](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.53...v1.0.0-beta.54) (2021-12-09)


### Bug Fixes

* **expect:** fix display value of actual ([bbb4e8a](https://github.com/TomokiMiyauci/unitest/commit/bbb4e8a513dfb7e4cc4365985cd1bf12b2b22926))


### Features

* **expect:** improve matcher filter for resolves and rejects modifier ([44626bd](https://github.com/TomokiMiyauci/unitest/commit/44626bd2f1bc4593825a8aadd6e4610b70852e5c))

# [1.0.0-beta.53](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.52...v1.0.0-beta.53) (2021-12-09)


### Bug Fixes

* **mock:** export `defineGlobalThis` globally ([b0933c5](https://github.com/TomokiMiyauci/unitest/commit/b0933c5fc2847a01c8a42ffaace9f49908c5a7f1))
* **test:** change localThis types ([e9d9dbf](https://github.com/TomokiMiyauci/unitest/commit/e9d9dbf8168a89ea8d80948e4eec0bfb07b3d625))

# [1.0.0-beta.52](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.51...v1.0.0-beta.52) (2021-12-07)


### Features

* **test:** change interface of jest style test what accept 3rd args of options ([ca97069](https://github.com/TomokiMiyauci/unitest/commit/ca97069ecc65bf79d51602c0fa2c4938a76782cd))

# [1.0.0-beta.51](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.50...v1.0.0-beta.51) (2021-12-07)


### Bug Fixes

* **mock:** define mock object interface and change deps types ([a5844f3](https://github.com/TomokiMiyauci/unitest/commit/a5844f35942b539ad7e59e6f18c99ee25efa2047))


### Features

* **mock:** add `spyOn` function ([6f5b675](https://github.com/TomokiMiyauci/unitest/commit/6f5b675813db4a15009b291585c6b49798264198))

# [1.0.0-beta.50](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.49...v1.0.0-beta.50) (2021-12-06)


### Features

* **dummy:** rename fake to dummy object ([1c6d65c](https://github.com/TomokiMiyauci/unitest/commit/1c6d65c259b2e50db8659c56fd77cef683fda203))

# [1.0.0-beta.49](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.48...v1.0.0-beta.49) (2021-12-06)


### Bug Fixes

* **test:** fix pass args of sprintf ([5f81f78](https://github.com/TomokiMiyauci/unitest/commit/5f81f78c426bc3236777585c7fcf5c57a74f8ba8))

# [1.0.0-beta.48](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.47...v1.0.0-beta.48) (2021-12-04)


### Features

* **fake:** add `anyArray` fake object ([5cc49ef](https://github.com/TomokiMiyauci/unitest/commit/5cc49ef54b863805e47fe9338f0e848685a12d12))

# [1.0.0-beta.47](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.46...v1.0.0-beta.47) (2021-12-03)


### Bug Fixes

* **helper:** to be objective equivalence of fake object ([7f4b91c](https://github.com/TomokiMiyauci/unitest/commit/7f4b91cbaa37929939875cb08c961fda3e8e547b))
* not export utility at mod ([e7b339c](https://github.com/TomokiMiyauci/unitest/commit/e7b339c900d981698057b38d2bde6fdb8f1e1575))


### Features

* **fake:** add `anyBoolean` fake object ([009a40c](https://github.com/TomokiMiyauci/unitest/commit/009a40c22b10e6485e6a0d4e7b1b0ec3918077c7))
* **fake:** add `anyOf` fake object ([efd2221](https://github.com/TomokiMiyauci/unitest/commit/efd2221fbc38cd8d923c294102c198c7e06790f9))

# [1.0.0-beta.46](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.45...v1.0.0-beta.46) (2021-12-03)


### Features

* **helper:** add original equal funciton what predicate original mock ([41a98ba](https://github.com/TomokiMiyauci/unitest/commit/41a98baf5f2f7ff8a9f3512a3b146844f6f22d52))

# [1.0.0-beta.45](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.44...v1.0.0-beta.45) (2021-12-02)


### Features

* **expect:** add `stringContaining` function ([d7d5849](https://github.com/TomokiMiyauci/unitest/commit/d7d5849cb2d1be55d885a47b6f1c2bdad7b4bb16))
* **expect:** add `stringMatching` function ([c38aac1](https://github.com/TomokiMiyauci/unitest/commit/c38aac1420b2675fe7bdf0e9bb8ee2ff4e1a4b7f))

# [1.0.0-beta.44](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.43...v1.0.0-beta.44) (2021-12-01)


### Features

* **expect:** add `anyNumber` function ([eab1e1f](https://github.com/TomokiMiyauci/unitest/commit/eab1e1f084047edaed22e42baac5c984583f42ba))
* **expect:** add `anyString` function ([546ab60](https://github.com/TomokiMiyauci/unitest/commit/546ab60cf0c000310abbedf759a225d8a66d1bbc))
* **expect:** add `objectContaining` function ([d2e6524](https://github.com/TomokiMiyauci/unitest/commit/d2e652462715b7b248df9c1e16edc4154273a2e8))

# [1.0.0-beta.43](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.42...v1.0.0-beta.43) (2021-12-01)


### Features

* **expect:** add `any` function ([da9bcae](https://github.com/TomokiMiyauci/unitest/commit/da9bcae865487a400ca986b82ab0632437612c7d))
* **expect:** add `arrayContaining` function ([5de93b8](https://github.com/TomokiMiyauci/unitest/commit/5de93b866773f19829177cc5f5c111de2d35f67f))

# [1.0.0-beta.42](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.41...v1.0.0-beta.42) (2021-11-30)


### Features

* **expect:** add `anything` function ([d9b495b](https://github.com/TomokiMiyauci/unitest/commit/d9b495ba74658259487701d9c6c7245f67c5b541))
* **matcher:** use custom equal function ([7a282c9](https://github.com/TomokiMiyauci/unitest/commit/7a282c9146cbd09ecfa6c1a3f60394ec5e6c0925))
* **report:** add line number reporter for assertion ([eb9f47b](https://github.com/TomokiMiyauci/unitest/commit/eb9f47b032180abc80b7c6bb3706e505d3ddfc0e))

# [1.0.0-beta.41](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.40...v1.0.0-beta.41) (2021-11-29)


### Bug Fixes

* **test:** handle async test ([04e9e59](https://github.com/TomokiMiyauci/unitest/commit/04e9e598f192dd61afc6d567475fb09832427668))

# [1.0.0-beta.40](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.39...v1.0.0-beta.40) (2021-11-29)


### Bug Fixes

* **describe:** do not export describe module ([f2ce485](https://github.com/TomokiMiyauci/unitest/commit/f2ce4853ed342ee7af4eedfad4732089c507242b))

# [1.0.0-beta.39](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.38...v1.0.0-beta.39) (2021-11-29)


### Features

* **test:** accept jest style interface ([e185b5f](https://github.com/TomokiMiyauci/unitest/commit/e185b5ff00c1ad9e10d40fd323fd0b05c93d6acc))

# [1.0.0-beta.38](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.37...v1.0.0-beta.38) (2021-11-29)


### Features

* **test:** add `test` function instead of `it` ([81b3d55](https://github.com/TomokiMiyauci/unitest/commit/81b3d55d1345b2be1a67558cc3d2d7fd274cc45a))
* **test:** add `test` function what register test case ([05fa94e](https://github.com/TomokiMiyauci/unitest/commit/05fa94e1278634a1aafd2ee45c2527952b134b96))

# [1.0.0-beta.37](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.36...v1.0.0-beta.37) (2021-11-28)


### Features

* **describe:** add `describe` runner ([e9f6a45](https://github.com/TomokiMiyauci/unitest/commit/e9f6a4539b1d9ffea5e639ee4a99e4d36211b03d))
* **describe:** add hooks for before and after test ([392c152](https://github.com/TomokiMiyauci/unitest/commit/392c152be75f5bf33a2309a14a6da39c106e7c0a))
* **matcher:** add `toContainEqual` matcher ([8adecc6](https://github.com/TomokiMiyauci/unitest/commit/8adecc6966567a8ebfda64ea17d6ddb8a060040f))

# [1.0.0-beta.36](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.35...v1.0.0-beta.36) (2021-11-28)


### Bug Fixes

* add readonly signature to array types ([dee5c1f](https://github.com/TomokiMiyauci/unitest/commit/dee5c1f51580cc9473ee29ef7677a09740e017bb))
* **matcher:** change `toContain` matcher types waht accept all iterable types ([a9e7eaa](https://github.com/TomokiMiyauci/unitest/commit/a9e7eaa10468afb8b8da29c07a2c5935f8409d1d))

# [1.0.0-beta.35](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.34...v1.0.0-beta.35) (2021-11-27)


### Features

* **matcher:** add `toBeEmpty` matcher ([c5e2f18](https://github.com/TomokiMiyauci/unitest/commit/c5e2f18eebcb03f4ba16df13c8918059f677a954))
* **matcher:** add `toIncludeAnyMembers` matcher ([3aaf913](https://github.com/TomokiMiyauci/unitest/commit/3aaf91331a221af873d07304f51c1fceaaa949ba))
* **matcher:** add `toIncludeSameMembers` matcher ([310c20a](https://github.com/TomokiMiyauci/unitest/commit/310c20ae51c91c6cd47ca5b8382a1b8e2a74aa50))

# [1.0.0-beta.34](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.33...v1.0.0-beta.34) (2021-11-27)


### Bug Fixes

* **matcher:** change `toContainAnyEntries` types ([45f8deb](https://github.com/TomokiMiyauci/unitest/commit/45f8deb26b8fafe880b573a576303989fbb6f49c))


### Features

* **matcher:** add `toContainAnyEntries` matcher ([8005015](https://github.com/TomokiMiyauci/unitest/commit/8005015b3ee444b136237d9f066076381a634307))
* **matcher:** add `toContainAnyValues` matcher ([a91338f](https://github.com/TomokiMiyauci/unitest/commit/a91338f2272128cf9fa0c522606df6f3cb1b3135))
* **matcher:** add `toContainEntries` matcher ([beb20b2](https://github.com/TomokiMiyauci/unitest/commit/beb20b2ed1f35c7602a59283fabb15ee3806878f))
* **matcher:** add `toContainEntry` matcher ([e43e419](https://github.com/TomokiMiyauci/unitest/commit/e43e419a5d5d2daa8517c769d17326e0978e32f8))
* **matcher:** add `toContainValues` matcher ([e1daab6](https://github.com/TomokiMiyauci/unitest/commit/e1daab632204592a62cedda022ff456072e53d72))

# [1.0.0-beta.33](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.32...v1.0.0-beta.33) (2021-11-27)


### Features

* **expect:** display matcher defined actual value when assert error ([59e887a](https://github.com/TomokiMiyauci/unitest/commit/59e887ad6fa6e1f6e68d16a0af2bd4c8f5937d0f))
* **matcher:** add `toContainAnyKeys` matcher ([719cb82](https://github.com/TomokiMiyauci/unitest/commit/719cb8249ee08e436832d4252b447d18eae0c4f9))
* **matcher:** add `toContainValue` matcher ([5eb17e6](https://github.com/TomokiMiyauci/unitest/commit/5eb17e6fc1678024791915bc5557b67dc81378dd))
* **matcher:** add `toIncludeAllMembers` matcher ([730c5e2](https://github.com/TomokiMiyauci/unitest/commit/730c5e20d024354b97fe4c10b778595514b278a6))

# [1.0.0-beta.32](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.31...v1.0.0-beta.32) (2021-11-26)


### Features

* **matcher:** add `toBeHexColor` matcher ([33f1a05](https://github.com/TomokiMiyauci/unitest/commit/33f1a051331e2279fb458c5ef1d7be3d18b396ca))
* **matcher:** add `toEqualCaseInsensitive` matcher ([7e43f70](https://github.com/TomokiMiyauci/unitest/commit/7e43f70c5e6ddfd5faeccd699198be4cb3f1c239))
* **matcher:** add `toEqualIgnoringWhitespace` matcher ([5d37bfd](https://github.com/TomokiMiyauci/unitest/commit/5d37bfd2b727bacd1e40b4fdf238ee10fb532b71))
* **matcher:** add `toIncludeMultiple` matcher ([e228215](https://github.com/TomokiMiyauci/unitest/commit/e2282156fb8eafde19119c6a369a31d41056be13))
* **matcher:** add `toIncludeRepeated` matcher ([e6cf728](https://github.com/TomokiMiyauci/unitest/commit/e6cf728412cf1c3d9d1ebe91cb0bb55c2f643f74))

# [1.0.0-beta.31](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.30...v1.0.0-beta.31) (2021-11-26)


### Features

* **matcher:** add `toBeDateString` matcher ([2704e26](https://github.com/TomokiMiyauci/unitest/commit/2704e26a04cfd5855540209e412d497ce64a3c31))
* **matcher:** add `toEndWith` matcher ([0ea209f](https://github.com/TomokiMiyauci/unitest/commit/0ea209f2106ba11588c1228d0a36fc3ee7d396fd))
* **matcher:** add `toInclude` matcher ([4e543a8](https://github.com/TomokiMiyauci/unitest/commit/4e543a8846cce65ae8454632e48206ad1fda6665))

# [1.0.0-beta.30](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.29...v1.0.0-beta.30) (2021-11-26)


### Bug Fixes

* **modifier:** change display expected hint and color to blue ([75bd82b](https://github.com/TomokiMiyauci/unitest/commit/75bd82b3366d985d216b7baecbe9499078eba0ea))


### Features

* **expect:** merge expectedHint and actualHint with match result ([380a6e8](https://github.com/TomokiMiyauci/unitest/commit/380a6e899352559a6cee24f1c5526e6bb5631512))

# [1.0.0-beta.29](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.28...v1.0.0-beta.29) (2021-11-25)


### Features

* **expect:** add overwrite expect and actual hint when error ([fe0954d](https://github.com/TomokiMiyauci/unitest/commit/fe0954d05fc37d33a9803731cc58101806011deb))
* **matcher:** add `toStartWith` matcher ([f8014fb](https://github.com/TomokiMiyauci/unitest/commit/f8014fbb46886f896a9857932953d122d6cc4f58))

# [1.0.0-beta.28](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.27...v1.0.0-beta.28) (2021-11-25)


### Bug Fixes

* **expect:** improve types ([e91626a](https://github.com/TomokiMiyauci/unitest/commit/e91626ab0c338e61ce384bbb82a5770ad496177a))


### Features

* **matcher:** add `toContainKeys` matcher ([4ec8855](https://github.com/TomokiMiyauci/unitest/commit/4ec8855e87485d64cd73f9daeb8a692a49520dcf))
* **matcher:** change matcher return value interface ([fce278f](https://github.com/TomokiMiyauci/unitest/commit/fce278fb7bf589df5442283b67aaa504401df47a))

# [1.0.0-beta.27](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.26...v1.0.0-beta.27) (2021-11-25)


### Features

* **matcher:** add `toHaveProperty` matcher ([2340b9a](https://github.com/TomokiMiyauci/unitest/commit/2340b9ab974bcd2d91c78fb24bd5527817c42cb1))

# [1.0.0-beta.26](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.25...v1.0.0-beta.26) (2021-11-24)


### Features

* **it:** add `each` function ([7239b55](https://github.com/TomokiMiyauci/unitest/commit/7239b5589cf761dca5880db22b8fbdc024f043e2))
* **matcher:** add `toSatisfyAll` matcher ([017a3b6](https://github.com/TomokiMiyauci/unitest/commit/017a3b66db4118308a176c8f581ae06dd9bc18de))
* **matcher:** add `toSatisfyAll` matcher ([59e2b1d](https://github.com/TomokiMiyauci/unitest/commit/59e2b1d615a51697c50d7b10e0789870d720d56d))

# [1.0.0-beta.25](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.24...v1.0.0-beta.25) (2021-11-24)


### Features

* **matcher:** add `toBeExtensible` matcher ([9cbe6e3](https://github.com/TomokiMiyauci/unitest/commit/9cbe6e3a8f634ec7afe7eb22f7e6afe55c4c30b2))
* **matcher:** add `toBeFrozen` matcher ([0032aea](https://github.com/TomokiMiyauci/unitest/commit/0032aeacfe7101c714be9d3eedaf6df38050d463))
* **matcher:** add `toBeSealed` matcher ([3bdbcbe](https://github.com/TomokiMiyauci/unitest/commit/3bdbcbe50e4f5542e4ecbb6e3b637c8624e6447e))

# [1.0.0-beta.24](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.23...v1.0.0-beta.24) (2021-11-24)


### Bug Fixes

* **expect:** fix return types to promise when expect value is promise ([3f2216b](https://github.com/TomokiMiyauci/unitest/commit/3f2216b60d477b1111c134b2bc4ce36215deeff8))

# [1.0.0-beta.23](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.22...v1.0.0-beta.23) (2021-11-23)


### Bug Fixes

* **it:** fix it accept types ([cb0b79e](https://github.com/TomokiMiyauci/unitest/commit/cb0b79e5eee7663080063a473352b7e4b3356ee7))


### Features

* **helper:** use Deno.inspect safely at `stringify` ([edb1f18](https://github.com/TomokiMiyauci/unitest/commit/edb1f182494fb0f44ce2ae2b2ab7de3ca41d338e))

# [1.0.0-beta.22](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2021-11-23)


### Features

* **modifier:** change modifier interface to flatten and have type ([e240af8](https://github.com/TomokiMiyauci/unitest/commit/e240af8c56a518e3828c4d1bf785d4124a9dcacf)), closes [#6](https://github.com/TomokiMiyauci/unitest/issues/6)

# [1.0.0-beta.21](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2021-11-22)


### Features

* **compat:** add `Deno.test` compat as `it` function ([21a9caa](https://github.com/TomokiMiyauci/unitest/commit/21a9caadfa597f670acab545d3dae87ae74a875e))

# [1.0.0-beta.20](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2021-11-22)


### Features

* **matcher:** add `toSatisfy` matcher ([f3269b4](https://github.com/TomokiMiyauci/unitest/commit/f3269b42ad622ba7be9abbd1bd90d1e60371a423))
* **matcher:** change matcher return interface ([ce5fd57](https://github.com/TomokiMiyauci/unitest/commit/ce5fd574449a02f8439becc594b283cb519fd6a2))
* **modifier:** add `not` modifier ([32c4496](https://github.com/TomokiMiyauci/unitest/commit/32c44969060fc6ad0d0089c3446d4b02152e0b76)), closes [#6](https://github.com/TomokiMiyauci/unitest/issues/6)
* **modifier:** add `resolves` and `rejects` modifiers ([147bdb9](https://github.com/TomokiMiyauci/unitest/commit/147bdb97cf31eb37f888e81219a6a24e1da6a0d4))


### Performance Improvements

* **expect:** remove deplicated code ([4447869](https://github.com/TomokiMiyauci/unitest/commit/4447869fa3e7bd6ef8f2f18830b65d31281cee99)), closes [#6](https://github.com/TomokiMiyauci/unitest/issues/6)

# [1.0.0-beta.19](https://github.com/TomokiMiyauci/unitest/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2021-11-21)


### Bug Fixes

* do not re-export for not supported bundler ([15e970d](https://github.com/TomokiMiyauci/unitest/commit/15e970d75088b5b3f42ee7ae6832167691ebfcb7))

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
