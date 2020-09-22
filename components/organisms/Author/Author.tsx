import React from "react";
import style from './Author.module.css';

interface Props {
    name: string;
    image: string;
    bio: string;
}

const Author: React.FunctionComponent<Props> = ({name, image, bio}) => (
    <div className={style.container}>
        <img className={style.img} src={image} alt="name"/>
        <div className={style.text_container}>
            <p className={style.name}>
                {name}
            </p>
            <p className={style.bio}>
                {bio}
            </p>
        </div>
    </div>
);

export {Author};
