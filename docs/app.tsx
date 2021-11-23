import React, { ComponentType } from "react";
import Header from "@component/header.tsx";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <Header />
      <Page {...pageProps} />
    </main>
  );
}
