export interface IResp {
    endpoint: string;
    options?: IRespOptions;
}

interface IRespOptions {
    sources?: string;
}

export interface IOptions {
    apiKey: string;
}
