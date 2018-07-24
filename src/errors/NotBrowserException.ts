export class NotBrowserException extends Error {
    public constructor(text?: string) {
        super("App is not running in browser" + (text ? ": " + text : "") + "!");

        Object.setPrototypeOf(this, NotBrowserException.prototype);
    }
}
