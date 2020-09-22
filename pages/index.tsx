import React from "react";
import styles from '~/styles/Home.module.css'
import {GetStaticProps, NextPage} from "next";
import {getSortedPosts, PostSummary} from "~/lib/posts";
import {DefaultLayout} from "~/components/layouts/DefaultLayout";
import {PostList} from "~/components/organisms/PostList";

type Props = {
  posts: PostSummary[];
}

const Home: NextPage<Props> = ({posts}) => (
    <DefaultLayout>
        <PostList posts={posts}/>
    </DefaultLayout>
)

export const getStaticProps: GetStaticProps = async ({params}) => ({
    props: {
        posts: getSortedPosts(),
    }
})

export default Home
