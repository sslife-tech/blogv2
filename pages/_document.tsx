import React from "react";
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {DocumentInitialProps} from "next/dist/next-server/lib/utils";
import config from "~/Configuration";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render(): JSX.Element {
        return (
            <Html lang='ja'>
                <Head>
                    <link rel="icon" href="/favicon.png"/>
                    <link rel="shortcut icon" href={`${config.baseURL}/favicon.png`}/>
                    <link rel='apple-touch-icon' href={`${config.baseURL}/images/apple-touch-icon.png`}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
