export class Arrow {
    private static arrowClickListener(): void {
        const arrow = document.querySelector('.source__arrow');
        const sources = document.querySelector('.sources');
        if (arrow && sources) {
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
