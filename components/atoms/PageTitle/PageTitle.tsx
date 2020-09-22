import React from "react";
import style from './PageTitle.module.css';

type Props = {
    title: string;
}

const PageTitle: React.FunctionComponent<Props> = ({title}) => (
    <h1 className={style.title}>
        {title}
    </h1>
);

export {PageTitle};
