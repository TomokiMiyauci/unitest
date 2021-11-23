import React from "react";

export default function Header() {
  return (
    <header
      className={`p-2 text-gray-600 sticky top-0 bg-gray-50`}
    >
      <a href="/">
        <h1 className="text-2xl space-x-2">
          <span>Unitest</span>{" "}
          <span className="bg-amber-500 rounded-md px-1 text-gray-700 shadow">
            Beta
          </span>
        </h1>
      </a>
    </header>
  );
}
