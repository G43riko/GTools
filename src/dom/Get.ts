// TODO: need to be checked if app is running in browser

let localContext: Document | null = typeof document !== "undefined" ? document : null;

export class Get {
    /**
     *
     * @param {Document} context
     */
    public static setContext(context: Document): void {
        localContext = context;
    }

    /**
     *
     * @param {string} className
     * @param {Document} context
     * @returns {HTMLCollectionOf<Element>}
     */
    public static byClass(className: string, context: Document = localContext as Document): HTMLCollectionOf<Element> {
        return context.getElementsByClassName(className);
    }

    /**
     *
     * @param {string} link
     * @param {Document} context
     * @returns {NodeListOf}
     */
    public static byLink(link: string, context: Document = localContext as Document): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> {
        return context.querySelectorAll(`a[attr="${link}"]`);
    }

    /**
     *
     * @param {string} id
     * @param {Document} context
     * @returns {HTMLElement | null}
     */
    public static byId(id: string, context: Document = localContext as Document): HTMLElement | null {
        return context.getElementById(id);
    }

    /**
     *
     * @param {string} name
     * @param {Document} context
     * @returns {NodeListOf<HTMLElement>}
     */
    public static byName(name: string, context: Document = localContext as Document): NodeListOf<HTMLElement> {
        return context.getElementsByName(name);
    }

    /**
     *
     * @param {string} tagName
     * @param {Document} context
     * @returns {NodeListOf<Element>}
     */
    public static byTag(tagName: string, context: Document = localContext as Document): NodeListOf<Element> {
        return context.getElementsByTagName(tagName);
    }
}
