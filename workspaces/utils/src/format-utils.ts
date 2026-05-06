/**
 * Formats an elapsed time duration given in milliseconds into a human-readable string.
 * - For durations < 1s, it returns milliseconds with decimal precision.
 * - For durations ≥ 1s, it returns a breakdown like "1d 3h 15m 42s".
 *
 * @param ms - The elapsed time in milliseconds.
 * @returns A human-readable string representing the duration.
 *
 * @example
 * formatElapsed(1234);       // "1s"
 * formatElapsed(9654321);    // "2h 40m 54s"
 */
export function formatElapsed(ms: number): string {
    if (ms < 1000) {
        return ms < 1 ? `${ms.toFixed(2)} ms` : ms < 10 ? `${ms.toFixed(1)} ms` : `${Math.round(ms)} ms`;
    }

    const sec = Math.floor(ms / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    const parts: string[] = [];
    if (days) {
        parts.push(`${days}d`);
    }
    if (hours || parts.length) {
        parts.push(`${hours}h`);
    }
    if (minutes || parts.length) {
        parts.push(`${minutes}m`);
    }
    parts.push(`${seconds}s`);

    return parts.join(" ");
}

const FILE_SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const FILE_SIZE_UNITS_LONG = [
    "Bytes",
    "Kilobytes",
    "Megabytes",
    "Gigabytes",
    "Pettabytes",
    "Exabytes",
    "Zettabytes",
    "Yottabytes",
];
/**
 * Converts a byte size into a human-readable string with appropriate units.
 *
 * @param bytes - The size in bytes.
 * @param decimals - Optional number of decimal places to include (default is 2).
 * @returns A formatted string like "5.67 MB", "1.2 GB", etc.
 *
 * @example
 * formatBytes(1024);           // "1 KB"
 * formatBytes(123456789);      // "117.74 MB"
 */
export function formatBytes(
    bytes: number,
    decimalsOrOptions?:
        | number
        | {
            readonly decimals?: number;
            readonly long?: boolean;
        },
): string {
    const decimals = typeof decimalsOrOptions === "number" ? decimalsOrOptions : (decimalsOrOptions?.decimals ?? 2);
    const long = typeof decimalsOrOptions === "object" ? decimalsOrOptions.long : false;
    const sizes = long ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = bytes / Math.pow(k, i);

    return `${parseFloat(size.toFixed(decimals))} ${sizes[i]}`;
}

const intervals = {
    year: { short: "y", ms: 365 * 24 * 60 * 60 * 1000 },
    month: { short: "mo", ms: 30 * 24 * 60 * 60 * 1000 },
    week: { short: "w", ms: 7 * 24 * 60 * 60 * 1000 },
    day: { short: "d", ms: 24 * 60 * 60 * 1000 },
    hour: { short: "h", ms: 60 * 60 * 1000 },
    minute: { short: "m", ms: 60 * 1000 },
    second: { short: "s", ms: 1000 },
} as const;

const intervalEntries = Object.entries(intervals).map(
    ([label, { short, ms }]) => ({ label, short, ms }),
);

/**
 * Returns a human-readable relative time string for the given date or timestamp.
 * For example: "2 hours ago", "5 minutes ago", "Just now".
 *
 * @param input - A date input (Date object, ISO string, or timestamp).
 * @returns A formatted string indicating how long ago the date was.
 *
 * @example
 * dateAgo(new Date(Date.now() - 90_000)); // "1 minute ago"
 * dateAgo("2022-01-01");                 // "2 years ago"
 */
export function formatDateAgo(input: number | string | Date): string {
    const now = Date.now();
    const then = new Date(input).getTime();

    if (isNaN(then)) {
        return String(input);
    }
    const diffMs = now - then;
    // Handle future dates (optional: adjust wording if needed)
    if (diffMs < 0) {
        return "Just now";
    }

    if (diffMs < 30_000) {
        return "Just now";
    }

    for (const { label, ms } of intervalEntries) {
        if (diffMs >= ms) {
            const count = Math.floor(diffMs / ms);
            if (count > 0) {
                return `${count} ${label}${count > 1 ? "s" : ""} ago`;
            }
        }
    }

    return "Just now"; // fallback
}

/**
 * Formats a date/time value into a human-readable relative string (e.g. "2h ago", "in 5m").
 *
 * Converts absolute times to relative descriptions for the current moment or a custom reference time.
 * Supports past and future times, multiple input types (ISO string, timestamp, Date), and customizable
 * output format (short vs. long labels and custom suffixes/prefixes).
 *
 * @param iso - Date input (ISO 8601 string, millisecond timestamp, or Date object), or null/undefined.
 * @param options - Formatting options.
 *
 * @returns A human-readable relative time string, or `"—"` if input is invalid.
 *
 * @example
 * ```ts
 * import { formatRelative } from "./render-utils.ts";
 *
 * // Relative to current time: "2h ago"
 * formatRelative(new Date(Date.now() - 7_200_000));
 * // → "2h ago" (short format)
 *
 * // Future time: "in 1h"
 * formatRelative(new Date(Date.now() + 3_600_000));
 * // → "in 1h"
 *
 * // Just now for recent changes
 * formatRelative(Date.now() - 2_000);
 * // → "just now"
 * ```
 *
 * @example
 * ```ts
 * import { formatRelative } from "./render-utils.ts";
 *
 * // Long format with full words
 * formatRelative(new Date(Date.now() - 86_400_000), { short: false });
 * // → "1 day ago"
 *
 * // Custom reference time
 * const refTime = new Date("2026-05-06T12:00:00Z").getTime();
 * formatRelative("2026-05-06T10:00:00Z", { now: refTime });
 * // → "2h ago"
 * ```
 */
export function formatRelative(
    iso: string | number | Date | null | undefined,
    options: {
        now?: number; // override current time
        justNowThresholdMs?: number; // default: 5s
        suffixPast?: string; // default: "ago"
        prefixFuture?: string; // default: "in"
        short?: boolean; // short format (e.g. 5m vs 5 min)
    } = {},
): string {
    if (!iso) {
        return "—";
    }

    const {
        now = Date.now(),
        justNowThresholdMs = 5_000,
        suffixPast = "ago",
        prefixFuture = "in",
        short = true,
    } = options;

    const time = new Date(iso).getTime();
    if (Number.isNaN(time)) {
        return "—";
    }

    const diff = now - time;
    const abs = Math.abs(diff);

    const isPast = diff >= 0;

    if (abs < justNowThresholdMs) {
        return "just now";
    }

    for (const unit of intervalEntries) {
        if (abs >= unit.ms) {
            const value = Math.floor(abs / unit.ms);

            if (short) {
                return isPast ? `${value}${unit.short} ${suffixPast}` : `${prefixFuture} ${value}${unit.short}`;
            }

            const plural = value === 1 ? "" : "s";
            const label = `${unit.label}${plural}`;

            return isPast ? `${value} ${label} ${suffixPast}` : `${prefixFuture} ${value} ${label}`;
        }
    }

    return "just now";
}

/**
 * Pretty-print JSON. Returns original string on parse error.
 * @param value
 */
export function formatJson(value: unknown): string {
    try {
        return JSON.stringify(
            typeof value === "string" ? JSON.parse(value) : value,
            null,
            2,
        );
    } catch {
        return String(value);
    }
}
