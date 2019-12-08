// TODO: need to be checked if app is running in browser

let localContext: Document | null = typeof document !== "undefined" ? document : null;

export class Get {
    /**
     *
     * @param context document context
     */
    public static setContext(context: Document): void {
        localContext = context;
    }

    /**
     *
     * @param className name of class
     * @param context searched context
     * @returns collection of found elements
     */
    public static byClass(className: string, context: Document = localContext as Document): HTMLCollectionOf<Element> {
        return context.getElementsByClassName(className);
    }

    /**
     *
     * @param link name of link
     * @param context searched context
     * @returns nodeList of found elements
     */
    public static byLink(link: string, context: Document = localContext as Document): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> {
        return context.querySelectorAll(`a[attr="${link}"]`);
    }

    /**
     *
     * @param id searched ID
     * @param context searched context
     * @returns found element or null
     */
    public static byId(id: string, context: Document = localContext as Document): HTMLElement | null {
        return context.getElementById(id);
    }

    /**
     *
     * @param name elements name
     * @param context searched context
     * @returns nodeList of found elements
     */
    public static byName(name: string, context: Document = localContext as Document): NodeListOf<HTMLElement> {
        return context.getElementsByName(name);
    }

    /**
     *
     * @param tagName elements tagName
     * @param context searched context
     * @returns nodeList of found elements
     */
    public static byTag(tagName: string, context: Document = localContext as Document): NodeListOf<Element> {
        return context.getElementsByTagName(tagName) as any;
    }
}
