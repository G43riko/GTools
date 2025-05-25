import { Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { Grid2ArrayHolder, type Grid2Holder, Random } from "@g43/tools";
import { randomFloatBetween } from "@g43/utils";
import { assertExists } from "@std/assert";

export class JitterGrid {
    public readonly gridSize: ReadonlySimpleVector2;
    public readonly jitterSize: number;
    public readonly grid: Grid2Holder<ReadonlySimpleVector2>;

    public static createJitterGrid(
        gridSize: ReadonlySimpleVector2,
        jitterSize: number,
        seed = 1,
    ): JitterGrid {
        return new JitterGrid(
            gridSize,
            jitterSize,
            seed,
        );
    }

    private static createGridHolder(
        gridSize: ReadonlySimpleVector2,
        jitterSize: number,
        seed?: number,
    ): Grid2Holder<ReadonlySimpleVector2> {
        const halfJitterSize = jitterSize / 2;
        const result = Grid2ArrayHolder.initEmpty<ReadonlySimpleVector2>(gridSize.x, gridSize.y);
        const random = new Random(seed);
        result.forEach((_, x, y) => {
            const angle = random.nextFloatBetween(0, Math.PI * 2);
            const length = random.nextFloatBetween(0, halfJitterSize);
            const center = {
                x: x * jitterSize + length * Math.cos(angle) + halfJitterSize,
                y: y * jitterSize + length * Math.sin(angle) + halfJitterSize,
            };

            result.set(x, y, center);
        });

        return result;
    }

    public constructor(
        gridSize: ReadonlySimpleVector2,
        jitterSize: number,
        seed = 1,
    ) {
        this.gridSize = gridSize;
        this.jitterSize = jitterSize;
        this.grid = JitterGrid.createGridHolder(gridSize, jitterSize, seed);
    }

    public getMapWidth(): number {
        return this.gridSize.x * this.jitterSize;
    }

    public getMapHeight(): number {
        return this.gridSize.y * this.jitterSize;
    }

    public getCenterByCoordinates(x: number, y: number): ReadonlySimpleVector2 | undefined {
        return this.grid.get(x, y);
    }

    public getCenterByPosition(position: ReadonlySimpleVector2): ReadonlySimpleVector2 {
        const coordinates = this.getCoordinateByPosition(position);

        return this.getCenterByCoordinates(coordinates.x, coordinates.y) as ReadonlySimpleVector2;
    }

    public getCoordinateByPosition(position: ReadonlySimpleVector2): ReadonlySimpleVector2 {
        const currentCellCoordinates = {
            x: Math.floor(position.x / this.gridSize.x),
            y: Math.floor(position.y / this.gridSize.y),
        };

        let minDistance = Infinity;
        let closesCellCoordinates = currentCellCoordinates;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const cellCoordinates = {
                    x: currentCellCoordinates.x + i,
                    y: currentCellCoordinates.y + j,
                };

                const center = this.grid.get(cellCoordinates.x, cellCoordinates.y);

                assertExists(center);
                const distanceToCenter = Vector2.dist(position, center);
                if (distanceToCenter < minDistance) {
                    minDistance = distanceToCenter;
                    closesCellCoordinates = cellCoordinates;
                }
            }
        }

        return closesCellCoordinates;
    }
}

export class JitterGridGeneric<T> {
    private readonly gridSize: ReadonlySimpleVector2;
    private readonly jitterSize: number;
    private readonly grid: Grid2Holder<{ center: ReadonlySimpleVector2; value: T }>;

    public constructor(
        gridSize: ReadonlySimpleVector2,
        jitterSize: number,
        provider: (x: number, y: number, center: ReadonlySimpleVector2) => T,
    ) {
        this.gridSize = gridSize;
        this.jitterSize = jitterSize;
        this.grid = JitterGridGeneric.createGridHolder(gridSize, jitterSize, provider);
    }

    public getItemByCoordinates(x: number, y: number): T | undefined {
        return this.grid.get(x, y)?.value;
    }

    public getItemByPosition(position: ReadonlySimpleVector2): T | undefined {
        const currentCellCoordinates = {
            x: Math.floor(position.x / this.gridSize.x),
            y: Math.floor(position.y / this.gridSize.y),
        };

        let minDistance = Infinity;
        let closesCellCoordinates = currentCellCoordinates;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const cellCoordinates = {
                    x: currentCellCoordinates.x + i,
                    y: currentCellCoordinates.y + j,
                };

                const holder = this.grid.get(cellCoordinates.x, cellCoordinates.y);

                assertExists(holder);
                const distanceToCenter = Vector2.dist(position, holder.center);
                if (distanceToCenter < minDistance) {
                    minDistance = distanceToCenter;
                    closesCellCoordinates = cellCoordinates;
                }
            }
        }

        return this.getItemByCoordinates(closesCellCoordinates.x, closesCellCoordinates.y);
    }

    public static createJitterGrid(
        gridSize: ReadonlySimpleVector2,
        jitterSize: number,
    ): JitterGridGeneric<undefined> {
        return new JitterGridGeneric(
            gridSize,
            jitterSize,
            () => undefined,
        );
    }

    private static createGridHolder<T>(
        gridSize: ReadonlySimpleVector2,
        jitterSize: number,
        provider: (x: number, y: number, center: ReadonlySimpleVector2) => T,
    ): Grid2Holder<{ center: ReadonlySimpleVector2; value: T }> {
        const halfJitterSize = jitterSize / 2;
        const result = Grid2ArrayHolder.initEmpty<{
            center: ReadonlySimpleVector2;
            value: T;
        }>(gridSize.x, gridSize.y);

        result.forEach((_, x, y) => {
            const angle = randomFloatBetween(0, Math.PI * 2);
            const length = randomFloatBetween(0, halfJitterSize);
            const center = {
                x: x * jitterSize + length * Math.cos(angle) + halfJitterSize,
                y: y * jitterSize + length * Math.sin(angle) + halfJitterSize,
            };

            result.set(x, y, {
                center,
                value: provider(x, y, center),
            });
        });

        return result;
    }

    public static createGrid(gridSize: ReadonlySimpleVector2, jitterSize: number): Grid2Holder<ReadonlySimpleVector2> {
        const halfJitterSize = jitterSize / 2;

        return Grid2ArrayHolder.initWithProvider(gridSize.x, gridSize.y, (x, y) => {
            const angle = randomFloatBetween(0, Math.PI * 2);
            const length = randomFloatBetween(0, halfJitterSize);
            const center = {
                x: x * jitterSize + length * Math.cos(angle) + halfJitterSize,
                y: y * jitterSize + length * Math.sin(angle) + halfJitterSize,
            };

            return center;
        });
    }
}
