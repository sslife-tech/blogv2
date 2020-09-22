import React from "react";
import style from './Container.module.css';

type Props = {
    children: React.ReactNode;
}

const Container: React.FunctionComponent<Props> = ({children}) => (
    <div className={style.container}>
        {children}
    </div>
);

export {Container};
