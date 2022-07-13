import { IArticle } from '../../../types/index';
import './news.css';

class News {
    draw(data: Array<IArticle>): void {
        const news: Array<IArticle> = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        if (newsItemTemp === null) {
            throw new Error('newsitemTemp is null');
        }
        news.forEach((item: IArticle, idx: number) => {
            const newsClone: Node = newsItemTemp.content.cloneNode(true);
            if (idx % 2) {
                const newsItem: Element | null = (<Element>newsClone).querySelector('.news__item');
                if (newsItem !== null) newsItem.classList.add('alt');
            }
            const newsMetaPhoto: HTMLElement | null = (<Element>newsClone).querySelector('.news__meta-photo');
            if (newsMetaPhoto !== null) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            const newsMetaAuthor: Element | null = (<Element>newsClone).querySelector('.news__meta-author');
            if (newsMetaAuthor !== null) newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate: Element | null = (<Element>newsClone).querySelector('.news__meta-date');
            if (newsMetaDate !== null) {
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }
            const newsDescriptionTitle: Element | null = (<Element>newsClone).querySelector('.news__description-title');
            if (newsDescriptionTitle !== null) newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource: Element | null = (<Element>newsClone).querySelector(
                '.news__description-source'
            );
            if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent: Element | null = (<Element>newsClone).querySelector(
                '.news__description-content'
            );
            if (newsDescriptionContent !== null) newsDescriptionContent.textContent = item.description;
            const newsReadMore: Element | null = (<Element>newsClone).querySelector('.news__read-more a');
            if (newsReadMore !== null) newsReadMore.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        const htmlNews: Element | null = document.querySelector('.news');
        if (htmlNews !== null) {
            htmlNews.innerHTML = '';
            htmlNews.appendChild(fragment);
        }
    }
}

export default News;
