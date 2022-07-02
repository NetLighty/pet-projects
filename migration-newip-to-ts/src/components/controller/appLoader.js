import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '87145b3f55db4c2282601a3d1e53cc5f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
