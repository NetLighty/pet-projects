interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface ISources {
    status: string;
    sources: Array<ISource>;
}

export interface IArticleSource {
    id: string;
    name: string;
}

export interface IArticle {
    source: IArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string;
    totalResults: number;
    articles: Array<IArticle>;
}
