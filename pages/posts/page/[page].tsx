import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import Head from 'next/head';
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import style from "~/styles/Home.module.css";
import {Container} from "~/components/atoms/Container";
import {PostList} from "~/components/organisms/PostList";
import {configuration} from "~/Configuration";
import {PostMetaData} from "~/@types";
import {registry} from "~/Registry";
import {Pagenation, pagesArray} from "~/components/organisms/Pagenation";
import type {Pager} from "~/components/organisms/Pagenation";
import {LinkProps} from "next/link";

type Props = {
    posts: PostMetaData[];
    pager: Pager;
}

export const hrefGenerator = (page: number): LinkProps => {
    if (page === 1) {
        return {href: '/'};
    }
    return {href: '/posts/page/[page]', as: `/posts/page/${page}`};
};

const PostPage: NextPage<Props> = ({posts, pager}) => {
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

const pagePerItem = 5;

export const getStaticPaths: GetStaticPaths = async () => {
    const total = Math.ceil(await registry.postAdapter.count() / pagePerItem);

    // page 1 is excluded because of same as top page
    const paths: string[] = pagesArray(total).slice(1).map(page => `/posts/page/${page}`);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const current = Number(params.page as string);

    const offset: number = (current - 1) * pagePerItem;
    const posts: PostMetaData[] = await registry.postAdapter.get(offset, pagePerItem);

    return {
        props: {
            posts,
            pager: {
                current,
                total: Math.ceil(await registry.postAdapter.count() / pagePerItem),
            },
        }
    };
};

export default PostPage;
