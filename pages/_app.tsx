import React from "react";
import {AppProps} from "next/app";
import '~/styles/reset.css';
import '~/styles/globals.css';
import Head from "next/head";

const app = ({Component, pageProps}: AppProps): JSX.Element => (
    <>
        <Head>
            <meta name='viewport'
                  content='minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover'/>
        </Head>
        <Component {...pageProps} />
    </>

);

export default app;
