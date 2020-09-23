import React from "react";
import style from './PostList.module.css';
import {Post} from "./Post";
import {PostMetaData} from "~/@types";

interface Props {
    posts: PostMetaData[];
}

const PostList: React.FunctionComponent<Props> = ({posts}) => {
    const list = posts.map((post, index) => <Post post={post} key={index} />);
    return (
        <div className={style.container}>
            {list}
        </div>
    );
};

export {PostList};
