import type { ReadonlySimpleVector2, SimpleVector2 } from "@g43/types";

export interface VoronoiTextureData {
    readonly maxDist: number;
    readonly numPoints: number;
    readonly size: ReadonlySimpleVector2;
    readonly centers: ReadonlySimpleVector2[];
    readonly points: readonly {
        readonly dist: number;
        readonly index: number;
    }[];
}

export interface VoronoiGrid {
    center: SimpleVector2;
    edges: SimpleVector2[]; // Midpoints of edges
    vertices: SimpleVector2[]; // Corner points
}
