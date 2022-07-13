import { IArticle } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: Array<IArticle['source']>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp === null) {
            throw new Error('sourceitemTemp is null');
        }

        data.forEach((item): void => {
            const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
            const sourceItemName: Element | null = (<Element>sourceClone).querySelector('.source__item-name');
            if (sourceItemName !== null) sourceItemName.textContent = item.name;
            const sourceItem: Element | null = (<Element>sourceClone).querySelector('.source__item');
            if (sourceItem !== null) sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        const sources: Element | null = document.querySelector('.sources');
        if (sources === null) {
            throw new Error('sources is null');
        }
        sources.append(fragment);
    }
}

export default Sources;
