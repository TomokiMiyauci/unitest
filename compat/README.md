# compat

Since Unitest is Deno-first, it is designed to work best in a Deno environment
with the best performance. For this reason, it uses the Deno runtime API.

Unitest, on the other hand, is universal and aims to work in any browser or
Node.js environment. For those environments, we provide a compat module instead
of the Deno runtime API.

## compat table

| Deno Runtime API | compat |
| ---------------- | ------ |
| `Deno.test`      | `it`   |
