import React from "https://esm.sh/react@17.0.2";
import type { ReactElement } from "https://esm.sh/react@17.0.2";
type LinkProps = {
  page: string;
  children: ReactElement;
};

function Link({ page, children }: LinkProps) {
  return <a className="relative" href={page}>{children}</a>;
}

export default Link;
