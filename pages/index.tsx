import React from "react";
import {GetStaticProps, NextPage} from "next";
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import {PostList} from "~/components/organisms/PostList";
import style from '~/styles/Home.module.css';
import Head from "next/head";
import {Container} from "~/components/atoms/Container";
import {configuration} from "~/Configuration";
import {PostMetaData} from "~/@types";
import {registry} from "~/Registry";

type Props = {
  posts: PostMetaData[];
}

const Home: NextPage<Props> = ({posts}) => (
    <DefaultLayout>
        <Head>
            <title>SSLife Tech</title>
            <meta name="description" content="しょうちゃんとしおりんのブログ"/>
            <meta content={`${configuration.baseURL}/ogp.jpg`} property="og:image"/>
        </Head>
        <main className={style.main}>
            <Container>
                <PostList posts={posts}/>
            </Container>
        </main>
    </DefaultLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
    props: {
        posts: await registry.postAdapter.getAll(),
    }
});

export default Home;
