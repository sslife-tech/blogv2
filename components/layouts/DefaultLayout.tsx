import React from "react";
import Head from "next/head";
import {Header} from "~/components/organisms/Header";

type Props = {
    children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<Props> = ({children}: Props) => (
    <>
        <Head>
            <title>SSLife Tech</title>
            <meta name="description" content="しょうちゃんとしおりんのブログ"/>
            <meta content='https://www.sslife.tech/ogp.jpg' property="og:image"/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Header/>
            {children}
            <footer style={{textAlign: 'center', padding: '12px 0', marginTop: '90px'}}>
                <p>
                    &copy; SSLife Tech
                </p>
            </footer>
        </div>
    </>
);

export {DefaultLayout};
