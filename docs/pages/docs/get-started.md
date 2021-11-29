---
title: Get Started
authors:
  - miyauci
---

# Get Started

Welcome to use **Unitest**!

## Installation

you will need [Deno](https://deno.land/#installation) **1.14+**

Registry: <https://deno.land/x/unitest@VERSION>

## Usage

```ts
import { expect, test } from "https://deno.land/x/unitest@$VERSION/mod.ts";

test({
  name: "should have success prop"
  fn: () => {
    expect(result).toHaveProperty("success")
  }
})
```

and then,

`deno test`
