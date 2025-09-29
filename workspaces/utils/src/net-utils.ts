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
    readonly errorLogger?: (...params: unknown[]) => void;
    readonly headers?: HeadersInit;
}

export async function ping(
    url: string,
    {
        silent = true,
        errorLogger = console.error.bind(console),
        methods = ["GET"],
        timeout = DEFAULT_PING_TIMEOUT_MS,
        headers = undefined,
    }: PingParams = {},
): Promise<PingResult> {
    const date = new Date();
    const startedAt = date.getTime();

    if (!methods || methods.length === 0) {
        return {
            date: date.toISOString(),
            duration: Date.now() - startedAt,
            status: false,
            error: "No HTTP methods provided",
        };
    }

    const controller = new AbortController();
    const signal = controller.signal;
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
        const attempts = methods.map((method) =>
            fetch(url, { method, signal, headers }).then((res) => {
                if (res.ok) {
                    return res;
                }
                // reject with an Error — don't use raw strings
                return Promise.reject(new Error(`HTTP ${res.status}`));
            })
        );
        const response = await Promise.any(attempts).finally(() => {
            clearTimeout(timer);
        });

        return {
            date: date.toISOString(),
            duration: Date.now() - date.getTime(),
            status: response.ok,
        };
    } catch (rawError: any) {
        // normalize error message (works if rawError is Error, string, AggregateError, etc.)
        let message: string | undefined;
        if (typeof rawError === "string") {
            message = rawError;
        } else if (rawError instanceof AggregateError && Array.isArray((rawError as any).errors)) {
            // combine inner errors' messages (best-effort)
            const parts = (rawError as any).errors.map((e: any) => typeof e === "string" ? e : e?.message ?? String(e))
                .filter(Boolean);
            message = parts.length ? parts.join("; ") : rawError.message;
        } else {
            message = rawError?.message ?? String(rawError);
        }

        const timedOut = !!signal.aborted;
        if (timedOut) {
            message = "Request timed out";
        }
        if (!silent) {
            if (timedOut) {
                errorLogger(`ping (${url}): Request timed out`);
            } else {
                errorLogger(`ping (${url}): Request failed`, rawError);
            }
        }

        return {
            date: date.toISOString(),
            duration: Date.now() - date.getTime(),
            status: false,
            error: message,
        };
    }
}
