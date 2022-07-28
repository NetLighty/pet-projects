export interface CustomEvent extends Event {
    target: Element | null;
    currentTarget: Element | null;
}
