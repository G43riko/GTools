let localContext: Document = document;

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
    public static byClass(className: string, context: Document = localContext): HTMLCollectionOf<Element> {
        return context.getElementsByClassName(className);
    }

    /**
     *
     * @param {string} link
     * @param {Document} context
     * @returns {NodeListOf}
     */
    public static byLink(link: string, context: Document = localContext): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> {
        return context.querySelectorAll("a[attr='" + link + "']");
    }

    /**
     *
     * @param {string} id
     * @param {Document} context
     * @returns {HTMLElement | null}
     */
    public static byId(id: string, context: Document = localContext): HTMLElement | null {
        return context.getElementById(id);
    }

    /**
     *
     * @param {string} name
     * @param {Document} context
     * @returns {NodeListOf<HTMLElement>}
     */
    public static byName(name: string, context: Document = localContext): NodeListOf<HTMLElement> {
        return context.getElementsByName(name);
    }

    /**
     *
     * @param {string} tagName
     * @param {Document} context
     * @returns {NodeListOf<Element>}
     */
    public static byTag(tagName: string, context: Document = localContext): NodeListOf<Element> {
        return context.getElementsByTagName(tagName);
    }
}
