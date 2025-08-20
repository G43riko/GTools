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
        parts.push(`${days}d`)
    };
    if (hours || parts.length) {
        parts.push(`${hours}h`)
    };
    if (minutes || parts.length) {
        parts.push(`${minutes}m`)
    };
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
    decimalsOrOptions?: number | {
        readonly decimals?: number;
        readonly long?: boolean;
    },
): string {
    const decimals = typeof decimalsOrOptions === "number" ? decimalsOrOptions : decimalsOrOptions?.decimals ?? 2;
    const long = typeof decimalsOrOptions === "object" ? decimalsOrOptions.long : false;
    const sizes = long ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
    if (bytes === 0) {
        return `0 ${sizes[0]}B`;
    }

    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = bytes / Math.pow(k, i);

    return `${parseFloat(size.toFixed(decimals))} ${sizes[i]}`;
}

const intervals = {
    "year": 31536000,
    "month": 2592000,
    "week": 604800,
    "day": 86400,
    "hour": 3600,
    "minute": 60,
    "second": 1,
} as const;

type IntervalKey = keyof typeof intervals;

const intervalEntries = Object.entries(intervals) as [IntervalKey, number][];

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

    const seconds = Math.floor((now - then) / 1000);
    if (seconds < 30) {
        return "Just now";
    }

    for (const [unit, sec] of intervalEntries) {
        const count = Math.floor(seconds / sec);
        if (count > 0) {
            return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
        }
    }

    return "Just now"; // fallback
}
