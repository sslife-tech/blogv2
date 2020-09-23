import React from "react";
import style from './Post.module.css';
import Link from "next/link";
import {Time} from "~/components/atoms/Time";
import {Tag} from "~/components/atoms/Tag";
import LazyLoad from 'react-lazyload';
import {PostMetaData} from "~/@types";

interface Props {
    post: PostMetaData;
}

const Post: React.FunctionComponent<Props> = ({post}) => {
    const date: Date = new Date(post.date);
    const tags = post.tags.map((tag, index) => <Tag text={tag} key={index}/>);

    return (
        <Link href={`/posts/${post.slug}`}>
            <div className={style.container}>
                <div className={style.img_container}>
                    <LazyLoad height={170} offset={100}>
                        <img src={post.thumbnail} alt={post.title}/>
                    </LazyLoad>
                </div>
                <div className={style.text_container}>
                    <div className={style.time}>
                        <Time date={date}/>
                    </div>
                    <div className={style.title}>
                        {post.title}
                    </div>
                    <div>
                        {tags}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export {Post};
