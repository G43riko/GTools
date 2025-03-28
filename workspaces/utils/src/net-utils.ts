const DEFAULT_PING_TIMEOUT_MS = 1000;

export interface PingResult {
    readonly status: boolean;
    readonly date: string;
    readonly error?: string;
    /**
     * Duration in ms
     */
    readonly duration: number;
}
export interface PingParams {
    /**
     * Timeout in ms
     */
    readonly timeout?: number;
    readonly headers?: HeadersInit;
}

export async function ping(
    url: string,
    { timeout = DEFAULT_PING_TIMEOUT_MS, headers = undefined }: PingParams = {},
): Promise<PingResult> {
    const date = new Date();
    try {
        const controller = new AbortController();
        const signal = controller.signal;
        const timer = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, { method: "HEAD", signal, headers });
        clearTimeout(timer);

        return {
            date: date.toISOString(),
            duration: Date.now() - date.getTime(),
            status: response.ok,
        };
    } catch (error: any) {
        if (error.name === "AbortError") {
            console.error("Request timed out");
        } else {
            console.error("Request failed:", error);
        }
        return {
            date: date.toISOString(),
            duration: Date.now() - date.getTime(),
            status: false,
            error: error.name === "AbortError" ? "Request timed out" : error.message,
        };
    }
}
