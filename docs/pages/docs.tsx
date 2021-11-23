import React, { ComponentType } from "react";
import "../styles/docs.css";

type DocsProps = {
  Page?: ComponentType<any>;
};

export default function Docs({ Page }: DocsProps) {
  return (
    <div>
      <aside className="top-50px p-2 md:fixed md:w-72 inset-y-0">
        <h2 className="uppercase px-2 text-gray-400 text-sm">documentation</h2>
        <nav>
          <ul>
            <li className="p-2">
              <a className="flex" href="/docs/get-started">Get Started</a>
            </li>
          </ul>
        </nav>
      </aside>

      {Page &&
        <Page className="content md:ml-72 p-4 md:p-8" />}
    </div>
  );
}
