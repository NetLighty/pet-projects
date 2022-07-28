export class Arrow {
    private static arrowClickListener(): void {
        const arrow = document.querySelector('.source__arrow');
        const sources = document.querySelector('.sources');
        if (arrow && sources) {
            if (arrow.classList.contains('up')) {
                this.downArrow(arrow);
                this.closeSources(sources);
            } else {
                this.upArrow(arrow);
                this.openSources(sources);
            }
        }
    }

    private static upArrow(arrow: Element) {
        arrow.classList.remove('down');
        arrow.classList.add('up');
    }
    private static openSources(sources: Element) {
        sources.classList.add('opened');
        sources.classList.remove('closed');
    }

    private static downArrow(arrow: Element) {
        arrow.classList.remove('up');
        arrow.classList.add('down');
    }

    private static closeSources(sources: Element) {
        sources.classList.add('closed');
        sources.classList.remove('opened');
    }

    public static createArrow(): void {
        const arrow = document.createElement('img');
        const sources = document.querySelector('.sources');
        arrow.className = 'source__arrow';
        arrow.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/875/875617.png');
        arrow.addEventListener('click', this.arrowClickListener);
        if (document.querySelector('.source__arrow') === null) {
            sources?.after(arrow);
        }
    }
}

export default Arrow;
