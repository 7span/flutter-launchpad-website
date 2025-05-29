import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Flutter Launchpad" />
        <meta name="keywords" content="Flutter Boilerplate" />
        <meta name="keywords" content="Flutter Starter Kit" />
        <meta
          name="description"
          content="Everything you need for Flutter development. Open source and ready to use boilerplate."
        />
        {/* title */}
        <title>Flutter Launchpad</title>
        {/* Favicon */}
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        {/* theme css */}
        <link
          href="open-source/flutter-launchpad/assets/css/style.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
