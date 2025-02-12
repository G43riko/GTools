import type { ReadonlySimpleVector2 } from "@g43/types";
import { Vector2 } from "@g43/math";
import { getValueFromProvider, type ValueProvider } from "@g43/core";
// import { GridBlockItemFilter } from "../grid-filters";
import type { Grid2Block, Grid2Holder } from "./grid2-holder.ts";

function getMapIndex(x: number, y: number, width: number): number {
    return y * width + x;
}

function getCoordinates(index: number, width: number): ReadonlySimpleVector2 {
    return {
        x: index % width,
        y: Math.floor(index / width),
    };
}

export class Grid2ArrayHolder<T> implements Grid2Holder<T> {
    public readonly data: readonly T[];

    public constructor(
        public readonly size: ReadonlySimpleVector2,
        private readonly _data: T[],
    ) {
        this.data = _data;
    }

    public get maxSize(): number {
        return Math.max(this.size.x, this.size.y);
    }

    public get length(): number {
        return this._data.length;
    }

    public clear(): void {
        this._data.splice(this._data.length);
    }

    public swap(ax: number, ay: number, bx: number, by: number): void {
        const aIndex = this.getIndex(ax, ay);
        const bIndex = this.getIndex(bx, by);
        const tmp = this._data[aIndex];
        this._data[aIndex] = this._data[bIndex];
        this._data[bIndex] = tmp;
    }

    public static initEmpty<T>(x: number, y: number, defaultValue: T = null as unknown as T): Grid2ArrayHolder<T> {
        const size = x * y;
        const result = new Array<T>(size);
        result.fill(defaultValue);

        return new Grid2ArrayHolder<T>({ x, y }, result);
    }

    public static initWithProvider<T>(
        x: number,
        y: number,
        provider: (x: number, y: number) => T,
    ): Grid2ArrayHolder<T> {
        const size = x * y;
        const result = new Array<T>(size);
        for (let i = 0; i < size; i++) {
            const coordinates = getCoordinates(i, x);
            result[i] = provider(coordinates.x, coordinates.y);
        }

        return new Grid2ArrayHolder<T>({ x, y }, result);
    }

    public setData(data: readonly T[]): void {
        if (data.length !== this._data.length) {
            throw new Error("Array with new data mush be same size");
        }

        this._data.length = 0;
        this._data.push(...data);
    }

    public get(x: number, y: number): T {
        return this._data[this.getIndex(x, y)];
    }

    public require(x: number, y: number): T {
        const item = this.get(x, y);

        if (!item) {
            throw new Error(`Cannot get item at ${x}, ${y}`);
        }

        return item;
    }

    public getRandom(): T | undefined {
        return this.get(Math.floor(Math.random() * this.size.x), Math.floor(Math.random() * this.size.y));
    }

    public requireRandom(): T {
        return this.require(Math.floor(Math.random() * this.size.x), Math.floor(Math.random() * this.size.y));
    }

    public set(x: number, y: number, value: T): void {
        this._data[this.getIndex(x, y)] = value;
    }

    public delete(x: number, y: number): void {
        this._data[this.getIndex(x, y)] = undefined as unknown as T;
    }

    private getIndex(x: number, y: number): number {
        return getMapIndex(x, y, this.size.x);
    }

    private getCoordinates(index: number): ReadonlySimpleVector2 {
        return getCoordinates(index, this.size.x);
    }

    public getOrCreate(x: number, y: number, provider: ValueProvider<T>): T {
        const index = this.getIndex(x, y);

        const existingItem = this._data[index];
        if (existingItem) {
            return existingItem;
        }
        const newItem = getValueFromProvider(provider);

        return this._data[index] = newItem;
    }

    public getAroundData(x: number, y: number, size = 1): Grid2Block<T>[] {
        const center = { x, y };

        const minPosition = {
            x: Math.max(0, x - size),
            y: Math.max(0, y - size),
        };

        const maxPosition = {
            x: Math.min(this.size.x - 1, size + x),
            y: Math.min(this.size.y - 1, size + y),
        };

        return this.getAreaInternally(
            minPosition,
            {
                x: maxPosition.x - minPosition.x + 1,
                y: maxPosition.y - minPosition.y + 1,
            },
            "block",
        ).filter((e) => Vector2.dist(e.coordinates, center) <= size);
    }

    public getAround(x: number, y: number, size = 1): T[] {
        return this.getAroundData(x, y, size).map((e) => e.item);
    }

    public getAroundSQ(x: number, y: number, size = 1): T[] {
        const minPosition = {
            x: Math.max(0, x - size),
            y: Math.max(0, y - size),
        };

        const maxPosition = {
            x: Math.min(this.size.x - 1, size + x),
            y: Math.min(this.size.y - 1, size + y),
        };

        return this.getAreaInternally(
            minPosition,
            {
                x: maxPosition.x - minPosition.x + 1,
                y: maxPosition.y - minPosition.y + 1,
            },
            "data",
        );
    }

    public getBetween(pointA: ReadonlySimpleVector2, pointB: ReadonlySimpleVector2): T[] {
        const min = {
            x: Math.min(pointA.x, pointB.x),
            y: Math.min(pointA.y, pointB.y),
        };
        const max = {
            x: Math.max(pointA.x, pointB.x),
            y: Math.max(pointA.y, pointB.y),
        };

        return this.getAreaInternally(min, {
            x: max.x - min.x + 1,
            y: max.y - min.y + 1,
        }, "data");
    }

    /**
     * TODO: add limit
     */
    public getNearest(x: number, y: number, condition: (item: T) => boolean): Grid2Block<T>[] {
        enum Statuses {
            ADDED,
            FALSE,
        }

        const data: { [index: number]: Statuses } = {};

        const result: Grid2Block<T>[] = [];
        const current = [[this.getIndex(x, y)]];
        while (!result.length) {
            const actualLevel = current.shift() as number[];
            const nextLevel: number[] = [];
            actualLevel.forEach((actual) => {
                if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                    return;
                }
                const coordinates = this.getCoordinates(actual);
                if (condition(this._data[actual])) {
                    data[actual] = Statuses.ADDED;
                    result.push({ coordinates, item: this._data[actual] });
                } else {
                    data[actual] = Statuses.FALSE;
                    nextLevel.push(...this.getAround4(coordinates.x, coordinates.y));
                }
            });
            current.push(nextLevel);
        }

        return result;
    }

    public expandConditionally(x: number, y: number, condition: (item: T) => boolean): Grid2Block<T>[] {
        enum Statuses {
            ADDED,
            FALSE,
        }

        const data: { [index: number]: Statuses } = {};
        const current = [this.getIndex(x, y)];

        const result: Grid2Block<T>[] = [];
        while (current.length) {
            const actual = current.shift() as number;

            if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                continue;
            }
            if (condition(this._data[actual])) {
                data[actual] = Statuses.ADDED;
                const coordinates = this.getCoordinates(actual);
                result.push({ coordinates, item: this._data[actual] });
                current.push(...this.getAround4(coordinates.x, coordinates.y));
            } else {
                data[actual] = Statuses.FALSE;
            }
        }

        return result;
    }

    private getAround4(x: number, y: number): number[] {
        const centerIndex = this.getIndex(x, y);
        const result = [];

        if (x > 0) {
            result.push(centerIndex - 1);
        }
        if (y > 0) {
            result.push(centerIndex - this.size.x);
        }
        if (x + 1 < this.size.x) {
            result.push(centerIndex + 1);
        }
        if (y + 1 < this.size.y) {
            result.push(centerIndex + this.size.x);
        }

        return result;
    }

    private getAround4Index(centerIndex: number): number[] {
        const { x, y } = this.getCoordinates(centerIndex);
        const result = [];

        if (x > 0) {
            result.push(centerIndex - 1);
        }
        if (y > 0) {
            result.push(centerIndex - this.size.x);
        }
        if (x + 1 < this.size.x) {
            result.push(centerIndex + 1);
        }
        if (y + 1 < this.size.y) {
            result.push(centerIndex + this.size.x);
        }

        return result;
    }

    public getArea(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): T[] {
        return this.getAreaInternally(position, size, "data");
    }

    public getAreaBlocks(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): Grid2Block<T>[] {
        return this.getAreaInternally(position, size, "block");
    }

    private getAreaInternally(
        position: ReadonlySimpleVector2,
        size: ReadonlySimpleVector2,
        select: "indices",
    ): number[];
    private getAreaInternally(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2, select: "data"): T[];
    private getAreaInternally(
        position: ReadonlySimpleVector2,
        size: ReadonlySimpleVector2,
        select: "block",
    ): Grid2Block<T>[];
    private getAreaInternally(
        position: ReadonlySimpleVector2,
        size: ReadonlySimpleVector2,
        select: "indices" | "data" | "block",
    ): (number | T | Grid2Block<T>)[] {
        let counter = 0;
        let y = position.y;
        if (select === "block") {
            const gridBlocks = new Array<Grid2Block<T>>(size.x * size.y);
            for (let i = 0; i < size.y; i++) {
                let currentIndex = this.getIndex(position.x, y);
                for (let j = 0; j < size.x; j++) {
                    gridBlocks[counter++] = {
                        item: this._data[currentIndex++],
                        coordinates: { y, x: position.x + j },
                    };
                }
                y++;
            }

            return gridBlocks;
        }

        const gridIndices = new Array<number>(size.x * size.y);
        for (let i = 0; i < size.y; i++) {
            let currentIndex = this.getIndex(position.x, y);
            for (let j = 0; j < size.x; j++) {
                gridIndices[counter++] = currentIndex++;
            }
            y++;
        }

        if (select === "indices") {
            return gridIndices;
        }

        return gridIndices.map((index) => this._data[index]);
    }

    public transformAll(transformer: (item: T, x: number, y: number) => T): boolean {
        for (let i = 0; i < this._data.length; i++) {
            this._data[i] = transformer(this._data[i], i % this.size.x, Math.floor(i / this.size.x));
        }

        return true;
    }

    public forEach(callback: (item: T, x: number, y: number) => void | boolean): boolean {
        for (let i = 0; i < this._data.length; i++) {
            if (callback(this._data[i], i % this.size.x, Math.floor(i / this.size.x)) === false) {
                return false;
            }
        }

        return true;
    }

    public transform(x: number, y: number, transformer: (value: T) => T): void {
        const index = this.getIndex(x, y);
        this._data[index] = transformer(this._data[index]);
    }

    /*
    public getRandomBlockOfSize(size: ReadonlySimpleVector2, filter: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        let limit = 1000;
        while (limit-- >= 0) {
            const randomIndex = Math.floor(Math.random() * this._data.length);
            const blocks      = this.getArea(this.getCoordinates(randomIndex), size);
            if (blocks.every((item) => filter(item))) {
                return {
                    item       : this._data[randomIndex],
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        let limit = 1000;
        while (limit-- >= 0) {
            const randomIndex = Math.floor(Math.random() * this._data.length);
            const item        = this._data[randomIndex];
            if (!filter || filter(item)) {
                return {
                    item,
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    }

    public getRandomBlock2(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        if (!filter) {
            const randomIndex = Math.floor(Math.random() * this._data.length);

            return {
                item       : this._data[randomIndex],
                coordinates: this.getCoordinates(randomIndex),
            };
        }

        const sortedArray = this._data.map((item, index) => ({ item, index })).sort(() => Math.random() - 0.5);
        const result      = sortedArray.find((e) => filter(e.item));

        if (!result) {
            return;
        }

        return {
            item       : result.item,
            coordinates: this.getCoordinates(result.index),
        };
    }
        */
}
