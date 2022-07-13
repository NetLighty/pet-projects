interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

enum Status {
    ok = 'ok',
    error = 'error',
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
    status: Status;
    sources: Array<ISource>;
}

export interface IArticle {
    source: Pick<ISource, 'id' | 'name'>;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: Status;
    totalResults: number;
    articles: Array<IArticle>;
}

export type Callback<T> = (data: T) => void;

export interface IOptions {
    endpoint: string;
    options?: Record<string, string>;
}
