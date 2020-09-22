import React from "react";
import style from './Tag.module.css';

type Props = {
    text: string;
}

const Tag: React.FunctionComponent<Props> = ({text}) => (
    <span className={style.tag}>
        #{text}
    </span>
);

export {Tag};
