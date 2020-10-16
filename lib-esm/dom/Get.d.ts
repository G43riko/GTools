export declare class Get {
    /**
     *
     * @param context document context
     */
    static setContext(context: Document): void;
    /**
     *
     * @param className name of class
     * @param context searched context
     * @returns collection of found elements
     */
    static byClass(className: string, context?: Document): HTMLCollectionOf<Element>;
    /**
     *
     * @param link name of link
     * @param context searched context
     * @returns nodeList of found elements
     */
    static byLink(link: string, context?: Document): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>;
    /**
     *
     * @param id searched ID
     * @param context searched context
     * @returns found element or null
     */
    static byId(id: string, context?: Document): HTMLElement | null;
    /**
     *
     * @param name elements name
     * @param context searched context
     * @returns nodeList of found elements
     */
    static byName(name: string, context?: Document): NodeListOf<HTMLElement>;
    /**
     *
     * @param tagName elements tagName
     * @param context searched context
     * @returns nodeList of found elements
     */
    static byTag(tagName: string, context?: Document): NodeListOf<Element>;
}
