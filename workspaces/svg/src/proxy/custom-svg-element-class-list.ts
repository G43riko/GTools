export class CustomSvgElementClassList implements DOMTokenList {
    [index: number]: string;

    private readonly classNames = new Array<string>();

    public get length(): number {
        return this.classNames.length;
    }

    public contains(className: string): boolean {
        return this.classNames.includes(className);
    }

    public set value(value: string) {
        this.classNames.splice(0, this.classNames.length, ...value.split(" "));
    }

    public get value(): string {
        return this.classNames.join(" ");
    }

    public add(...tokens: string[]): void {
        this.classNames.push(...tokens);
    }

    public forEach(
        callbackfn: (value: string, key: number, parent: CustomSvgElementClassList & DOMTokenList) => void,
        thisArg?: unknown,
    ): void {
        this.classNames.forEach((item, index) => callbackfn(item, index, this), thisArg);
    }

    public item(index: number): string | null {
        return this.classNames[index] ?? null;
    }

    public remove(...tokens: string[]): void {
        this.classNames.splice(
            0,
            this.classNames.length,
            ...this.classNames.filter((className) => !tokens.includes(className)),
        );
    }

    public replace(token: string, newToken: string): boolean {
        const index = this.classNames.indexOf(token);
        if (index < 0) {
            return false;
        }
        this.classNames[index] = newToken;
        return true;
    }

    public supports(_token: string): boolean {
        throw new Error("Not implemented");
    }

    public toggle(_token: string, _force?: boolean): boolean {
        return false;
    }
}
