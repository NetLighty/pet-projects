import { INews, ISources } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources: Element | null = document.querySelector('.sources');
        if (sources === null) throw new Error('sources is null');
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data: INews) => this.view.drawNews(data)));
        this.controller.getSources((data: ISources) => this.view.drawSources(data));
    }
}

export default App;
