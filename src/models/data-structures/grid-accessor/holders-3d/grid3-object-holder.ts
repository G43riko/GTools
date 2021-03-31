import { getOrSetProperty } from "gtools/utils";

export class Grid3ObjectHolder<T> {
    private readonly data: { [x: number]: { [y: number]: { [z: number]: T } } } = {};

    public get(x: number, y: number, z: number): T {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        return column[z];
    }

    public set(x: number, y: number, z: number, value: T): void {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        column[z] = value;
    }

    public forEach(callback: (item: T, x: number, y: number, z: number) => void): void {
        Object.entries(this.data).forEach(([x, chunkRows]) => {
            Object.entries(chunkRows).forEach(([y, chunk]) => {
                Object.entries(chunk).forEach(([z, item]) => {
                    callback(item, +x, +y, +z);
                });
            });
        });
    }
}
