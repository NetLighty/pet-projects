import { Options } from 'webpack';
import { Callback } from '../../types/index';
import { IOptions, IResp } from './loader.types';

class Loader {
    baseLink: string;
    options: IOptions;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: IResp,
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IResp['options'], endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: Callback<T>, options: IResp['options']): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
