import React from "react";
import Head from "next/head";
import {Header} from "~/components/organisms/Header";

type Props = {
    children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<Props> = ({children}: Props) => (
    <>
        <Head>
            <meta name='viewport' content="width=device-width,initial-scale=1,minimum-scale=1"/>
            <meta name='theme-color' content="#0070f3"/>
            <meta property="og:site_name" content="SSLife Tech"/>
        </Head>
        <Header/>
        {children}
        <footer style={{textAlign: 'center', padding: '12px 0', marginTop: '120px'}}>
            <p>
                &copy; SSLife Tech
            </p>
        </footer>
    </>
);

export {DefaultLayout};
