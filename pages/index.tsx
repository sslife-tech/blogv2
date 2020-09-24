import {NextPage, GetStaticProps} from "next";
import React from "react";
import Head from 'next/head';
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import style from "~/styles/Home.module.css";
import {Container} from "~/components/atoms/Container";
import {PostList} from "~/components/organisms/PostList";
import {configuration} from "~/Configuration";
import {PostMetaData} from "~/@types";
import {registry} from "~/Registry";
import {Pagenation} from "~/components/organisms/Pagenation";
import type {Pager} from "~/components/organisms/Pagenation";
import {hrefGenerator, pagePerItems} from "~/pages/posts/page/[page]";

type Props = {
    posts: PostMetaData[];
    pager: Pager;
}

const Home: NextPage<Props> = ({posts, pager}) => {
    return (
        <DefaultLayout>
            <Head>
                <title>SSLife Tech</title>
                <meta name="description" content="しょうちゃんとしおりんのブログ"/>
                <meta content={`${configuration.baseURL}/ogp.jpg`} property="og:image"/>
            </Head>
            <main className={style.main}>
                <Container>
                    <PostList posts={posts}/>
                    <Pagenation current={pager.current} total={pager.total} hrefGenerator={hrefGenerator}/>
                </Container>
            </main>
        </DefaultLayout>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const current = 1;

    const offset: number = (current - 1) * pagePerItems;
    const posts: PostMetaData[] = await registry.postAdapter.get(offset, pagePerItems);

    return {
        props: {
            posts,
            pager: {
                current,
                total: Math.ceil(await registry.postAdapter.count() / pagePerItems),
            },
        }
    };
};

export default Home;
