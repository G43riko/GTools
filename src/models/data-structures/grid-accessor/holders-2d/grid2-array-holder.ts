import { SimpleVector2, Vector2 } from "../../../../math";
import { GridBlockItemFilter } from "../grid-filters";
import { Grid2Block, Grid2Holder } from "./grid2-holder";

function getMapIndex(x: number, y: number, width: number): number {
    return y * width + x;
}

function getCoordinates(index: number, width: number): SimpleVector2 {
    return {
        x: index % width,
        y: Math.floor(index / width),
    };
}

export class Grid2ArrayHolder<T> implements Grid2Holder<T> {
    public constructor(public readonly size: SimpleVector2, public readonly data: T[]) {
    }

    public get length(): number {
        return this.data.length;
    }

    public clear(): void {
        this.data.splice(this.data.length);
    }

    public static initEmpty<T>(x: number, y: number, defaultValue: T = null as unknown as T): Grid2ArrayHolder<T> {
        const size   = x * y;
        const result = new Array<T>(size);
        for (let i = 0; i < size; i++) {
            result[i] = defaultValue;
        }

        return new Grid2ArrayHolder<T>({x, y}, result);
    }

    public static initWithProvider<T>(x: number, y: number, provider: (x: number, y: number) => T): Grid2ArrayHolder<T> {
        const size   = x * y;
        const result = new Array<T>(size);
        for (let i = 0; i < size; i++) {
            result[i] = provider(x, y);
        }

        return new Grid2ArrayHolder<T>({x, y}, result);
    }

    public setData(data: T[]): void {
        if (data.length !== this.data.length) {
            throw new Error("Array with new data mush be same size");
        }

        this.data.length = 0;
        this.data.push(...data);
    }

    public get(x: number, y: number): T {
        return this.data[this.getIndex(x, y)];
    }

    public set(x: number, y: number, value: T): void {
        this.data[this.getIndex(x, y)] = value;
    }

    public delete(x: number, y: number): void {
        this.data[this.getIndex(x, y)] = undefined as unknown as T;
    }

    private getIndex(x: number, y: number): number {
        return getMapIndex(x, y, this.size.x);
    }

    private getCoordinates(index: number): SimpleVector2 {
        return getCoordinates(index, this.size.x);
    }

    public getAroundData(x: number, y: number, size = 1): Grid2Block<T>[] {
        const center = {x, y};

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

    public getBetween(pointA: SimpleVector2, pointB: SimpleVector2): T[] {
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
            FALSE
        }

        const data: { [index: number]: Statuses } = {};

        const result: Grid2Block<T>[] = [];
        const current                 = [[this.getIndex(x, y)]];
        while (!result.length) {
            const actualLevel         = current.shift() as number[];
            const nextLevel: number[] = [];
            actualLevel.forEach((actual) => {
                if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                    return;
                }
                const coordinates = this.getCoordinates(actual);
                if (condition(this.data[actual])) {
                    data[actual] = Statuses.ADDED;
                    result.push({coordinates, item: this.data[actual]});
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
            FALSE
        }

        const data: { [index: number]: Statuses } = {};
        const current                             = [this.getIndex(x, y)];

        const result: Grid2Block<T>[] = [];
        while (current.length) {
            const actual = current.shift() as number;

            if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                continue;
            }
            if (condition(this.data[actual])) {
                data[actual]      = Statuses.ADDED;
                const coordinates = this.getCoordinates(actual);
                result.push({coordinates, item: this.data[actual]});
                current.push(...this.getAround4(coordinates.x, coordinates.y));
            } else {
                data[actual] = Statuses.FALSE;
            }
        }

        return result;
    }

    private getAround4(x: number, y: number): number[] {
        const centerIndex = this.getIndex(x, y);
        const result      = [];

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
        const {x, y} = this.getCoordinates(centerIndex);
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

    public getArea(position: SimpleVector2, size: SimpleVector2): T[] {
        return this.getAreaInternally(position, size, "data");
    }
    public getAreaBlocks(position: SimpleVector2, size: SimpleVector2): Grid2Block<T>[] {
        return this.getAreaInternally(position, size, "block");
    }

    private getAreaInternally(position: SimpleVector2, size: SimpleVector2, select: "indices"): number[];
    private getAreaInternally(position: SimpleVector2, size: SimpleVector2, select: "data"): T[];
    private getAreaInternally(position: SimpleVector2, size: SimpleVector2, select: "block"): Grid2Block<T>[];
    private getAreaInternally(
        position: SimpleVector2,
        size: SimpleVector2,
        select: "indices" | "data" | "block",
    ): (number | T | Grid2Block<T>)[] {
        const result = new Array(size.x * size.y);
        let counter  = 0;
        let y        = position.y;
        if (select === "block") {
            for (let i = 0; i < size.y; i++) {
                let currentIndex = this.getIndex(position.x, y);
                for (let j = 0; j < size.x; j++) {
                    result[counter++] = {
                        index      : currentIndex,
                        item       : this.data[currentIndex++],
                        coordinates: {y, x: position.x + j},
                    };
                }
                y++;
            }

            return result;
        }
        for (let i = 0; i < size.y; i++) {
            let currentIndex = this.getIndex(position.x, y);
            for (let j = 0; j < size.x; j++) {
                result[counter++] = currentIndex++;
            }
            y++;
        }

        if (select === "indices") {
            return result;
        }

        return result.map((index) => this.data[index]);
    }

    public forEach(callback: (item: T, x: number, y: number) => void | boolean): boolean {
        for (let i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i % this.size.x, Math.floor(i / this.size.x)) === false) {
                return false;
            }
        }

        return true;
    }

    public getRandomBlockOfSize(size: SimpleVector2, filter: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        let limit = 1000;
        while (limit-- >= 0) {
            const randomIndex = Math.floor(Math.random() * this.data.length);
            const blocks      = this.getArea(this.getCoordinates(randomIndex), size);
            if (blocks.every((item) => filter(item))) {
                return {
                    item       : this.data[randomIndex],
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid2Block<T> | undefined {
        let limit = 1000;
        while (limit-- >= 0) {
            const randomIndex = Math.floor(Math.random() * this.data.length);
            const item        = this.data[randomIndex];
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
            const randomIndex = Math.floor(Math.random() * this.data.length);

            return {
                item       : this.data[randomIndex],
                coordinates: this.getCoordinates(randomIndex),
            };
        }

        const sortedArray = this.data.map((item, index) => ({item, index})).sort(() => Math.random() - 0.5);
        const result      = sortedArray.find((e) => filter(e.item));

        if (!result) {
            return;
        }

        return {
            item       : result.item,
            coordinates: this.getCoordinates(result.index),
        };
    }
}
