import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="dark:bg-black bg-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
