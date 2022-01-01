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
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
        </style>
      </head>
      <Header />
      <Page {...pageProps} />
    </>
  );
}
