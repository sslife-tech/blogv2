import {findPost, getSortedPosts, PostDetail} from "~/lib/posts";
import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import Head from 'next/head'
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import config from "~/Configuration";
import {PageTitle} from "~/components/atoms/PageTitle";
import {Tag} from "~/components/atoms/Tag";
import style from "~/styles/PostSlug.module.css";
import {Time} from "~/components/atoms/Time";
import {Container} from "~/components/atoms/Container";
import {HTML} from "~/components/atoms/HTML";
import {getAuthor} from "~/components/organisms/Author";

type Props = {
    post: PostDetail;
}

const PostPage: NextPage<Props> = ({post}) => {
    const date: Date = new Date(post.date)
    const tags = post.tags.map((tag, index) => <Tag text={tag} key={index}/>)

    return (
        <DefaultLayout>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description}/>
                <meta content={`${config.baseURL}${post.main_image}`} property="og:image"/>
            </Head>
            <Container>
                <article>
                    <PageTitle title={post.title} />
                    <div className={style.meta}>
                        <div>
                            <Time date={date}/>
                        </div>
                        <div>
                            {tags}
                        </div>
                    </div>
                    <HTML html={post.html}/>
                    <div className={style.author}>
                        {getAuthor(post.author)}
                    </div>
                </article>
            </Container>
        </DefaultLayout>
    )
}

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
