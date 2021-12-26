import React, { ComponentType } from "react";
import Header from "@component/header.tsx";

import "https://esm.sh/@unocss/reset/tailwind.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <style>
          {`
        html, body {
          scroll-behavior: smooth;
        }
      `}
        </style>
      </head>
      <main className="text-gray-700 antialiased">
        <Header />
        <Page {...pageProps} />
      </main>
    </>
  );
}
