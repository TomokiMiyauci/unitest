import React from "react";
import DropDown from "./drop_down.tsx";

export default function Header() {
  return (
    <header
      className={`py-2 px-4 flex items-center justify-between inset-x-0 text-gray-600 sticky top-0 backdrop-filter backdrop-blur`}
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
          className="hover:text-emerald-500 transition-colors duration-300"
          href="/docs/get-started"
        >
          Document
        </a>

        {
          /* <span className="relative group">
          <span>
            Locale
          </span>
          <DropDown className="absolute group-hover:inline-block opacity-0 transform scale-0 group-hover:scale-100 top-5 group-hover:opacity-100 transition duration-300 shadow p-2 rounded right-0" />
        </span> */
        }

        <a
          className="hover:text-emerald-500 transition-colors duration-300"
          href="https://github.com/TomokiMiyauci/unitest"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
