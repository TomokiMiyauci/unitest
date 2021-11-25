import React, { ComponentType } from "react";
import Header from "@component/header.tsx";
import Footer from "@component/footer.tsx";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <Header />
      <Page {...pageProps} />
      <Footer />
    </main>
  );
}
