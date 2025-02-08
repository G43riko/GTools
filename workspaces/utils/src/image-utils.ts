import { getAverageColorFromArrayData } from "./color-utils.ts";
/**
 * @throws error if getting context form canvas failed
 * @param image
 * @param pixelSize
 * @param canvas
 * @returns
 */
export function pixelizeImage(
    image: HTMLImageElement,
    pixelSize: number,
    canvas: HTMLCanvasElement = document.createElement("canvas"),
): HTMLImageElement {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Canvas context is not available");
    }

    // Set canvas size to match the image
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // Get the image data
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    // Loop through the image with steps of `pixelSize`
    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
            // Get the pixel index
            const index = (y * canvas.width + x) * 4;

            // Read the color of the current pixel
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];

            // Draw a square filled with the current pixel's color
            ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }

    const result = document.createElement("img");
    result.src = canvas.toDataURL();

    return result;
}
export function canvasToImage(canvas: HTMLCanvasElement, format = "image/png"): HTMLImageElement {
    const url = canvas.toDataURL(format);
    const image = loadImage(url);
    image.src = canvas.toDataURL(format);
    image.width = canvas.width;
    image.height = canvas.height;

    return image;
}

/**
 * @throws will throw if image is not completed
 * @throws error if getting context form canvas failed
 * @param image
 */
export function getAverageColorFromImage(
    image: HTMLImageElement,
): [red: number, green: number, blue: number, alpha: number] {
    if (!image.complete) {
        throw new Error("Image is not loaded yet");
    }
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Canvas context is not available");
    }
    context.drawImage(image, 0, 0);

    const imageData = context.getImageData(0, 0, image.width, image.height);

    return getAverageColorFromArrayData(imageData.data, 4);
}

export function imageAsPromise(src: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((success, reject) => {
        const image = document.createElement("img");
        const callback = (e: Event): void => {
            (image.dataset as { hasError: string }).hasError = e ? "true" : "false";
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
/**
 * Encode image as Base64 URL
 * @throws error if getting context form canvas failed
 * @param image
 */
export function serializeImage(image: HTMLImageElement): string {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Cannot get context");
    }
    ctx.drawImage(image, 0, 0);

    return canvas.toDataURL("image/png");
}

export function loadImage(src: string): HTMLImageElement {
    const originalImage = document.createElement("img");
    originalImage.src = src;

    return originalImage;
}

export function loadImageAnd(src: string, transform: (image: HTMLImageElement) => HTMLImageElement): HTMLImageElement {
    const originalImage = document.createElement("img");
    const callback = () => {
        const res = transform(originalImage);
        originalImage.src = res.src;
        originalImage.removeEventListener("load", callback);
    };
    originalImage.addEventListener("load", callback);
    originalImage.src = src;

    return originalImage;
}

/**
 * @throws error if getting context form canvas failed
 * @param image
 * @param params
 * @returns
 */
export function imageToContext(image: HTMLImageElement, params: {
    readonly rotate?: number;
} = {}): CanvasRenderingContext2D {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Cannot get context");
    }
    if (params.rotate) {
        ctx.translate(image.width / 2, image.height / 2);
        ctx.rotate(params.rotate);
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        ctx.rotate(-params.rotate);
        ctx.translate(-image.width / 2, -image.height / 2);
    } else {
        ctx.drawImage(image, 0, 0);
    }

    return ctx;
}

export function imageToCanvas(image: HTMLImageElement, params: {
    readonly rotate?: number;
} = {}): HTMLCanvasElement {
    return imageToContext(image, params).canvas;
}
