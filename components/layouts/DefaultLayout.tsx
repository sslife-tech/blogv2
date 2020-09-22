import React from "react";
import Head from "next/head";
import {Header} from "~/components/organisms/Header";
import config from '~/Configuration'

type Props = {
    children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<Props> = ({children}: Props) => (
    <>
        <Head>
            <title>SSLife Tech</title>
            <meta name='viewport' content="width=device-width,initial-scale=1,maximum-scale=1"/>
            <meta name="description" content="しょうちゃんとしおりんのブログ"/>
            <meta content={`${config.baseURL}/ogp.jpg`} property="og:image"/>
            <link rel="icon" href="/favicon.png"/>
            <meta name='theme-color' content="#0070f3"/>
            <meta property="og:site_name" content="SSLife Tech"/>
            <link rel="shortcut icon" href={`${config.baseURL}/favicon.png`} />
            <link rel='apple-touch-icon' href={`${config.baseURL}/images/apple-touch-icon.png`} />
        </Head>
        <Header/>
        {children}
        <footer style={{textAlign: 'center', padding: '12px 0', marginTop: '90px'}}>
            <p>
                &copy; SSLife Tech
            </p>
        </footer>
    </>
);

export {DefaultLayout};
