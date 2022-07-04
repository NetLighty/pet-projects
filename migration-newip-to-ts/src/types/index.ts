interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IHeadlines {
    apiKey: string;
    country: string;
    category: string;
    sources: string;
    q: string;
    pageSize: number;
    page: number;
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

export type Callback<T> = (data: T) => void;

export interface IOptions {
    endpoint: string;
    options?: Record<string, string>;
}
