import React from "react";
import {GetStaticProps, NextPage} from "next";
import {getSortedPosts, PostSummary} from "~/lib/posts";
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import {PostList} from "~/components/organisms/PostList";
import style from '~/styles/Home.module.css'
import Head from "next/head";
import config from "~/Configuration";

type Props = {
  posts: PostSummary[];
}

const Home: NextPage<Props> = ({posts}) => (
    <DefaultLayout>
        <Head>
            <title>SSLife Tech</title>
            <meta name="description" content="しょうちゃんとしおりんのブログ"/>
            <meta content={`${config.baseURL}/ogp.jpg`} property="og:image"/>
        </Head>
        <main className={style.main}>
            <PostList posts={posts}/>
        </main>
    </DefaultLayout>
)

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        posts: getSortedPosts(),
    }
})

export default Home
