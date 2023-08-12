import '@/styles/globals.css'
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import Head from "next/head";
import {GlobalStyle} from "../src/commons/style/global.style";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: "https://",
        cache: new InMemoryCache(),
    });

  return (
        <ApolloProvider client={client}>
          <Head>
            <title>larmong portfolio</title>
          </Head>
          <Global styles={GlobalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
  );
}
