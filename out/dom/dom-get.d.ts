export declare class DomGet {
    static setContext(context: Document): void;
    static byClass(className: string, context?: Document): HTMLCollectionOf<Element>;
    static byLink(link: string, context?: Document): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>;
    static byId(id: string, context?: Document): HTMLElement | null;
    static byName(name: string, context?: Document): NodeListOf<HTMLElement>;
    static byTag(tagName: string, context?: Document): NodeListOf<Element>;
}
