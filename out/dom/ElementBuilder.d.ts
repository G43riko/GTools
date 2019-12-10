export declare class ElementBuilder {
    private readonly elementName;
    private readonly parent?;
    private result?;
    private styles;
    private attributes;
    private readonly contentBuffer;

    private constructor();

    static setContext(context: Document): void;

    static start(elementName: string): ElementBuilder;

    child(elementName: string): ElementBuilder;

    reset(): ElementBuilder;

    style(key: CSSStyleDeclaration, value: string): ElementBuilder;

    attribute(key: string, value: string): ElementBuilder;

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
