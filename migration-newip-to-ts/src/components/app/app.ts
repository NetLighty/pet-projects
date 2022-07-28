import { INews, ISources } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Arrow } from '../view/arrow/arrow';
import { CustomEvent } from '../controller/controller.types';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources: Element | null = document.querySelector('.sources');
        sources?.addEventListener('click', (e) =>
            this.controller.getNews(<CustomEvent>e, (data: INews) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ISources) => this.view.drawSources(data));
        Arrow.createArrow();
    }
}

export default App;
