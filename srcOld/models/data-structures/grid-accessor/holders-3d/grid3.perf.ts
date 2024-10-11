import { expect } from "chai";
import "mocha";
import { Grid3ArrayHolder } from "./grid3-array-holder";
import { Grid3HashHolder } from "./grid3-hash-holder";
import { Grid3Holder } from "./grid3-holder";
import { Grid3MapHolder } from "./grid3-map-holder";
import { Grid3ObjectHolder } from "./grid3-object-holder";

// eslint-disable-next-line @typescript-eslint/unbound-method
const now: () => number = typeof performance !== "undefined" ? performance.now : Date.now;

describe("Grid3", () => {
    describe("default", () => {
        const sizeOne = 128;
        const size = { x: sizeOne, y: sizeOne, z: sizeOne };
        const arrayHolder = Grid3ArrayHolder.initEmpty<number>(size.x, size.y, size.z, 0);
        const mapHolder = Grid3MapHolder.initEmpty<number>(size.x, size.y, size.z, 0);
        const objectHolder = new Grid3ObjectHolder<number>();
        const hashHolder = new Grid3HashHolder<number>();
        const sorts: Grid3Holder<number>[] = [
            arrayHolder,
            objectHolder,
            hashHolder,
            mapHolder,
        ];

        const createArray = (): number[][][] => {
            const result = new Array<number[][]>(size.x);
            for (let i = 0; i < size.x; i++) {
                result[i] = new Array<number[]>(size.y);
                for (let j = 0; j < size.y; j++) {
                    result[i][j] = new Array<number>(size.z);
                    for (let k = 0; k < size.z; k++) {
                        result[i][j][k] = Math.random();
                    }
                }
            }

            return result;
        };

        it("It should test adding", () => {
            sorts.forEach((holder) => {
                const testArr = createArray();
                const start = now();

                testArr.forEach((row, x) => {
                    row.forEach((column, y) => {
                        column.forEach((item, z) => {
                            holder.set(x, y, z, item);
                        });
                    });
                });

                const diff = now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test getting", () => {
            sorts.forEach((holder) => {
                const start = now();

                for (let x = 0; x < size.x; x++) {
                    for (let y = 0; y < size.y; y++) {
                        for (let z = 0; z < size.z; z++) {
                            holder.get(x, y, z);
                        }
                    }
                }

                const diff = now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test filling", () => {
            sorts.forEach((holder) => {
                const start = now();

                holder.fill(123 as any);
                holder.fill(() => (123 as any));

                const diff = now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test iterating", () => {
            sorts.forEach((holder) => {
                const start = now();

                holder.forEach(() => null);

                const diff = now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });

            const iterateUntil = (value: number, callback: (x: number, y: number, z: number) => unknown): void => {
                for (let i = 0; i < value; i++) {
                    for (let j = 0; j < value; j++) {
                        for (let k = 0; k < value; k++) {
                            callback(i, j, k);
                        }
                    }
                }
            };

            const length = 9;
            const results: { [key in number]: string } = {};
            iterateUntil(length, (x, y, z) => results[x * 100 + y * 10 + z] = `${x}_${y}_${z}`);
            sorts.forEach((holder) => {
                holder.clear();
                holder.set(0, 0, 0, 0);
                iterateUntil(length, (x, y, z) => holder.set(x, y, z, x * 100 + y * 10 + z));
                const start = now();

                holder.forEach((item, x, y, z) => {
                    if (x >= length || y >= length || z >= length) {
                        return;
                    }
                    const stringToCompare = results[item];
                    if (stringToCompare) {
                        expect(`${x}_${y}_${z}`).to.be.equal(stringToCompare);
                    }
                });

                const diff = now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
    });
});
