import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Layout: NextPage = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Space Tourism</title>
        <meta
          name="description"
          content="A website for space travel and interstellar experience."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
    </div>
  );
};
export default Layout;
