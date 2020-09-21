import React from "react";
import styles from '~/styles/Home.module.css'
import {GetStaticProps, NextPage} from "next";
import {getSortedPosts, PostSummary} from "~/lib/posts";
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import Link from "next/link";

type Props = {
  posts: PostSummary[];
}

const Home: NextPage<Props> = ({posts}) => (
    <DefaultLayout>
        <ul>
            {posts.map(({ slug, date, title }) => (
                <li key={slug}>
                    <Link href={`/posts/${slug}`}>
                        {title}
                    </Link>
                    <br />
                    {new Date(date).toLocaleString()}
                </li>
            ))}
        </ul>
    </DefaultLayout>
)

export const getStaticProps: GetStaticProps = async ({params}) => ({
    props: {
        posts: getSortedPosts(),
    }
})

export default Home
