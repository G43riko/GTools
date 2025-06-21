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
    readonly methods?: readonly ("GET" | "POST" | "HEAD" | "OPTIONS")[];
    readonly silent?: boolean;
    readonly headers?: HeadersInit;
}

export async function ping(
    url: string,
    { silent, methods = ["GET"], timeout = DEFAULT_PING_TIMEOUT_MS, headers = undefined }: PingParams = {},
): Promise<PingResult> {
    const date = new Date();
    try {
        const controller = new AbortController();
        const signal = controller.signal;
        const timer = setTimeout(() => controller.abort(), timeout);

        const response = await Promise.any(
            methods.map(
                (method) =>
                    fetch(url, { method, signal, headers }).then((e) => e.ok ? e : Promise.reject("Invalid response")),
            ),
        );
        clearTimeout(timer);

        return {
            date: date.toISOString(),
            duration: Date.now() - date.getTime(),
            status: response.ok,
        };
    } catch (error: any) {
        if (!silent) {
            if (error.name === "AbortError") {
                console.error(`ping (${url}): Request timed out`);
            } else {
                console.error(`ping (${url}): Request failed`, error);
            }
        }

        return {
            date: date.toISOString(),
            duration: Date.now() - date.getTime(),
            status: false,
            error: error.name === "AbortError" ? "Request timed out" : error.message,
        };
    }
}
