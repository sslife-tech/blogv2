import React from "react";
import {AppProps} from "next/app";
import '~/styles/reset.css';
import '~/styles/globals.css';
import Head from "next/head";
import * as Sentry from '@sentry/browser';
import { Integrations } from "@sentry/tracing";

if (process.env.sentryEnvironment) {
    Sentry.init({
        dsn: "https://80c42edba5d34fc59884a8c273be896c@o473167.ingest.sentry.io/5507831",

        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,

        release: process.env.sentryEnvironment === "production" ? process.env.commitSha : undefined,

        environment: process.env.sentryEnvironment,

        beforeSend(event) {
            // Check if it is an exception, and if so, show the report dialog
            if (event.exception) {
                Sentry.showReportDialog({ eventId: event.event_id });
            }
            return event;
        },
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
