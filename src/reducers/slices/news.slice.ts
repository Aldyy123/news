import { IArticle } from "@/domain/entities/news.entity";
import { atom, selector } from "recoil";

const articleState = atom({
    key: 'articleState',
    default: null as null | IArticle
});

const getArticle = selector({
    key: 'getArticle',
    get: ({ get }) => {
        const article = get(articleState);

        return article
    },
});

export {
    articleState,
    getArticle
}