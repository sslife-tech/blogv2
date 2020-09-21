import {findPost, getSortedPosts, PostDetail} from "~/lib/posts";
import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import Head from 'next/head'
import {DefaultLayout} from "~/components/layouts/DefaultLayout";

type Props = {
    post: PostDetail;
}

const PostPage: NextPage<Props> = ({post}) => (
    <DefaultLayout>
        <Head>
            <title>{post.title}</title>
        </Head>

        {post.title}
        <br/>
        {post.description}
        <br/>
        {post.author}
        <br/>
        {post.main_image}
        <br/>
        {post.tags.join(',')}
        <br/>
        {post.slug}
        <br/>
        {new Date(post.date).toLocaleString()}
        <br/>
        <section dangerouslySetInnerHTML={{__html: post.html}}/>
    </DefaultLayout>
)

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: getSortedPosts().map(post => `/posts/${post.slug}`) || [],
    fallback: false,
});

export const getStaticProps: GetStaticProps = async ({params}) => ({
    props: {
        post: await findPost(params.slug as string),
    }
})

export default PostPage
