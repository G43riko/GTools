"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localContext = document;
var ElementBuilder = /** @class */ (function () {
    function ElementBuilder(elementName, parent) {
        this.elementName = elementName;
        this.parent = parent;
        this.styles = {};
        this.attributes = {};
        this.contentBuffer = [];
    }
    ElementBuilder.setContext = function (context) {
        localContext = context;
    };
    ElementBuilder.start = function (elementName) {
        return new ElementBuilder(elementName);
    };
    ElementBuilder.prototype.child = function (elementName) {
        return new ElementBuilder(elementName, this);
    };
    ElementBuilder.prototype.reset = function () {
        this.styles = {};
        this.attributes = {};
        delete this.result;
        return this.clearContent();
    };
    ElementBuilder.prototype.addStyle = function (key, value) {
        this.styles.key = value;
        return this;
    };
    ElementBuilder.prototype.addAttribute = function (key, value) {
        this.attributes.key = value;
        return this;
    };
    ElementBuilder.prototype.content = function (newContent) {
        return this.clearContent().addContent(newContent);
    };
    ElementBuilder.prototype.addContent = function (newContent) {
        this.contentBuffer.push(newContent);
        return this;
    };
    ElementBuilder.prototype.clearContent = function () {
        this.contentBuffer.splice(0, this.contentBuffer.length);
        return this;
    };
    ElementBuilder.prototype.finish = function () {
        if (!this.parent) {
            throw new Error("Parent must be set");
        }
        return this.parent.addContent(this.build());
    };
    ElementBuilder.prototype.build = function () {
        var _this = this;
        this.result = localContext.createElement(this.elementName);
        this.contentBuffer.forEach(function (content) {
            if (typeof content === "string") {
                _this.result.innerHTML += content;
            }
            else {
                _this.result.appendChild(content);
            }
        });
        return this.result;
    };
    ElementBuilder.prototype.id = function (id) {
        return this.addAttribute("id", id);
    };
    ElementBuilder.prototype.clazz = function (clazz) {
        return this.addAttribute("class", clazz);
    };
    ElementBuilder.prototype.buildAndAppendTo = function (parent) {
        parent.appendChild(this.build());
        return this;
    };
    ElementBuilder.prototype.get = function () {
        return this.result;
    };
    return ElementBuilder;
}());
exports.ElementBuilder = ElementBuilder;
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
