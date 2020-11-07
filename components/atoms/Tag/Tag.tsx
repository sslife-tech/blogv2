import React from "react";
import style from './Tag.module.css';
import * as Sentry from "@sentry/node";

type Props = {
    text: string;
}

const Tag: React.FunctionComponent<Props> = ({text}) => (
    <span className={style.tag} onClick={() => Sentry.captureException(new Error("test aaa"))}>
        #{text}
    </span>
);

export {Tag};
