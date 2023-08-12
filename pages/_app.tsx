import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import Head from "next/head";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalStyle } from "../src/commons/style/global.style";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>larmong portfolio</title>
        <link rel="icon" href="public/images/larmong.svg" />
      </Head>
      <Global styles={GlobalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
