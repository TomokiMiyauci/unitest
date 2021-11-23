import React, { ComponentType } from "react";
import "./styles/global.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <Page {...pageProps} />
    </main>
  );
}
