import type { Pair, ReadonlyMinMax2D, ReadonlySimpleVector2 } from "@g43/types";
import type { NearestItem } from "./nearest-item.ts";
import { assertExists } from "@std/assert";

export interface SpatialHashGridClient {
    readonly position: ReadonlySimpleVector2;
    readonly size: ReadonlySimpleVector2;
    indices: undefined | Pair<ReadonlySimpleVector2>;
}

/**
 * https://github.com/simondevyoutube/Tutorial_SpatialHashGrid/blob/main/src/spatial-grid.js
 */
export class SpatialHashGrid implements NearestItem<SpatialHashGridClient> {
    private readonly bounds: ReadonlyMinMax2D;
    private readonly dimensions: ReadonlySimpleVector2;
    private readonly cells = new Map<string, Set<SpatialHashGridClient>>();

    public constructor(
        bounds: ReadonlyMinMax2D,
        dimensions: ReadonlySimpleVector2,
    ) {
        this.bounds = bounds;
        this.dimensions = dimensions;
    }

    public newClient(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): SpatialHashGridClient {
        const client: SpatialHashGridClient = {
            position,
            size,
            indices: undefined,
        };
        this.insert(client);

        return client;
    }

    private insert(client: SpatialHashGridClient): void {
        const i1 = this.getCellIndex(client.position.x, client.position.y);
        const i2 = this.getCellIndex(client.position.x + client.size.x, client.position.y + client.size.y);

        client.indices = [i1, i2];

        for (let x = i1.x; x <= i2.x; x++) {
            for (let y = i1.y; y <= i2.y; y++) {
                const key = this.getCellKey(x, y);
                const cell = this.cells.get(key);

                if (cell) {
                    cell.add(client);
                } else {
                    const set = new Set<SpatialHashGridClient>();
                    set.add(client);
                    this.cells.set(key, set);
                }
            }
        }
    }

    private getCellKey(x: number, y: number): string {
        return `${x}-${y}`;
    }

    private getCellIndex(x: number, y: number): ReadonlySimpleVector2 {
        const sat = (val: number) => Math.min(1, Math.max(0, val));
        const xVal = sat((x - this.bounds.min.x) / (this.bounds.max.x - this.bounds.min.x));
        const yVal = sat((y - this.bounds.min.y) / (this.bounds.max.y - this.bounds.min.y));

        return {
            x: Math.floor(xVal * (this.dimensions.x - 1)),
            y: Math.floor(yVal * (this.dimensions.y - 1)),
        };
    }

    public findNear(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): readonly SpatialHashGridClient[] {
        const i1 = this.getCellIndex(position.x, position.y);
        const i2 = this.getCellIndex(position.x + size.x, position.y + size.y);

        const result: Set<SpatialHashGridClient> = new Set();

        for (let x = i1.x; x <= i2.x; x++) {
            for (let y = i1.y; y <= i2.y; y++) {
                const key = this.getCellKey(x, y);
                const cell = this.cells.get(key);

                if (cell) {
                    cell.forEach((client) => result.add(client));
                }
            }
        }

        return Array.from(result);
    }

    public updateClient(client: SpatialHashGridClient): void {
        this.remove(client);
        this.insert(client);
    }

    public remove(client: SpatialHashGridClient): void {
        assertExists(client.indices);

        const [i1, i2] = client.indices;

        for (let x = i1.x; x <= i2.x; x++) {
            for (let y = i1.y; y <= i2.y; y++) {
                const key = this.getCellKey(x, y);
                const cell = this.cells.get(key);

                if (cell) {
                    cell.delete(client);
                }
            }
        }
    }
}
