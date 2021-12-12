import React, { ComponentType } from "react";

type Doc = {
  name: string;
  path: string;
};

const docs: Doc[] = [
  {
    name: "Get Started",
    path: "get-started",
  },
  {
    name: "matcher",
    path: "matcher",
  },
  {
    name: "expect",
    path: "expect",
  },
  {
    name: "dummy",
    path: "dummy",
  },
  {
    name: "mock",
    path: "mock",
  },
  {
    name: "test",
    path: "test",
  },
];

type DocsProps = {
  Page?: ComponentType<any>;
};

export default function Docs({ Page }: DocsProps) {
  return (
    <div>
      <aside className="top-50px p-2 md:fixed md:w-72">
        <h2 className="uppercase px-2 text-gray-400 text-sm">documentation</h2>
        <nav className="mt-2">
          <ul>
            {docs.map(({ name, path }) => {
              return (
                <li
                  key={path}
                >
                  <a
                    className="px-2 py-0.5 flex transition-colors duration-200 hover:bg-gray-100 rounded"
                    data-active-className="text-teal-500 bg-gray-100"
                    rel="nav"
                    href={`/docs/${path}`}
                  >
                    <span>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {Page &&
        <Page className="prose max-w-screen-lg md:ml-72 p-4 md:p-8" />}
    </div>
  );
}
