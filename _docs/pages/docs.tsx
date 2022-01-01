import React, { type ComponentType, useMemo, useState } from "react";
import { useRouter } from "aleph/react";
import { clsx } from "../deps.ts";
import Footer from "../components/docs_footer.tsx";
import type { Markdown } from "../plugins/markdown.ts";
import "../styles/prose.css";

type Menu = {
  title: string;
  path: string;
};

type NavMenu = {
  name: string;
  items: (Menu & { submenu?: Menu[] })[];
};

const navMenu: NavMenu = {
  name: "Documentation",
  items: [
    { title: "Get Started", path: "/docs/get-started" },
    {
      title: "matcher",
      path: "/docs/matcher",
    },
    {
      title: "expect",
      path: "/docs/expect",
    },
    {
      title: "dummy",
      path: "/docs/dummy",
    },
    {
      title: "mock",
      path: "/docs/mock",
    },
    {
      title: "test",
      path: "/docs/test",
    },
  ],
};

type DocsProps = {
  Page?: ComponentType<any> & Markdown;
};

export default function Docs({ Page }: DocsProps) {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();

  const navLinks = useMemo<Menu[]>(() => {
    return navMenu.items.reduce((acc, cur) => {
      if (cur.submenu) {
        return [...acc, ...cur.submenu];
      }
      return [...acc, cur];
    }, [] as Menu[]);
  }, [pathname]);

  const preLink = useMemo<Menu | undefined>(() => {
    const i = navLinks.findIndex(({ path }) => path === pathname);
    return navLinks[i - 1];
  }, [navLinks, pathname]);

  const nextLink = useMemo<Menu | undefined>(() => {
    const i = navLinks.findIndex(({ path }) => path === pathname);
    return navLinks[i + 1];
  }, [navLinks, pathname]);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="top-72px md:sticky md:float-left md:w-72">
        <button
          className="flex md:hidden space-x-2 items-center w-full px-2"
          onClick={() => setOpen(!isOpen)}
        >
          <span
            className={clsx("i-mdi-chevron-right transition duration-200", {
              "transform rotate-90": isOpen,
            })}
          />
          <span>Menu</span>
        </button>
        <aside
          className={clsx("md:block p-2", {
            "hidden": !isOpen,
          })}
        >
          <h2 className="uppercase px-2 text-gray-400 text-sm">
            {navMenu.name}
          </h2>
          <nav className="mt-2">
            <ul>
              {navMenu.items.map(({ title, path }) => {
                return (
                  <li
                    key={path}
                  >
                    <a
                      className="px-2 py-0.5 flex transition-colors duration-200 hover:bg-gray-100 rounded"
                      data-active-className="text-teal-500 bg-gray-100"
                      rel="nav"
                      href={path}
                    >
                      <span>{title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </section>

      {
        <aside className="w-60 hidden xl:block xl:sticky overflow-y-scroll h-92vh xl:float-right top-72px right-0">
          <h5 className="mb-3">On this page</h5>
          <ul>
            {Page?.toc.map(({ title, id, escapedTitle }) => (
              <li key={id}>
                <a
                  className="block opacity-60 transition-colors duration-200 hover:opacity-100"
                  href={`#${escapedTitle}`}
                  onClick={(
                    e,
                  ) => {
                    e.preventDefault();
                    const el = document.getElementById(escapedTitle);
                    if (el) {
                      const header = document.getElementsByTagName("header");

                      window.scrollTo({
                        "behavior": "smooth",
                        "top": el.offsetTop -
                          (header.item(0)?.clientHeight ?? 0),
                      });
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      }

      {Page &&
        (
          <article className="prose prose-gray max-w-none md:ml-72 xl:mx-72">
            <Page className="px-4 lg:px-8" />

            <nav className="px-4 lg:px-8">
              <div className="flex justify-between">
                {preLink && (
                  <a className="space-x-2" href={preLink.path}>
                    <span className="i-mdi-arrow-left-thin-circle-outline" />
                    <span>
                      {preLink.title}
                    </span>
                  </a>
                )}
                {nextLink && (
                  <a className="space-x-2" href={nextLink.path}>
                    <span>
                      {nextLink.title}
                    </span>
                    <span className="i-mdi-arrow-right-thin-circle-outline" />
                  </a>
                )}
              </div>
            </nav>

            <Footer />
          </article>
        )}
    </main>
  );
}
