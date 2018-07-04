let localContext: Document = document;

export class Get {
    public static setContext(context: Document): void {
        localContext = context;
    }

    public static byClass(className: string, context = localContext): HTMLCollectionOf<Element> {
        return context.getElementsByClassName(className);
    }

    public static byLink(link: string, context = localContext): NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> {
        return context.querySelectorAll("a[attr='" + link + "']");
    }

    public static byId(id: string, context = localContext): HTMLElement | null {
        return context.getElementById(id);
    }

    public static byName(name: string, context = localContext): NodeListOf<HTMLElement> {
        return context.getElementsByName(name);
    }

    public static byTag(tagName: string, context = localContext): NodeListOf<Element> {
        return context.getElementsByTagName(tagName);
    }
}
