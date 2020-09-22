import React from "react";
import {Header} from "~/components/organisms/Header";

type Props = {
    children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<Props> = ({children}: Props) => (
    <>
        <Header/>
        {children}
        <footer style={{textAlign: 'center', padding: '12px 0', marginTop: '120px'}}>
            <p>
                &copy; SSLife Tech
            </p>
        </footer>
    </>
);

export {DefaultLayout};
