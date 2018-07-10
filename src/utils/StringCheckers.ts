const timeFormats: { [key: string]: string } = {
    HH: "(2[0-3]|[01]\\d)",
    H: "(2[0-3]|[01]?\\d)",
    mm: "([0-5]\\d|60)",
    m: "([0-5]?\\d)",
    MM: "([0-5]\\d|60)",
    M: "(0\\d|1[0-2]|\\d)",
    ss: "([0-5]\\d|60)", // mm
    s: "([0-5]?\\d)", // ss
    YYYY: "([1-9]\\d{3,3})",
    YY: "(\\d{2,2})",
    DD: "([0-3]\\d)",
};

export class StringCheckers {
    public static isCamelCase(text: string): boolean {
        return new RegExp("^[A-Z]?[a-z]+([A-Z][a-z]*)*$", "g").test(text);
    }

    public static isUpperCamelCase(text: string): boolean {
        return new RegExp("^([A-Z][a-z]*)*$", "g").test(text);
    }

    public static isLowerCamelCase(text: string): boolean {
        return new RegExp("^[a-z]+([A-Z][a-z]*)*$", "g").test(text);
    }

    public static isLowerSnakeCase(text: string): boolean {
        return new RegExp("^[a-z]*(_[a-z]*)*$", "g").test(text);
    }

    public static isUpperSnakeCase(text: string): boolean {
        return new RegExp("^[A-Z]*(_[A-Z]*)*$", "g").test(text);
    }

    public static isSnakeCase(text: string): boolean {
        return new RegExp("^([a-z]*|[A-Z]*)(_[a-zA-Z]*)*$", "g").test(text);
    }

    public static isTimeFormat(text: string, format: string): boolean {
        for (const key in timeFormats) {
            if (timeFormats.hasOwnProperty(key)) {
                format = format.replace(key, timeFormats[key]);
            }
        }

        return new RegExp(`^${format}$`).test(text);
    }

    public static isHHmm(text: string, divider = ":"): boolean {
        return StringCheckers.isTimeFormat(text, `HH${divider}mm`);
    }

    public static isHHmmss(text: string, divider = ":"): boolean {
        return StringCheckers.isTimeFormat(text, `HH${divider}mm${divider}ss`);
    }
}
