/**
 * Creates a HTTP redirect response with the specified URL.
 *
 * @param url - The URL to redirect to.
 * @param headers - Optional `Headers` object to include additional headers. Defaults to an empty `Headers` object.
 * @param body - Optional body to include in the response. Defaults to `null`.
 * @returns A `Response` object with a `302` status and the `Location` header set to the specified URL.
 */
export function createRedirectResponse(
    url: string,
    headers: Headers = new Headers(),
    body: unknown = null,
): Response {
    headers.set("location", url);

    return Response.json(body, {
        status: 302,
        headers,
    });
}

/**
 * Creates a HTTP error response with a 500 status code.
 *
 * @param error - The error message to include in the response body.
 * @returns A `Response` object with a `500` status and an error message in the JSON body.
 */
export function createErrorResponse(error: string): Response {
    return Response.json({ error }, { status: 500 });
}

/**
 * Creates a HTTP unauthorized response with a 401 status code.
 *
 * @param error - Optional error message to include in the response body. Defaults to "Unauthorized".
 * @returns A `Response` object with a `401` status and an error message in the JSON body.
 */
export function createUnathorizedResponse(error = "Unauthorized"): Response {
    return Response.json({ error }, { status: 401 });
}

/**
 * Creates a HTTP success response with a `200` status code.
 *
 * @param body - A record containing key-value pairs to include in the response body.
 *               The values can be strings, numbers, or booleans.
 * @returns A `Response` object with a `200` status, `success: true` in the body, and any additional data provided.
 */
export function createSuccessResponse(
    body: Record<string, string | number | boolean>,
): Response {
    return Response.json({ success: true, ...body });
}
