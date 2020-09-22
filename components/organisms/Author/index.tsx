import React from "react";
import {Author} from "~/components/organisms/Author/Author";


const authors = {
    shota: <Author
        name='しょうちゃん'
        image='/images/shota.jpg'
        bio='GoとTypeScriptが好きなエンジニア。年々アメリカ被れが重症化している。'
    />,
    shiori: <Author
        name='しおりん'
        image='/images/shiori.jpg'
        bio='Kotlinがんばるまん'
    />
};

const getAuthor = (name: string): JSX.Element => authors[name];

export {
    getAuthor,
};
