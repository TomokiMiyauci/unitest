import React from "react";

export default function Home() {
  return (
    <>
      <head>
        <title>Home | Unitest</title>
      </head>

      <main className="antialiased text-gray-600">
        <article className="flex space-y-6 mt-10 flex-col items-center justify-center">
          <div className="border bg-gradient-to-br via-green-400 from-amber-500 to-rose-500 rounded-md grid place-items-center shadow h-72 w-72">
            <span className="text-9xl text-gray-700">U</span>
          </div>
          <p className="text-3xl text-center font-extralight text-gray-800">
            <span>Deno-first</span> <span className="font-bold">uni</span>versal
            {" "}
            <span className="font-bold">unit</span> testing framework
          </p>

          <a
            href="/get-started"
            className="bg-green-400 rounded p-2 uppercase shadow-md"
          >
            Get Started
          </a>
        </article>
      </main>
    </>
  );
}
