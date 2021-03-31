import { CreateElement, CreateImage } from "./html-utils";

export function serializeImage(image: HTMLImageElement): string {
    const canvas = CreateElement("canvas", {
        width : image.width,
        height: image.height,
    });
    (canvas.getContext("2d") as CanvasRenderingContext2D).drawImage(image, 0, 0);

    return canvas.toDataURL("image/png");
}

export function deserializeImage(image: string): HTMLImageElement {
    return CreateImage({
        src: image,
    });
}

export function createImage(callback: (context: CanvasRenderingContext2D) => void, width: number, height = width): HTMLCanvasElement {
    const canvas = CreateElement("canvas", {
        width,
        height,
    });
    callback(canvas.getContext("2d") as CanvasRenderingContext2D);

    return canvas;

}

export function imageAsPromise(src: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((success, reject) => {
        const image = document.createElement("img");
        const callback = (e: any): void => {
            image.dataset.hasError = e ? "true" : "false";
            if (e.type === "error") {
                reject(e);

                return console.error("Error during loading image ", src);
            }
            image.removeEventListener("load", callback);
            image.removeEventListener("error", callback);
            success(image);
        };
        image.addEventListener("load", callback);
        image.addEventListener("error", callback);

        image.src = src;
    });
}
