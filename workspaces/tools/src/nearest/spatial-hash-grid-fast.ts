import type { Pair, ReadonlyMinMax2D, ReadonlySimpleVector2 } from "@g43/types";
import { assertExists } from "@std/assert";
import { Vector2 } from "@g43/math";

export interface SpatialHashGridFastClient {
    readonly position: ReadonlySimpleVector2;
    readonly size: ReadonlySimpleVector2;
    indices: undefined | Pair<ReadonlySimpleVector2>;
    queryId: number;
}

/**
 * https://github.com/simondevyoutube/Tutorial_SpatialHashGrid_Optimized/blob/main/src/spatial-grid.js
 */
export class SpatialHashGridFast {
    private queryIds = 0;

    private readonly bounds: ReadonlyMinMax2D;
    private readonly dimensions: ReadonlySimpleVector2;
    private readonly cells = new Map<string, Set<SpatialHashGridFastClient>>();

    public constructor(
        bounds: ReadonlyMinMax2D,
        dimensions: ReadonlySimpleVector2,
    ) {
        this.bounds = bounds;
        this.dimensions = dimensions;
    }

    public newClient(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): SpatialHashGridFastClient {
        const client: SpatialHashGridFastClient = {
            position,
            size,
            indices: undefined,
            queryId: -1,
        };
        this.insert(client);

        return client;
    }

    private insert(client: SpatialHashGridFastClient): void {
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
                    const set = new Set<SpatialHashGridFastClient>();
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

    public findNear(
        position: ReadonlySimpleVector2,
        size: ReadonlySimpleVector2,
    ): readonly SpatialHashGridFastClient[] {
        const i1 = this.getCellIndex(position.x, position.y);
        const i2 = this.getCellIndex(position.x + size.x, position.y + size.y);

        const queryId = this.queryIds++;
        const result = new Array<SpatialHashGridFastClient>();

        for (let x = i1.x; x <= i2.x; x++) {
            for (let y = i1.y; y <= i2.y; y++) {
                const key = this.getCellKey(x, y);
                const cell = this.cells.get(key);

                if (cell) {
                    cell.forEach((client) => {
                        if (client.queryId !== queryId) {
                            client.queryId = queryId;
                            result.push(client);
                        }
                    });
                }
            }
        }

        return result;
    }

    public updateClient(client: SpatialHashGridFastClient): void {
        const oldIndices = client.indices;
        const newIndices = this.getCellIndex(client.position.x, client.position.y);

        if (oldIndices && Vector2.equals(oldIndices[0], newIndices)) {
            return;
        }

        this.remove(client);
        this.insert(client);
    }

    public remove(client: SpatialHashGridFastClient): void {
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
