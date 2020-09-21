import React from "react";
import style from './Logo.module.css';
import Link from "next/link";

interface Props {
    link: string;
}

const Logo: React.FunctionComponent<Props> = ({link}) => (
    <h1 className={style.logo}>
        <Link href={link}>
            SSLife Tech
        </Link>
    </h1>
);

export {Logo};
