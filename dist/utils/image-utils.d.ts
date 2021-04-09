export declare function serializeImage(image: HTMLImageElement): string;
export declare function deserializeImage(image: string): HTMLImageElement;
export declare function createImage(callback: (context: CanvasRenderingContext2D) => void, width: number, height?: number): HTMLCanvasElement;
export declare function imageAsPromise(src: string): Promise<HTMLImageElement>;
//# sourceMappingURL=image-utils.d.ts.map