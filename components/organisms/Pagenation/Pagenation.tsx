import React from "react";
import style from './Pagenation.module.css';
import Link, {LinkProps} from "next/link";

interface Props {
    current: number;
    total: number;
    hrefGenerator: (page: number) => LinkProps;
    maxAmount?: number;
}

interface Pager {
    current: number;
    total: number;
}

const pagenation = (current: number, total: number, maxAmount: number): number[] => {
    const maxSideAmount = Math.round((maxAmount - 1) / 2);

    const normalStart: number = Math.max(1, current - maxSideAmount);
    const normalEnd: number = Math.min(total, current + maxSideAmount);

    const start = Math.max(1, normalStart + (normalEnd - (current + maxSideAmount)));
    const end = Math.min(total, normalEnd + ((maxSideAmount - current) + normalStart));

    return [...new Array(end - start + 1).keys()].map(i => i + start);
};

const Pagenation: React.FunctionComponent<Props> = ({current, total, hrefGenerator, maxAmount}) => {
    const pages: JSX.Element[] = pagenation(current, total, maxAmount).map((page, index) => {
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

Pagenation.defaultProps = {
    maxAmount: 5,
};

export {Pagenation};
export type {Pager};
