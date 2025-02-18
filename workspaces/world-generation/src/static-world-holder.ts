import type { VoronoiDataHolder } from "./common/voronoi/voronoi-data.ts";
import type { MapAccessorCell } from "./static-world-generator.ts";

export interface StaticWorldHolderOptions<Biome extends string = string> {
    readonly seed: number;
    readonly width: number;
    readonly height: number;
    readonly biomes: Biome[];
}

export interface MapHolderCell extends MapAccessorCell {
    readonly biomeIndex: number;
    readonly centerHeight: number;
}
export class StaticWorldHolder<Cell extends MapHolderCell = MapHolderCell, Biome extends string = string> {
    public constructor(
        private readonly cells: readonly Cell[],
        public readonly voronoi: VoronoiDataHolder,
        private readonly options: StaticWorldHolderOptions<Biome>,
    ) {
    }

    private requireCell(cellOrIndex: number | Cell): Cell {
        if (typeof cellOrIndex === "number") {
            return this.cells[cellOrIndex];
        }

        return cellOrIndex;
    }
    public getHeightOf(cellOrIndex: number | Cell): number {
        const cell = this.requireCell(cellOrIndex);

        return cell.centerHeight;
    }

    public getBiomeFor(cellOrIndex: number | Cell): Biome {
        const cell = this.requireCell(cellOrIndex);
        const biome = this.options.biomes[cell.biomeIndex];

        return biome;
    }
}
