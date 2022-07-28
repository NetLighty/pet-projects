import { IArticle } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: Array<IArticle['source']>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as Element;
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }
            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources');
        sources?.append(fragment);
    }
}

export default Sources;
