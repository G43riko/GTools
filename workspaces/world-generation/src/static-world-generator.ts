import { SimpleVector } from "../../math/src/simple-vector.ts";
import { Random } from "../../tools/src/random.ts";
import { ReadonlySimpleVector2 } from "../../types/src/simple-vector2.ts";
import { randomInt, randomIntBetween } from "../../utils/src/random-utils.ts";
import { DelaunatorHolder } from "./common/delaunator-holder.ts";
import { JitterGrid } from "./common/jitter-grid.ts";
import { makeNoise2D } from "./common/noise/make-noise-2d.ts";
import { PerlinNoise } from "./common/noise/perlin-noise.ts";
import { VoronoiDataHolder } from "./common/voronoi/voronoi-data.ts";
import { Voronoi } from "./common/voronoi/voronoi.ts";
import { MapHolderCell, StaticWorldHolder } from "./static-world-holder.ts";

export interface MapAccessorCell {
    readonly index: number
}

export interface MapAccessor<Cell extends MapAccessorCell> {
    forEachCell(callback: (cell: Cell) => void): void;
    forEachAdjacentCells(cellOrIndex: MapAccessorCell | number, callback: (cell: Cell) => void): void;
    forEachCellVertices(cellOrIndex: MapAccessorCell | number, callback: (vertex: ReadonlySimpleVector2) => void): void;
}

export interface StaticWorldGeneratorOptions<Biome extends string = string> {
    /**
     * @default randomInt()
     */
    readonly seed?: number;
    readonly width: number;
    readonly jitterSize?: number;
    readonly height: number;
    /**
     * @default 10
     */
    readonly heighMapTileSize?: number;
    readonly heighMapFrequency?: number;
    readonly heighMapOctaves?: number;
    readonly minHeight?: number;
    readonly maxHeight?: number;
    readonly biomes: Biome[];
}

/**
 * Steps:
 *  1. generate tile map using voronoi
 *  2. generate heightMap using
 */
export class StaticWorldGenerator<Cell extends MapAccessorCell, Biome extends string = string> {
    private seed: number;
    private readonly random: Random;
    private voronoi: VoronoiDataHolder;
    private heightMap: (x: number, y: number) => number;

    public constructor(
        private readonly options: StaticWorldGeneratorOptions<Biome>
    ) {
        this.seed = options.seed ?? randomInt();
        this.random = new Random(this.seed);
        // Generate cells
        const jitterSize = options.jitterSize ?? 10;
        const jitter = JitterGrid.createJitterGrid(SimpleVector.create2(options.width, options.height), jitterSize);
        const holder = DelaunatorHolder.fromJitter(jitter);
        this.voronoi = Voronoi.fromDelaunator(holder.delaunator);

        // Generate height map
        const frequency = options.heighMapFrequency
        const octaves = options.heighMapOctaves
        this.heightMap = PerlinNoise.createDynamicProvider2(makeNoise2D(this.seed + 13874), { frequency, octaves })
    }

    private generateCells<HolderCell extends MapHolderCell>(
        biomeIndexProvider: (cellIndex: number, centerHeight: number) => number = () => this.random.nextIntBetween(0, this.options.biomes.length),
    ): readonly HolderCell[] {
        return this.voronoi.cells.c.map((_, cellIndex) => {
            const centerHeight = this.calculateCellHeight(cellIndex);

            return {
                biomeIndex: biomeIndexProvider(cellIndex, centerHeight),
                centerHeight,
                index: cellIndex,
            } as HolderCell
        });
    }
    public generateHolder<HolderCell extends MapHolderCell>(): StaticWorldHolder<HolderCell, Biome> {
        const holderCells = this.generateCells<HolderCell>();
        const holderOptions = {
            biomes: this.options.biomes,
            width: this.options.width,
            height: this.options.height,
            seed: this.seed,
        }

        return new StaticWorldHolder(holderCells, this.voronoi, holderOptions)
    }

    /**
     * 
     * @param cellOrIndex
     * @returns height of cell center
     */
    public calculateCellHeight(cellOrIndex: number | Cell): number {
        if(typeof cellOrIndex !== "number") {
            return this.calculateCellHeight(cellOrIndex.index)
        }
        const cellCenter = this.voronoi.calculateCenterOfCell(cellOrIndex);

        const minHeight = this.options.minHeight ?? 0;
        const maxHeight = this.options.maxHeight ?? 100;
        const normalizedHeight = this.heightMap(
            Math.round(cellCenter.x),
            Math.round(cellCenter.y),
        ) / 2 + 0.5

        return normalizedHeight * maxHeight + minHeight;
    }

    private requireBiome(index: number): Biome {
        const biome = this.options.biomes[index];
        if (!biome) {
            throw new Error(`Cannot find biome at ${index}`);
        }

        return biome;
    }
    public calculateBiomeFor(cellOrIndex: number | Cell): Biome {
        if (typeof cellOrIndex !== "number") {
            return this.calculateBiomeFor(cellOrIndex.index);
        }
        // const biomeIndex = this.options.biomes[cellOrIndex];

        throw new Error("Biome calculation is no implemented");
    }
}