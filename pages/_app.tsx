import React from "react";
import {AppProps} from "next/app";
import '~/styles/reset.css';
import '~/styles/globals.css';
import Head from "next/head";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        dsn: "https://80c42edba5d34fc59884a8c273be896c@o473167.ingest.sentry.io/5507831",

        // To set your release version
        release: "blogv2@" + process.env.npm_package_version,
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,

    });
}

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
