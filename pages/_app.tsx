import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import Head from "next/head";
import { GlobalStyle } from "../src/commons/style/global.style";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>larmong portfolio</title>
        <link rel="icon" href="public/images/larmong.svg" />
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
