# Contributing to Unitest

Welcome, and thank you for taking time in contributing to Unitest! You can
improve Unitest in different ways:

- ∆ submit new features
- ✘ find bugs
- ✔︎ review code
- 𝔸 improve our [documentation](https://unitest.vercel.app/)

## Development Setup

You will need [Deno](https://deno.land/) 1.15+.

1. Fork this repository to your own GitHub account.
2. Clone the repository to your local device.
3. Create a new branch `git checkout -b BRANCH_NAME`.
4. [Push your branch to Github after all tests passed.](#Testing)
5. Make a [pull request](https://github.com/TomokiMiyauci/unitest/pulls).
6. Merge to master branch by our maintainers.

## Testing

You can run all tests with the following command:

```bash
deno test --ignore=node_modules
```

## Project Structure

- _docs - documents and document generator
- _e2e - End to End tests
- [compat](./compat/README.md) - compat module for browser
- [expect](./expect/README.md) - expect module
- [dummy](./dummy/README.md) - dummy objects
- helper - helper for entire module
- [matcher](./matcher/README.md) - matcher collections
- [mock](./mock/README.md) - mock object
- [modifier](./mockfier/../README.md) - modifier collections
- [test](./test/README.md) - test register

## Code Style

The code style is based on the
[Deno Style Guide](https://deno.land/manual/contributing/style_guide).

## Commit

Commit messages should follow
[conventional commit](https://www.conventionalcommits.org/ja/v1.0.0/). If you
are available Node.js, you can use the CLI to commit interactively. (optional)

You can do this with any package manager, but please do not commit the newly
generated lock file.

```bash
npm i
npm run cz
```

```bash
yarn
yarn cz
```

```bash
pnpm i
pnpm cz
```

[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
is invoked to generate commit messages interactively.

The scope should follow [Project Structure](#project-structure).

example:

`feat(matcher): add new modifier`

## Code of Conduct

All contributors are expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).
