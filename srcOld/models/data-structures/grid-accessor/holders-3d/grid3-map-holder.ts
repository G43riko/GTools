import { SimpleVector3 } from "../../../../math";
import { GridBlockItemFilter } from "../grid-filters";
import { Grid3Block, Grid3Holder } from "./grid3-holder";

export class Grid3MapHolder<T> implements Grid3Holder<T> {
    public readonly length = this.data.length * this.data[0].length * this.data[0][0].length;

    public constructor(public readonly data: T[][][]) {
    }

    public static initEmpty<S>(
        x: number,
        y: number,
        z: number,
        defaultValue: S = null as unknown as S,
    ): Grid3MapHolder<S> {
        const result = new Array<S[][]>(x);
        for (let i = 0; i < x; i++) {
            const resA = new Array<S[]>(y);
            for (let j = 0; j < y; j++) {
                const resB = new Array<S>(z);
                for (let k = 0; k < z; k++) {
                    resB[k] = defaultValue;
                }
                resA[j] = resB;
            }
            result[i] = resA;
        }

        return new Grid3MapHolder<S>(result);
    }

    public clear(): void {
        for (const row of this.data) {
            for (const column of row) {
                for (let k = 0; k < column.length; k++) {
                    column[k] = undefined as unknown as T;
                }
            }
        }
    }

    public setHolder(holder: Grid3Holder<T>): void {
        holder.forEach((item, x, y, z) => this.set(x, y, z, item));
    }

    public fill<R extends T & Record<string | number, unknown>>(
        value: ((x: number, y: number, z: number) => R) | R,
    ): void {
        if (typeof value === "function") {
            this.data.forEach((row, x) => {
                row.forEach((column, y) => {
                    for (let z = 0; z < column.length; z++) {
                        column[z] = value(x, y, z);
                    }
                });
            });
        } else {
            for (const row of this.data) {
                for (const column of row) {
                    column.fill(value);
                }
            }
        }
    }

    public swap(ax: number, ay: number, az: number, bx: number, by: number, bz: number): void {
        const tmp = this.data[ax][ay][az];
        this.data[ax][ay][az] = this.data[bx][by][bz];
        this.data[bx][by][bz] = tmp;
    }

    public get(x: number, y: number, z: number): T {
        return this.data[x]?.[y]?.[z];
    }

    public set(x: number, y: number, z: number, value: T): void {
        this.data[x][y][z] = value;
    }

    public transform(x: number, y: number, z: number, transformer: (value: T) => T): void {
        this.data[x][y][z] = transformer(this.data[x][y][z]);
    }

    public getBetween(pointA: SimpleVector3, pointB: SimpleVector3): T[] {
        const min = {
            x: Math.min(pointA.x, pointB.x),
            y: Math.min(pointA.y, pointB.y),
            z: Math.min(pointA.z, pointB.z),
        };
        const max = {
            x: Math.max(pointA.x, pointB.x),
            y: Math.max(pointA.y, pointB.y),
            z: Math.max(pointA.z, pointB.z),
        };

        return this.getAreaInternally(min, {
            x: max.x - min.x + 1,
            y: max.y - min.y + 1,
            z: max.z - min.z + 1,
        }, "data");
    }

    public getArea(position: SimpleVector3, size: SimpleVector3): T[] {
        return this.getAreaInternally(position, size, "data");
    }

    public setData(data: T[][][]): void {
        this.data.splice(0, this.data.length);
        Object.assign(this.data, data);
    }

    private getAreaInternally(position: SimpleVector3, size: SimpleVector3, select: "data"): T[];
    private getAreaInternally(position: SimpleVector3, size: SimpleVector3, select: "block"): Grid3Block<T>[];
    private getAreaInternally(
        position: SimpleVector3,
        size: SimpleVector3,
        select: "data" | "block",
    ): (number | T | Grid3Block<T>)[] {
        const result = [];
        if (select === "block") {
            for (let i = 0; i < size.x; i++) {
                for (let j = 0; j < size.y; j++) {
                    for (let k = 0; k < size.z; k++) {
                        const x = i + position.x;
                        const y = j + position.y;
                        const z = k + position.z;
                        result.push({
                            item: this.data[x][y][z],
                            coordinates: { x, y, z },
                        });
                    }
                }
            }

            return result;
        }
        for (let i = 0; i < size.x; i++) {
            for (let j = 0; j < size.y; j++) {
                for (let k = 0; k < size.z; k++) {
                    const x = i + position.x;
                    const y = j + position.y;
                    const z = k + position.z;
                    result.push(this.data[x][y][z]);
                }
            }
        }

        return result;
    }

    public forEach(callback: (block: T, x: number, y: number, z: number) => void | boolean): boolean {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                for (let k = 0; k < this.data[i][j].length; k++) {
                    if (callback(this.data[i][j][k], i, j, k) === false) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    public getRandomBlock(filter?: GridBlockItemFilter<T>): Grid3Block<T> | undefined {
        let limit = 1000;
        while (limit-- >= 0) {
            const x = Math.floor(Math.random() * this.data.length);
            const y = Math.floor(Math.random() * this.data[x].length);
            const z = Math.floor(Math.random() * this.data[x][y].length);
            const item = this.data[x][y][z];

            if (filter && !filter(item)) {
                continue;
            }

            return {
                item,
                coordinates: { x, y, z },
            };
        }
    }
}
