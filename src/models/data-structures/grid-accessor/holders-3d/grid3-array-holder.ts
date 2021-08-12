import { SimpleVector3 } from "../../../../math";
import { Grid3Holder } from "./grid3-holder";

export function getIndex(x: number, y: number, z: number, width: number, height = width): number {
    return x + (z * width) + (y * width * height);
}

export function getCoordinates(index: number, width: number, height = width): SimpleVector3 {
    return {
        x: index % width,
        y: Math.floor(index / (width * height)),
        z: Math.floor((index / width) % width),
    };
}

/**
 * https://github.com/cuberite/cuberite/blob/master/src/ChunkDef.h
 */
export class Grid3ArrayHolder<T> implements Grid3Holder<T> {
    public constructor(
        private readonly size: SimpleVector3,
        private readonly data: T[],
    ) {
    }

    private getIndex(x: number, y: number, z: number): number {
        return getIndex(x, y, z, this.size.x);
    }

    private getCoordinates(index: number): SimpleVector3 {
        return getCoordinates(index, this.size.x);
    }

    public clear(): void {
        this.data.splice(this.data.length);
    }

    public get length(): number {
        return this.data.length;
    }

    public static initEmpty<S>(x: number, y: number, z: number, defaultValue: S = null as unknown as S): Grid3ArrayHolder<S> {
        const size   = x * y * z;
        const result = new Array<S>(size);
        for (let i = 0; i < size; i++) {
            result[i] = defaultValue;
        }

        return new Grid3ArrayHolder<S>({x, y, z}, result);
    }

    public get(x: number, y: number, z: number): T {
        return this.data[this.getIndex(x, y, z)];
    }

    public fill<R extends T & Record<string | number, unknown>>(value: ((x: number, y: number, z: number) => R) | R): void {
        if (typeof value === "function") {
            for (let i = 0; i < this.data.length; i++) {
                const coordinates = this.getCoordinates(i);
                this.data[i]      = value(coordinates.x, coordinates.y, coordinates.z);
            }
        } else {
            this.data.fill(value);
        }
    }

    public setHolder(holder: Grid3Holder<T>): void {
        if (holder instanceof Grid3ArrayHolder) {
            this.data.splice(0, this.data.length, ...holder.data);
        } else {
            holder.forEach((item, x, y, z) => this.set(x, y, z, item));
        }
    }

    public set(x: number, y: number, z: number, value: T): void {
        this.data[this.getIndex(x, y, z)] = value;
    }

    public transform(x: number, y: number, z: number, transformer: (value: T) => T): void {
        const index      = this.getIndex(x, y, z);
        this.data[index] = transformer(this.data[index]);
    }

    public forEach(callback: (item: T, x: number, y: number, z: number) => void | boolean): void {
        for (let i = 0; i < this.data.length; i++) {
            const coordinates = this.getCoordinates(i);
            if (callback(this.data[i], coordinates.x, coordinates.y, coordinates.z) === false) {
                return;
            }
        }
    }
}
