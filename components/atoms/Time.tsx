import React from "react";

type Props = {
    date: Date;
}

const Time: React.FunctionComponent<Props> = ({date}) => (
    <time dateTime={`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate()}`}>
        {date.getFullYear()}年{date.getMonth()+1}月{date.getDate()}日
    </time>
);

export {Time};
