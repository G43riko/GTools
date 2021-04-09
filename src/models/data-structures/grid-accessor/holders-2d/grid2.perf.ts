import "mocha";
import { Grid2ArrayHolder } from "./grid2-array-holder";
import { Grid2HashHolder } from "./grid2-hash-holder";
import { Grid2Holder } from "./grid2-holder";
import { Grid2MapHolder } from "./grid2-map-holder";
import { Grid2ObjectHolder } from "./grid2-object-holder";
import { Grid2ObjectMapHolder } from "./grid2-object-map-holder";
import { Grid2StringHolder } from "./grid2-string-holder";

describe("Grid2", () => {
    describe("default", () => {

        const size            = {x: 256, y: 256};
        const arrayHolder     = Grid2ArrayHolder.initEmpty<number>(size.x, size.y, 0);
        const mapHolder       = Grid2MapHolder.initEmpty<number>(size.x, size.y, 0);
        const hashHolder      = new Grid2HashHolder<number>();
        const objectHolder    = new Grid2ObjectHolder<number>();
        const stringHolder    = new Grid2StringHolder<number>();
        const objectMapHolder = new Grid2ObjectMapHolder<number>();

        const sorts: Grid2Holder<number>[] = [
            arrayHolder,
            mapHolder,
            objectHolder,
            objectMapHolder,
            // hashHolder,
            stringHolder,
        ];

        const createArray = (): number[][] => {
            const result = new Array<number[]>(size.x);
            for (let i = 0; i < size.x; i++) {
                result[i] = new Array<number>(size.y);
                for (let j = 0; j < size.y; j++) {
                    result[i][j] = Math.random();
                }
            }

            return result;
        };

        it("It should test adding", () => {
            sorts.forEach((holder) => {
                const testArr = createArray();
                const start   = Date.now();

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

                holder.forEach(() => null);

                const diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");

            });
        });
    });
});
