import React from "react";
import Footer from "@component/footer.tsx";

export default function Home() {
  return (
    <>
      <head>
        <title>Home | Unitest</title>
      </head>

      <main className="antialiased text-gray-600">
        <article className="flex space-y-6 mt-10 flex-col items-center justify-center">
          <img
            src="/logo.svg"
            className="w-52 h-52"
            draggable={false}
          />
          <p className="text-3xl text-center font-extralight text-gray-800">
            <span>Deno-first</span> <span className="font-bold">uni</span>versal
            {" "}
            <span className="font-bold">unit</span> testing framework
          </p>

          <a
            href="/docs/get-started/"
            className="bg-green-400 from-green-400 via-teal-400 to-blue-500 bg-gradient-to-br text-teal-900 font-semibold rounded p-2 uppercase shadow-md hover:opacity-80 transition duration-300 hover:shadow-lg focus:ring ring-teal-500"
          >
            Get Started
          </a>
        </article>

        <div className="container mx-auto mt-10 sm:mt-16 md:mt-30">
          <h2 className="text-center uppercase my-2 sm:my-4 md:my-8 font-bold text-xl">
            <span className="border-b-4 border-teal-900 text-teal-900">
              features
            </span>
          </h2>

          <div className="grid md:gap-20 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-md">
              <h2 className="text-3xl mb-2 text-true-gray-700">
                🦕 Deno-first
              </h2>

              <p className="text-gray-500">
                It has been designed with Deno first, and actively uses the Deno
                Runtime API.
              </p>
            </div>

            <div className="p-4 rounded-md">
              <h2 className="text-3xl mb-2 text-true-gray-700">🌎 Universal</h2>
              <p className="text-gray-500">
                It is also compatible to work in browsers and Node.js
                environments.
              </p>
              <p className="text-gray-500">
                Use the compatible `compat` module instead of the Deno Runtime
                API.
              </p>
            </div>

            <div className="p-4 rounded-md">
              <h2 className="text-3xl mb-2 text-true-gray-700">
                🃏 Like jest but not jest
              </h2>
              <p className="text-gray-500">
                You can express declarative tests around the symbolic expect in
                jest.
              </p>

              <p className="text-gray-500">
                Also, all matchers are composable and customizable. jest and
                jest-extended matchers are provided as presets.
              </p>
            </div>

            <div className="p-4 rounded-md">
              <h2 className="text-3xl mb-2 text-true-gray-700">
                <span className="text-emerald-500">♻️</span> Compositable
              </h2>
              <p className="text-gray-500">
                Unitest is also intended to be used in a browser.
              </p>
              <p className="text-gray-500">
                For this reason, we provide a composable interface to keep the
                bundle size as small as possible.
              </p>
            </div>

            <div className="p-4 rounded-md">
              <h2 className="text-3xl mb-2 text-true-gray-700">
                📄 TypeScript-first
              </h2>
              <p className="text-gray-500">
                Type-safe tests can be expressed. A type filter restricts the
                availability of only those matchers that satisfy the data type
                under test.
              </p>
              <p className="text-gray-500">
                It also keeps the bundle size small by transferring part of the
                data type validation to TypeScript.
              </p>
            </div>

            <div className="p-4 rounded-md">
              <h2 className="text-3xl mb-2 text-true-gray-700">
                🐺 Isolated
              </h2>
              <p className="text-gray-500">
                Each module is independent, with no dependency on context. This
                means that they can be combined with any module.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
