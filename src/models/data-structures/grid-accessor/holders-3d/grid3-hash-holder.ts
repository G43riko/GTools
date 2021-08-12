import { hash3Numbers } from "../../../../utils/math-utils";
import { Grid3Holder } from "./grid3-holder";

export class Grid3HashHolder<T> implements Grid3Holder<T> {
    private data: { [key: number]: { value: T; x: number; y: number; z: number } } = {};
    private values: { value: T; x: number; y: number; z: number }[]                = [];

    public get length(): number {
        return Object.keys(this.data).length;
    }

    public constructor(private readonly cacheForIteration = false) {
    }

    public clear(): void {
        this.data = {};
    }

    public fill<R extends T & Record<string | number, unknown>>(value: ((x: number, y: number, z: number) => R) | R): void {
        if (typeof value === "function") {
            Object.entries(this.data).forEach(([key, currentValue]) => {
                this.data[key as unknown as number].value = value(currentValue.x, currentValue.y, currentValue.z);
            });
        } else {
            Object.keys(this.data).forEach((key) => {
                this.data[key as unknown as number].value = value;
            });
        }
    }

    public setHolder(holder: Grid3Holder<T>): void {
        holder.forEach((item, x, y, z) => this.set(x, y, z, item));
    }

    public get(x: number, y: number, z: number): T {
        return this.data[hash3Numbers(x, y, z)]?.value;
    }

    public set(x: number, y: number, z: number, value: T): void {
        this.data[hash3Numbers(x, y, z)] = {value, x, y, z};
        if (this.cacheForIteration) {
            this.values = Object.values(this.data);
        }
    }

    public transform(x: number, y: number, z: number, transformer: (value: T) => T): void {
        const hash      = hash3Numbers(x, y, z);
        this.data[hash] = {x, y, z, value: transformer(this.data[hash].value)};
        if (this.cacheForIteration) {
            this.values = Object.values(this.data);
        }
    }

    public delete(x: number, y: number, z: number): void {
        delete this.data[hash3Numbers(x, y, z)];
        if (this.cacheForIteration) {
            this.values = Object.values(this.values);
        }
    }

    public forEach(callback: (value: T, x: number, y: number, z: number) => void | boolean): void {
        if (this.cacheForIteration) {
            this.values.forEach((item) => callback(item.value, item.x, item.y, item.z));
        } else {
            Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y, item.z)));
        }
    }
}
