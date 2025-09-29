import { afterEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { ping } from "./net-utils.ts";

describe("NetUtils", () => {
    describe("ping function", () => {
        const mockFetch = (status = 200, delay = 0, ok = true) => {
            globalThis.fetch = (_url, options) =>
                new Promise((resolve, reject) => {
                    const controller = options?.signal;
                    const timeoutId = setTimeout(() => {
                        if (controller?.aborted) {
                            reject(new DOMException("Request timed out", "AbortError"));
                        } else {
                            resolve({
                                ok,
                                status,
                                headers: new Headers(),
                            } as any);
                        }
                    }, delay);

                    if (controller) {
                        controller.addEventListener("abort", () => {
                            clearTimeout(timeoutId);
                            reject(new DOMException("Request timed out", "AbortError"));
                        });
                    }
                });
        };

        const restoreFetch = () => {
            globalThis.fetch = fetch;
        };

        const mockPingResult = ({ status, duration, error = undefined }: any) => {
            return {
                date: expect.any(String),
                duration,
                status,
                ...(error ? { error } : {}),
            };
        };

        afterEach(() => {
            restoreFetch();
        });

        it("should return success when the request succeeds", async () => {
            mockFetch(200, 50, true);
            const result = await ping("https://example.com");
            expect(result).toEqual(mockPingResult({ status: true, duration: expect.any(Number) }));
        });

        it("should return failure when the request fails", async () => {
            mockFetch(500, 50, false);
            const result = await ping("https://example.com");
            expect(result).toEqual(mockPingResult({ status: false, error: "HTTP 500", duration: expect.any(Number) }));
        });

        it("should timeout if the request takes too long", async () => {
            mockFetch(200, 2000, true);
            const result = await ping("https://example.com", { timeout: 100 });
            expect(result).toEqual(
                mockPingResult({ status: false, duration: expect.any(Number), error: "Request timed out" }),
            );
        });
    });
});
