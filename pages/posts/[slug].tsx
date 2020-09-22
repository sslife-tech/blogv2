import {findPost, getSortedPosts, PostDetail, PostSummary, relatedPosts} from "~/lib/posts";
import {NextPage, GetStaticPaths, GetStaticProps} from "next";
import React from "react";
import Head from 'next/head';
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import config from "~/Configuration";
import {PageTitle} from "~/components/atoms/PageTitle";
import {Tag} from "~/components/atoms/Tag";
import style from "~/styles/PostSlug.module.css";
import {Time} from "~/components/atoms/Time";
import {Container} from "~/components/atoms/Container";
import {HTML} from "~/components/atoms/HTML";
import {getAuthor} from "~/components/organisms/Author";
import {PostList} from "~/components/organisms/PostList";

type Props = {
    post: PostDetail;
    relatedPosts: PostSummary[];
}

const PostPage: NextPage<Props> = ({post, relatedPosts}) => {
    const date: Date = new Date(post.date);
    const tags = post.tags.map((tag, index) => <Tag text={tag} key={index}/>);

    const related = (relatedPosts: PostSummary[]): JSX.Element => {
        if (relatedPosts.length > 0) {
            return <PostList posts={relatedPosts}/>;
        }
        return (
            <p>
                関連記事はまだありません。
            </p>
        );
    };

    return (
        <DefaultLayout>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description}/>
                <meta content={`${config.baseURL}${post.thumbnail}`} property="og:image"/>
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
                <section className={style.related_container}>
                    <h1>
                        関連記事
                    </h1>
                    {related(relatedPosts)}
                </section>
            </Container>
        </DefaultLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: getSortedPosts().map(post => `/posts/${post.slug}`) || [],
    fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const post = await findPost(params.slug as string);
    return {
        props: {
            post,
            relatedPosts: relatedPosts(post)
        }
    };
};

export default PostPage;
