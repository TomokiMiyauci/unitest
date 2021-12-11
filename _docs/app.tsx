import React, { ComponentType } from "react";
import Header from "@component/header.tsx";
import Footer from "@component/footer.tsx";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <main className="text-gray-700 antialiased">
        <Header />
        <Page {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
