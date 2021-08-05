import { getOrSetProperty } from "../../../../utils/object-utils";
import { Grid3Holder } from "./grid3-holder";

export class Grid3ObjectHolder<T> implements Grid3Holder<T> {
    private data: { [x: number]: { [y: number]: { [z: number]: T } } } = {};
    private _length                                                    = 0;

    public get length(): number {
        return this._length;
    }

    public clear(): void {
        this.data    = {};
        this._length = 0;
    }

    public get(x: number, y: number, z: number): T {
        const row    = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        return column[z];
    }

    public set(x: number, y: number, z: number, value: T): void {
        const row    = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        if (typeof column[z] === "undefined") {
            this._length++;
        }
        column[z] = value;
    }

    public remove(x: number, y: number,  z: number): void {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});
        if (column[z]) {
            this._length--;
        }
        delete column[z];
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
