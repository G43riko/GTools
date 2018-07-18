export declare class ElementBuilder {
    private elementName;
    private parent?;
    private result?;
    private styles;
    private attributes;
    private readonly contentBuffer;
    private constructor();
    static setContext(context: Document): void;
    static start(elementName: string): ElementBuilder;
    child(elementName: string): ElementBuilder;
    reset(): ElementBuilder;
    addStyle(key: CSSStyleDeclaration, value: string): ElementBuilder;
    addAttribute(key: string, value: string): ElementBuilder;
    content(newContent: string | HTMLElement): ElementBuilder;
    addContent(newContent: string | HTMLElement): ElementBuilder;
    clearContent(): ElementBuilder;
    finish(): ElementBuilder;
    build(): HTMLElement;
    id(id: string): ElementBuilder;
    clazz(clazz: string): ElementBuilder;
    buildAndAppendTo(parent: HTMLElement): ElementBuilder;
    get(): HTMLElement | undefined;
}