import React from "react";
import { useRouter } from "aleph/react";
import clsx from "https://esm.sh/clsx";

type DropDownProps = {
  className?: string;
};

function DropDown({ className }: DropDownProps) {
  const { routePath } = useRouter();
  return (
    <ul className={clsx(className)}>
      <li>
        <a href={routePath}>English</a>
      </li>
      <li>
        <a href={`/ja/${routePath}`}>日本語</a>
      </li>
    </ul>
  );
}

export default DropDown;
