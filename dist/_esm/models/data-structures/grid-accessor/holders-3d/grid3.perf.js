import "mocha";
import { Grid3ArrayHolder } from "./grid3-array-holder";
import { Grid3HashHolder } from "./grid3-hash-holder";
import { Grid3MapHolder } from "./grid3-map-holder";
import { Grid3ObjectHolder } from "./grid3-object-holder";
describe("Grid3", () => {
    describe("default", () => {
        const sizeOne = 128;
        const size = { x: sizeOne, y: sizeOne, z: sizeOne };
        const arrayHolder = Grid3ArrayHolder.initEmpty(size.x, size.y, size.z, 0);
        const mapHolder = Grid3MapHolder.initEmpty(size.x, size.y, size.z, 0);
        const objectHolder = new Grid3ObjectHolder();
        const hashHolder = new Grid3HashHolder();
        const sorts = [
            arrayHolder,
            objectHolder,
            mapHolder,
        ];
        const createArray = () => {
            const result = new Array(size.x);
            for (let i = 0; i < size.x; i++) {
                result[i] = new Array(size.y);
                for (let j = 0; j < size.y; j++) {
                    result[i][j] = new Array(size.z);
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
                const start = Date.now();
                testArr.forEach((row, x) => {
                    row.forEach((column, y) => {
                        column.forEach((item, z) => {
                            holder.set(x, y, z, item);
                        });
                    });
                });
                const diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test getting", () => {
            sorts.forEach((holder) => {
                const start = Date.now();
                for (let x = 0; x < size.x; x++) {
                    for (let y = 0; y < size.y; y++) {
                        for (let z = 0; z < size.z; z++) {
                            holder.get(x, y, z);
                        }
                    }
                }
                const diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test iterating", () => {
            sorts.forEach((holder) => {
                const start = Date.now();
                holder.forEach(() => null);
                const diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
    });
});
//# sourceMappingURL=grid3.perf.js.map