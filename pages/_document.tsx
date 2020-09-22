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
                    <link rel='manifest' href='/manifest.json' />
                    <link rel="shortcut icon" href={`${config.baseURL}/favicon.png`}/>
                    <link rel='apple-touch-icon' href={`${config.baseURL}/images/apple-touch-icon.png`}/>
                    <meta name='application-name' content='SSLife Tech' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='SSLife Tech' />
                    <meta name='description' content='しょうちゃんとしおりんのブログ' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-TileColor' content='#0070f3' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content="#0070f3"/>
                    <meta property="og:site_name" content="SSLife Tech"/>
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
