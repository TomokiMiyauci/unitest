import React, { ComponentType } from "react";
import "../styles/docs.css";

type DocsProps = {
  Page?: ComponentType<any>;
};

export default function Docs({ Page }: DocsProps) {
  return (
    <div>
      <aside>
        <nav></nav>
      </aside>

      {Page &&
        <Page className="content p-4" />}
    </div>
  );
}
