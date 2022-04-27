import "tailwindcss/tailwind.css";
import "./../styles/styles.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Head>
          <title></title>
          <meta httpEquiv="Content-Type" content="text/html" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="application-name" content="" />
          <meta name="author" content="" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
