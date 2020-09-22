import React from "react";
import {AppProps} from "next/app";
import '~/styles/reset.css'
import '~/styles/globals.css'

const app = ({Component, pageProps}: AppProps): JSX.Element => {
    return <Component {...pageProps} />
};

export default app;
