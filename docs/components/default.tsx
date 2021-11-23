import React from "react";
import Header from "@component/header.tsx";
import type { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <main className="antialiased">
      <Header />

      <div>
        <aside className="w-66 fixed">
          <h2 className="uppercase p-2 text-gray-500">documentation</h2>

          <nav className="px-2">
            <ul>
              <li>
                <a className="flex" href="/">
                  Get started
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="prose flex-1 pl-66">
          {children}
        </div>
      </div>
    </main>
  );
}

export default Layout;
export type { LayoutProps };
