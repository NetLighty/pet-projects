import { Callback } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: Callback<T>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: Callback<T>): void {
        let target = e.target as Element | null;
        const newsContainer = e.currentTarget as Element | null;
        while (target !== newsContainer) {
            if (target?.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target?.parentNode as Element | null;
        }
    }
}

export default AppController;
