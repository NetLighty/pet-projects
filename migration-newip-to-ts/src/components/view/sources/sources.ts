import { IArticle } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: Array<IArticle['source']>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item): void => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as Node;
            const sourceItemName: Element | null = (<Element>sourceClone).querySelector('.source__item-name');
            if (sourceItemName) sourceItemName.textContent = item.name;
            const sourceItem: Element | null = (<Element>sourceClone).querySelector('.source__item');
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        const sources: Element | null = document.querySelector('.sources');
        sources?.append(fragment);
    }
}

export default Sources;
