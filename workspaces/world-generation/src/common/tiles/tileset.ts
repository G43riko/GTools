export interface TileSetImage {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly transparentColor?: string;
}

export interface TileSet {
    readonly id: number;
    readonly image: TileSetImage;
    readonly tilesX: number;
    readonly tilesY: number;
    readonly tileWidth: number;
    readonly tileHeight: number;
    readonly marginX?: number;
    readonly marginY?: number;
    readonly offsetX?: number;
    readonly offsetY?: number;
    /**
     * if is omitted, value `tilesX * tilesY - tileData.map(({sizeX, sizeY}) => (sizeX ?? 1) * (sizeY ?? 1))` will be used
     */
    readonly tileCount?: number;

    /**
     * All sizes bigger than 1 tile must be saved here
     */
    readonly tileData: {
        readonly name?: string;
        readonly tileX: number;
        readonly tileY: number;
        /**
         * If is ommitted, value 1 will be used
         */
        readonly sizeX?: number;
        /**
         * If is ommitted, value 1 will be used
         */
        readonly sizeY?: number;
    }[];
}
