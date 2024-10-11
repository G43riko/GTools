import { Grid3Holder } from "./grid3-holder";

export abstract class AbstractGrid3Holder<T> implements Grid3Holder<T> {
    public getProperty<S extends keyof T>(x: number, y: number, z: number, key: S): T[S] | undefined {
        const item = this.get(x, y, z);

        if (item) {
            return item[key];
        }
    }

    public abstract readonly length: number;

    public abstract clear(): void;

    public abstract fill<R extends T & Record<string | number, unknown>>(
        value: ((x: number, y: number, z: number) => R) | R,
    ): void;

    public abstract forEach(callback: (block: T, x: number, y: number, z: number) => unknown): boolean;

    public abstract get(x: number, y: number, z: number): T;

    public abstract mirror(orientation: "XY" | "XZ" | "YZ"): void;

    public abstract rotateCCW(): void;

    public abstract rotateCW(): void;

    public abstract set(x: number, y: number, z: number, value: T): void;

    public abstract setHolder(holder: Grid3Holder<T>): void;

    public abstract swap(ax: number, ay: number, az: number, bx: number, by: number, bz: number): void;

    public abstract transform(x: number, y: number, z: number, transformer: (value: T) => T): void;
}
