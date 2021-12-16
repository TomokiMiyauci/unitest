import Link from "./link.tsx";
import { expect, test } from "../../mod.ts";
import { create } from "https://esm.sh/react-test-renderer@17.0.2?dev";
import React from "https://esm.sh/react@17.0.2";

test("should render children", () => {
  const component = create(
    <Link page="https://unitst.versel.app">
      <div data-test>My url</div>
    </Link>,
  );

  expect(component.root.findByProps({ "data-test": true }).children)
    .toEqual(["My url"]);
});
