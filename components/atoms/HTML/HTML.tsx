import React from "react";
import style from './HTML.module.css';

type Props = {
    html: string;
}

const HTML: React.FunctionComponent<Props> = ({html}) => (
    <section className={style.html} dangerouslySetInnerHTML={{__html: html}}/>
);

export {HTML};
