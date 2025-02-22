export function parseBooleanValue(stringValue: unknown): boolean {
    const value = String(stringValue)?.toLowerCase()?.trim();
    switch (value) {
        case "true":
        case "yes":
        case "[yes]":
        case "ano":
        case "áno":
        case "1":
            return true;
        case "false":
        case "[false]":
        case "no":
        case "nie":
        case "":
        case "0":
        case "null":
        case "undefined":
        case null:
        case undefined:
            return false;
        default:
            console.error(`Parsing '${value}'`);

            return Boolean(JSON.parse(value));
    }
}
