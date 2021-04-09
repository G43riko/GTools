import "mocha";
import { Grid2ArrayHolder } from "./grid2-array-holder";
import { Grid2HashHolder } from "./grid2-hash-holder";
import { Grid2MapHolder } from "./grid2-map-holder";
import { Grid2ObjectHolder } from "./grid2-object-holder";
import { Grid2ObjectMapHolder } from "./grid2-object-map-holder";
import { Grid2StringHolder } from "./grid2-string-holder";
describe("Grid2", () => {
    describe("default", () => {
        const size = { x: 256, y: 256 };
        const arrayHolder = Grid2ArrayHolder.initEmpty(size.x, size.y, 0);
        const mapHolder = Grid2MapHolder.initEmpty(size.x, size.y, 0);
        const hashHolder = new Grid2HashHolder();
        const objectHolder = new Grid2ObjectHolder();
        const stringHolder = new Grid2StringHolder();
        const objectMapHolder = new Grid2ObjectMapHolder();
        const sorts = [
            arrayHolder,
            mapHolder,
            objectHolder,
            objectMapHolder,
            stringHolder,
        ];
        const createArray = () => {
            const result = new Array(size.x);
            for (let i = 0; i < size.x; i++) {
                result[i] = new Array(size.y);
                for (let j = 0; j < size.y; j++) {
                    result[i][j] = Math.random();
                }
            }
            return result;
        };
        it("It should test adding", () => {
            sorts.forEach((holder) => {
                const testArr = createArray();
                const start = Date.now();
                testArr.forEach((row, x) => {
                    row.forEach((item, y) => {
                        holder.set(x, y, item);
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
                        holder.get(x, y);
                    }
                }
                const diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test iterating", () => {
            sorts.forEach((holder) => {
                const start = Date.now();
                const diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
    });
});
//# sourceMappingURL=grid2.perf.js.map