export interface ElementAttributes {
    className?: string;
    children?: (Node | string)[] | Node | string;
    type?: string;
    onChange?: (value: any) => void;
    onClick?: (value: any) => void;
    onInput?: (value: string) => void;
    styles?: {
        [style in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[style];
    };
    content?: string;
    value?: string;
    src?: string;
    for?: string;
    id?: string;
    autoplay?: boolean;
    href?: string;
    download?: string;
    checked?: boolean;
    width?: number;
    height?: number;
}
export declare function elementToString(element: HTMLElement): string;
export declare function dragElement(element: HTMLElement, headerSelector?: string): {
    clear: () => void;
};
export declare function CreateImage(options?: ElementAttributes): HTMLElementTagNameMap["img"];
export declare function createCheckbox(label: string, onChange: (checked: boolean) => void, checked?: boolean): HTMLLabelElement;
export declare function CreateElement<K extends keyof HTMLElementTagNameMap>(type: K, options?: ElementAttributes): HTMLElementTagNameMap[K];
/**
 * TODO: element remains after deletion onMessage screen
 */
export declare function chooseColorUsingDefaultInput(color?: string, onInput?: (value: string) => void): Promise<string>;
export declare function getOrCreate<K extends keyof HTMLElementTagNameMap>(parent: HTMLElement, type: K, ...classes: string[]): HTMLElementTagNameMap[K];
export declare function getOrCreateAndAppend<K extends keyof HTMLElementTagNameMap>(parent: HTMLElement, type: K, ...classes: string[]): HTMLElementTagNameMap[K];
//# sourceMappingURL=html-utils.d.ts.map