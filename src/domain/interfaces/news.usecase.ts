import { IResponseArticles } from "../entities/news.entity";

export interface INewsUseCase {
    getNews(): Promise<IResponseArticles>
}