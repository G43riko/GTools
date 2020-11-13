let localContext = document;
export class ElementBuilder {
    constructor(elementName, parent) {
        this.elementName = elementName;
        this.parent = parent;
        this.styles = {};
        this.attributes = {};
        this.contentBuffer = [];
    }
    static setContext(context) {
        localContext = context;
    }
    static start(elementName) {
        return new ElementBuilder(elementName);
    }
    child(elementName) {
        return new ElementBuilder(elementName, this);
    }
    reset() {
        this.styles = {};
        this.attributes = {};
        delete this.result;
        return this.clearContent();
    }
    style(key, value) {
        this.styles.key = value;
        return this;
    }
    attribute(key, value) {
        this.attributes.key = value;
        return this;
    }
    content(newContent) {
        return this.clearContent().addContent(newContent);
    }
    addContent(newContent) {
        this.contentBuffer.push(newContent);
        return this;
    }
    clearContent() {
        this.contentBuffer.splice(0, this.contentBuffer.length);
        return this;
    }
    finish() {
        if (!this.parent) {
            throw new Error("Parent must be set");
        }
        return this.parent.addContent(this.build());
    }
    build() {
        this.result = localContext.createElement(this.elementName);
        this.contentBuffer.forEach((content) => {
            if (typeof content === "string") {
                this.result.innerHTML += content;
            }
            else {
                this.result.appendChild(content);
            }
        });
        return this.result;
    }
    id(id) {
        return this.attribute("id", id);
    }
    clazz(clazz) {
        return this.attribute("class", clazz);
    }
    buildAndAppendTo(parent) {
        parent.appendChild(this.build());
        return this;
    }
    get() {
        return this.result;
    }
}
ElementBuilder.start("div").attribute("class", "main-class").attribute("id", "main-id").build();
ElementBuilder.start("div").clazz("main-class").id("main-id").build();
ElementBuilder.start("table")
    .id("main-table")
    .child("tr").clazz("table-row")
    .child("td").clazz("table-column")
    .content("hello world")
    .finish()
    .finish()
    .buildAndAppendTo(document.body);
//# sourceMappingURL=element-builder.js.map