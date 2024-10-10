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

    public swap(ax: number, ay: number, az: number, bx: number, by: number, bz: number): void {
        const aIndex      = hash3Numbers(ax, ay, az);
        const bIndex      = hash3Numbers(bx, by, bz);
        const tmp         = this.data[aIndex];
        this.data[aIndex] = this.data[bIndex];
        this.data[bIndex] = tmp;
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

    public forEach(callback: (value: T, x: number, y: number, z: number) => unknown): boolean {
        if (this.cacheForIteration) {
            for (const item of this.values) {
                if (callback(item.value, item.x, item.y, item.z) === false) {
                    return false;
                }
            }

            return true;
        }
        for (const item of Object.values(this.data)) {
            if (callback(item.value, item.x, item.y, item.z) === false) {
                return false;
            }
        }

        return true;
    }
}
