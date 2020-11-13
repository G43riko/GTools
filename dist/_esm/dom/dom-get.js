let localContext = typeof document !== "undefined" ? document : null;
export class DomGet {
    static setContext(context) {
        localContext = context;
    }
    static byClass(className, context = localContext) {
        return context.getElementsByClassName(className);
    }
    static byLink(link, context = localContext) {
        return context.querySelectorAll(`a[attr="${link}"]`);
    }
    static byId(id, context = localContext) {
        return context.getElementById(id);
    }
    static byName(name, context = localContext) {
        return context.getElementsByName(name);
    }
    static byTag(tagName, context = localContext) {
        return context.getElementsByTagName(tagName);
    }
}
//# sourceMappingURL=dom-get.js.map