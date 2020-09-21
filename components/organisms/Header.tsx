import React from "react";
import style from './Header.module.css';
import {Logo} from "~/components/atoms/Logo";

const Header: React.FunctionComponent = () => (
    <header className={style.header}>
        <Logo link='/'/>
    </header>
);

export {Header};
