import "styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta
          name="description"
          content="A website for space travel and interstellar experience."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
