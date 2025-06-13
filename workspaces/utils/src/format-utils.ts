export function formatElapsed(ms: number): string {
    const sec = Math.floor(ms / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    const parts: string[] = [];
    if (days) parts.push(`${days}d`);
    if (hours || parts.length) parts.push(`${hours}h`);
    if (minutes || parts.length) parts.push(`${minutes}m`);
    parts.push(`${seconds}s`);

    return parts.join(" ");
}
export function formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) {
        return "0 B";
    };

    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = bytes / Math.pow(k, i);

    return `${parseFloat(size.toFixed(decimals))} ${sizes[i]}`;
}