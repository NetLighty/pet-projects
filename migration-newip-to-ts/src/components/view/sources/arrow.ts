export class Arrow {
    static arrowClickListener(): void {
        const arrow: Element | null = document.querySelector('.source__arrow');
        const sources: Element | null = document.querySelector('.sources');
        if (arrow === null || sources === null) throw new Error(`Arrow or sources or both doesn't exist`);
        if (arrow.classList.contains('up')) {
            arrow.classList.remove('up');
            arrow.classList.add('down');
            sources.classList.add('closed');
            sources.classList.remove('opened');
        } else {
            arrow.classList.remove('down');
            arrow.classList.add('up');
            sources.classList.add('opened');
            sources.classList.remove('closed');
        }
    }

    static createArrow(): void {
        const arrow: Element = document.createElement('img');
        const sources: Element | null = document.querySelector('.sources');
        if (sources === null) throw new Error('sources is null');
        arrow.className = 'source__arrow';
        arrow.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/875/875617.png');
        arrow.addEventListener('click', this.arrowClickListener);
        if (document.querySelector('.source__arrow') === null) sources.after(arrow);
    }
}

export default Arrow;
