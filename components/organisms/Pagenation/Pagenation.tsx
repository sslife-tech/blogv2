import React from "react";
import style from './Pagenation.module.css';
import Link, {LinkProps} from "next/link";

interface Props {
    current: number;
    total: number;
    hrefGenerator: (page: number) => LinkProps;
}

interface Pager {
    current: number;
    total: number;
}

const pagesArray = (total: number): number[] => [...new Array(total).keys()].map(i => i + 1);

const Pagenation: React.FunctionComponent<Props> = ({current, total, hrefGenerator}) => {
    const pages: JSX.Element[] = pagesArray(total).map((page, index) => {
        if (page === current) {
            return (
                <li key={index} className={style.active}>
                    {page}
                </li>
            );
        }

        const linkProps = hrefGenerator(page);

        return (
            <li key={index}>
                <Link href={linkProps.href} as={linkProps.as}>
                    <a className={style.page}>
                        {page}
                    </a>
                </Link>
            </li>
        );
    });

    return (
        <ul className={style.container}>
            {pages}
        </ul>
    );
};

export {Pagenation, pagesArray};
export type {Pager};
