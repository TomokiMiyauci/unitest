---
title: Get Started
authors:
  - miyauci
---

# はじめましょう

**Unitest** にようこそ!

## 動作要件

次の要件を満たす必要があります。

- Deno 1.15+

## モジュールレジストリ

unitest は複数のレジストリにホスティングされています。

好きなレジストリを選ぶことが出来ます。

- deno.land: <https://deno.land/x/unitest>
- nest.land: <https://x.nest.land/unitest>

なお、このドキュメントでは `deno.land` のモジュールを使った場合の例示をしています。 そこで、次のようにインポートパスを記載します。

`https://deno.land/x/unitest@$VERSION`

`$VERSION` にはなるべく最新のバージョンを指定することを推奨します。

## 基本的な使用

シンプルな例を用いて、テストを書いてみましょう。2つの数値を加算する関数のテストします。

`add.ts` ファイルを作成します。

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

その後、 `add_test.ts` ファイルを作成します。

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
import { add } from "./add.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
```

Deno ではテストファイルとテスト対象ファイルをフラットに配置することを推奨しています。

```bash
.
├── add.ts
└── add_test.ts
```

`test` 関数はテストを登録します。 `jest` のようなスタイルの他に、Deno のRuntime API のようにも書くことが出来ます。

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";
import { add } from "./add.ts";

test({
  name: "adds 1 + 2 to equal 3"
  fn: () => {
    expect(sum(1, 2)).toBe(3);
  }
})
```

最後に、`deno test` を実行すると、以下のメッセージを出力します。

```bash
running 1 test from file:///path/to/add_test.ts
test adds 1 + 2 to equal 3 ... ok (9ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (42ms)
```

あなたは unitest を使用して、最初のテストを書き、うまくいきました!

このテストは `expect` と、 `toBe` を使用し、2 つの値が同じかテストしました。

`expect` は次の構文で実際の値(`actual`)と期待する値(`expected`)をテストします。

`expect(actual)[?modifier][matcher](expected)`

`toBe` は `matcher` に相当します。

利用可能な全ての `matcher` については [matcher](./matcher.md) を参照してください。
