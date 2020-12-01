function getText(text) {
    return text ? `: ${text}` : "";
}
export class NotBrowserException extends Error {
    constructor(text) {
        super(`App is not running in browser${getText(text)}!`);
        Object.setPrototypeOf(this, NotBrowserException.prototype);
    }
}
//# sourceMappingURL=not-browser.exception.js.map