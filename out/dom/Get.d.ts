export declare class Get {
    /**
     *
     * @param {Document} context
     */
    static setContext(context: Document): void;
    /**
     *
     * @param {string} className
     * @param {Document} context
     * @returns {HTMLCollectionOf<Element>}
     */
    static byClass(className: string, context?: Document): HTMLCollectionOf<Element>;
    /**
     *
     * @param {string} link
     * @param {Document} context
     * @returns {NodeListOf}
     */
    static byLink(link: string, context?: Document): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>;
    /**
     *
     * @param {string} id
     * @param {Document} context
     * @returns {HTMLElement | null}
     */
    static byId(id: string, context?: Document): HTMLElement | null;
    /**
     *
     * @param {string} name
     * @param {Document} context
     * @returns {NodeListOf<HTMLElement>}
     */
    static byName(name: string, context?: Document): NodeListOf<HTMLElement>;
    /**
     *
     * @param {string} tagName
     * @param {Document} context
     * @returns {NodeListOf<Element>}
     */
    static byTag(tagName: string, context?: Document): NodeListOf<Element>;
}
