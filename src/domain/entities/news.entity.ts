export interface IArticle {
    source: {
        id: string | null,
        name: string
    }
    author: string | null
    title: string
    description: string | null
    url: string
    urlToImage: string | null
    publishedAt: string
    content: string | null
}

export interface IResponseArticles {
    status: string
    totalResults: number
    articles: IArticle[]
}