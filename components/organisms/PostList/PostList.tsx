import React from "react";
import style from './PostList.module.css';
import {PostSummary} from "~/lib/posts";
import {Post} from "./Post";

interface Props {
    posts: PostSummary[];
}

const PostList: React.FunctionComponent<Props> = ({posts}) => {
    const list = posts.map((post, index) => <Post post={post} key={index} />)
    return (
        <div className={style.container}>
            {list}
        </div>
    )
}

export {PostList};
