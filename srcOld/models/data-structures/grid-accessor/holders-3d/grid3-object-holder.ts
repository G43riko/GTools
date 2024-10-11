import { getOrSetProperty } from "../../../../utils/object-utils";
import { Grid3Holder } from "./grid3-holder";

export class Grid3ObjectHolder<T> implements Grid3Holder<T> {
    private data: { [x: number]: { [y: number]: { [z: number]: T } } } = {};
    private _length = 0;

    public get length(): number {
        return this._length;
    }

    public clear(): void {
        this.data = {};
        this._length = 0;
    }

    public setHolder(holder: Grid3Holder<T>): void {
        holder.forEach((item, x, y, z) => this.set(x, y, z, item));
    }

    public fill<R extends T & Record<string | number, unknown>>(
        value: ((x: number, y: number, z: number) => R) | R,
    ): void {
        if (typeof value === "function") {
            Object.entries(this.data).forEach(([x, chunkRows]) => {
                Object.entries(chunkRows).forEach(([y, chunk]) => {
                    Object.keys(chunk).forEach((z) => {
                        chunk[+z] = value(+x, +y, +z);
                    });
                });
            });
        } else {
            Object.values(this.data).forEach((chunkRows) => {
                Object.values(chunkRows).forEach((chunk) => {
                    Object.keys(chunk).forEach((z) => {
                        chunk[+z] = value;
                    });
                });
            });
        }
    }

    public get(x: number, y: number, z: number): T {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        return column[z];
    }

    public set(x: number, y: number, z: number, value: T): void {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        if (typeof column[z] === "undefined") {
            this._length++;
        }
        column[z] = value;
    }

    public transform(x: number, y: number, z: number, transformer: (value: T) => T): void {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});

        const newValue = transformer(column[z]);
        if (newValue) {
            if (typeof column[z] === "undefined") {
                this._length++;
            }
        } else if (column[z]) {
            this._length--;
        }
        column[z] = newValue;
    }

    public remove(x: number, y: number, z: number): void {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});
        if (column[z]) {
            this._length--;
        }
        delete column[z];
    }

    public swap(ax: number, ay: number, az: number, bx: number, by: number, bz: number): void {
        const tmp = this.data[ax][ay][az];
        this.data[ax][ay][az] = this.data[bx][by][bz];
        this.data[bx][by][bz] = tmp;
    }

    public forEach(callback: (item: T, x: number, y: number, z: number) => unknown): boolean {
        for (const [x, chunkRows] of Object.entries(this.data)) {
            for (const [y, chunk] of Object.entries(chunkRows)) {
                for (const [z, item] of Object.entries(chunk)) {
                    if (callback(item, +x, +y, +z) === false) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
