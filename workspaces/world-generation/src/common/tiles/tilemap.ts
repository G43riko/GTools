import type { TileSet } from "./tileset.ts";

export interface TileMapLayerChunk {
    readonly x: number;
    readonly y: number;
    /**
     * Size is {@link TileMap.chunkWidth} * {@link TileMap.chunkHeight}
     */
    readonly data: readonly number[];
}

export interface TileMapLayer {
    readonly name?: string;
    readonly opacity?: number;
    readonly visible?: boolean;
    readonly chunks: readonly TileMapLayerChunk[];
}

export interface TileMap {
    readonly chunkWidth: number;
    readonly chunkHeight: number;
    readonly tileWidth: number;
    readonly tileHeight: number;
    readonly tileSets: readonly TileSet[];
    readonly layers: readonly TileMapLayer[];
}
