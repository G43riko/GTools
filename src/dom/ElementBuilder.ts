import { StringMap } from "..";

let localContext: Document = document;

export class ElementBuilder {
    private result?: HTMLElement;
    private styles: StringMap                                = {};
    private attributes: StringMap                            = {};
    private readonly contentBuffer: (string | HTMLElement)[] = [];

    private constructor(private elementName: string, private parent?: ElementBuilder) {
    }

    public static setContext(context: Document): void {
        localContext = context;
    }

    public static start(elementName: string): ElementBuilder {
        return new ElementBuilder(elementName);
    }

    public child(elementName: string): ElementBuilder {
        return new ElementBuilder(elementName, this);
    }

    public reset(): ElementBuilder {
        this.styles     = {};
        this.attributes = {};
        delete this.result;

        return this.clearContent();
    }

    public addStyle(key: CSSStyleDeclaration, value: string): ElementBuilder {
        this.styles.key = value;

        return this;
    }

    public addAttribute(key: string, value: string): ElementBuilder {
        this.attributes.key = value;

        return this;
    }

    public content(newContent: string | HTMLElement): ElementBuilder {
        return this.clearContent().addContent(newContent);
    }

    public addContent(newContent: string | HTMLElement): ElementBuilder {
        this.contentBuffer.push(newContent);

        return this;
    }

    public clearContent(): ElementBuilder {
        this.contentBuffer.splice(0, this.contentBuffer.length);

        return this;
    }

    public finish(): ElementBuilder {
        if (!this.parent) {
            throw new Error("Parent must be set");
        }

        return this.parent.addContent(this.build());
    }

    public build(): HTMLElement {
        this.result = localContext.createElement(this.elementName);

        this.contentBuffer.forEach((content) => {
            if (typeof content === "string") {
                (this.result as HTMLElement).innerHTML += content;
            }
            else {
                (this.result as HTMLElement).appendChild(content);
            }
        });

        return this.result;
    }

    public id(id: string): ElementBuilder {
        return this.addAttribute("id", id);
    }

    public clazz(clazz: string): ElementBuilder {
        return this.addAttribute("class", clazz);
    }

    public buildAndAppendTo(parent: HTMLElement): ElementBuilder {
        parent.appendChild(this.build());

        return this;
    }

    public get(): HTMLElement | undefined {
        return this.result;
    }
}

ElementBuilder.start("div").addAttribute("class", "trieda").addAttribute("id", "idecko").build();
ElementBuilder.start("div").clazz("trieda").id("idecko").build();

ElementBuilder.start("table")
              .id("main-table")
              .child("tr").clazz("table-row")
              .child("td").clazz("table-column")
              .content("nazdar")
              .finish()
              .finish()
              .buildAndAppendTo(document.body);
