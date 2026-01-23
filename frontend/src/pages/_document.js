import { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <ToastContainer />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
