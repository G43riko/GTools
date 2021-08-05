import { createWriteStream, PathLike, readFile } from "fs";
import { get as HttpGet, IncomingMessage, request as HttpRequest } from "http";
import { request as HttpsRequest } from "https";

export function serverDownloadFile(url: string, fileName: string): void {
    const file = createWriteStream(fileName);
    HttpGet(url, (response) => response.pipe(file));
}

export function getPublicIp(): Promise<string> {
    const options = {
        host: "ipv4bot.whatismyipaddress.com",
        port: 80,
        path: "/",
    };

    return new Promise((success, reject) => {
        HttpGet(options, (res) => {
            res.on("data", (chunk) => {
                success(String(chunk));
            });
        }).on("error", reject);
    });
}

function tryParseUrl(url: PathLike): URL | null {
    if (url instanceof URL) {
        return url;
    }

    try {
        return new URL(url.toString());
    } catch (e) {
        return null;
    }
}

// @ts-ignore
function processClientRequest(url: string, req: HttpRequest & HttpsRequest): Promise<string> {
    return new Promise<string>((success, reject) => {
        const request = req(url, (res: IncomingMessage) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                success(data);
            });
        });
        request.on("error", (e: Error) => {
            reject(e);
        });
        request.end();
    });
}

export function getContent(uri: PathLike): Promise<string> {
    const url = tryParseUrl(uri);

    if (url) {
        return getContentFromUrl(url);
    }

    return getContentFromFile(uri);
}

export function getContentFromUrl(url: URL): Promise<string> {
    if (url.protocol === "http") {
        return processClientRequest(url.href, HttpRequest);
    }
    if (url.protocol === "https") {
        return processClientRequest(url.href, HttpsRequest);
    }

    throw new Error(`Unknown protocol ${url.protocol}`);
}

export function getContentFromFile(path: PathLike, encoding: "utf8" = "utf8"): Promise<string> {
    return new Promise<string>((success, reject) => {
        readFile(path, {encoding}, (error: NodeJS.ErrnoException | null, data) => {
            if (error) {
                return reject(error);
            }

            success(data);
        });
    });
}

/**
 * @deprecated use {@link getContentFromUrl} instead
 * @param url - resource url
 */
export function getContentFrom(url: string): Promise<string> {
    return getContent(url);
}
