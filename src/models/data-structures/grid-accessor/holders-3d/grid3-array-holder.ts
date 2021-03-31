import { SimpleVector3 } from "gtools/math";
import { Grid3Holder } from "./grid3-holder";


export function getIndex(x: number, y: number, z: number, width: number, height = width): number {
    return x + (z * width) + (y * width * height);
}

export function getCoordinates(index: number, width: number, height = width): SimpleVector3 {
    return {
        x: index % width,
        y: Math.floor(index / (width * height)),
        z: (index / width) % width,
    };
}

/**
 * https://github.com/cuberite/cuberite/blob/master/src/ChunkDef.h
 */
export class Grid3ArrayHolder<T> implements Grid3Holder<T> {
    public constructor(private readonly size: SimpleVector3, private readonly data: T[]) {
    }

    private getIndex(x: number, y: number, z: number): number {
        return getIndex(x, y, z, this.size.x);
    }

    private getCoordinates(index: number): SimpleVector3 {
        return getCoordinates(index, this.size.x);
    }

    public static initEmpty<T>(x: number, y: number, z: number, defaultValue: T = null as unknown as T): Grid3ArrayHolder<T> {
        const size   = x * y * z;
        const result = new Array<T>(size);
        for (let i = 0; i < size; i++) {
            result[i] = defaultValue;
        }

        return new Grid3ArrayHolder<T>({x, y, z}, result);
    }

    public get(x: number, y: number, z: number): T {
        return this.data[this.getIndex(x, y, z)];
    }

    public set(x: number, y: number, z: number, value: T): void {
        this.data[this.getIndex(x, y, z)] = value;
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
