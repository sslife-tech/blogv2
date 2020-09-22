import React from "react";
import style from './Header.module.css';
import {Logo} from "~/components/atoms/Logo";

const Header: React.FunctionComponent = () => (
    <header className={style.header}>
        <nav className={style.nav}>
            <Logo link='/'/>
        </nav>
    </header>
);

export {Header};
