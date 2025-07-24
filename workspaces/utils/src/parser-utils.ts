import { DurationUnit } from "@g43/enums";
import { convertDuration } from "@g43/utils";

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

export function parseDuration(input: string | number, outputUnit = DurationUnit.MS): number {
    if (typeof input === "number") return input;

    const pattern = /(\d+)\s*(d|h|m(?!s)|s|ms)/gi;
    let match: RegExpExecArray | null;
    let totalMs = 0;

    while ((match = pattern.exec(input))) {
        const value = Number(match[1]);
        const unit = match[2].toLowerCase();

        switch (unit) {
            case "d":
                totalMs += value * 86400000;
                break;
            case "h":
                totalMs += value * 3600000;
                break;
            case "m":
                totalMs += value * 60000;
                break;
            case "s":
                totalMs += value * 1000;
                break;
            case "ms":
                totalMs += value;
                break;
        }
    }

    return convertDuration(totalMs, DurationUnit.MS, outputUnit);
}

/**
 * @param input
 * @returns size in bytes
 */
export function parseSize(input: string): number {
    const units: Record<string, number> = {
        b: 1,
        kb: 1e3,
        mb: 1e6,
        gb: 1e9,
        tb: 1e12,
        pb: 1e15,

        kib: 1024,
        mib: 1024 ** 2,
        gib: 1024 ** 3,
        tib: 1024 ** 4,
        pib: 1024 ** 5,
    };

    const match = input.trim().toLowerCase().match(
        /^([\d.]+)\s*(b|kib|kb|mib|mb|gib|gb|tib|tb|pib|pb)?$/,
    );

    if (!match) {
        throw new Error(`Invalid string: "${input}"`);
    }

    const value = parseFloat(match[1]);
    const unit = match[2] || "b";

    const multiplier = units[unit];
    if (!multiplier) {
        throw new Error(`Unknown unit "${unit}"`);
    }

    return Math.round(value * multiplier);
}
