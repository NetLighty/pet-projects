import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '87145b3f55db4c2282601a3d1e53cc5f',
        });
    }
}

export default AppLoader;
