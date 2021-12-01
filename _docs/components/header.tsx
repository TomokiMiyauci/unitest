import React from "react";

export default function Header() {
  return (
    <header
      className={`py-2 px-4 flex text-gray-600 sticky top-0 backdrop-filter backdrop-blur`}
    >
      <a href="/">
        <h1 className="text-2xl space-x-2">
          <span>Unitest</span>{" "}
          <span className="from-amber-500 via-yellow-200 font-light text-gray-800 bg-gradient-to-br text-xl p-1 rounded-md px-1 shadow">
            Beta
          </span>
        </h1>
      </a>
    </header>
  );
}
