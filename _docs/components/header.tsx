import React from "react";

export default function Header() {
  return (
    <header
      className={`py-2 px-4 flex items-center justify-between inset-x-0 text-gray-600 sticky top-0 backdrop-filter backdrop-blur max-w-screen-2xl mx-auto`}
    >
      <a href="/">
        <h1 className="text-2xl space-x-2">
          <span>Unitest</span>{" "}
          <span className="from-amber-500 via-yellow-200 font-light text-gray-800 bg-gradient-to-br text-xl p-1 rounded-md px-1 shadow">
            Beta
          </span>
        </h1>
      </a>

      <div className="space-x-4">
        <a
          className="hover:text-emerald-500 align-middle transition-colors duration-300"
          href="/docs/get-started"
        >
          Document
        </a>

        <a
          className="hover:text-emerald-500 transition-colors duration-300"
          href="https://github.com/TomokiMiyauci/unitest"
          target="_blank"
        >
          <span className="i-mdi-github w-8 h-8" />
        </a>
      </div>
    </header>
  );
}
