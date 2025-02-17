import { Grid2ArrayHolder } from "./grid2-array-holder.ts";
import type { Grid2Holder } from "./grid2-holder.ts";
import { Grid2MapHolder } from "./grid2-map-holder.ts";
import { Grid2ObjectHolder } from "./grid2-object-holder.ts";
import { Grid2ObjectMapHolder } from "./grid2-object-map-holder.ts";
import { Grid2StringHolder } from "./grid2-string-holder.ts";

const size = { x: 256, y: 256 };
const arrayHolder = Grid2ArrayHolder.initEmpty<number>(size.x, size.y, 0);
const mapHolder = Grid2MapHolder.initEmpty<number>(size.x, size.y, 0);
const objectHolder = new Grid2ObjectHolder<number>();
const stringHolder = new Grid2StringHolder<number>();
const objectMapHolder = new Grid2ObjectMapHolder<number>();

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

const holders: [holder: Grid2Holder<number>, name: string][] = [
    [arrayHolder, "arrayHolder"],
    [mapHolder, "mapHolder"],
    [objectHolder, "objectHolder"],
    [objectMapHolder, "objectMapHolder"],
    [stringHolder, "stringHolder"],
];

holders.forEach(([holder, name]) => {
    const testArr = createArray();

    Deno.bench(`${name}.set`, { group: "holder.set" }, () => {
        testArr.forEach((row, x) => {
            row.forEach((item, y) => {
                holder.set(x, y, item);
            });
        });
    });

    Deno.bench(`${name}.get`, { group: "holder.get" }, () => {
        for (let x = 0; x < size.x; x++) {
            for (let y = 0; y < size.y; y++) {
                holder.get(x, y);
            }
        }
    });
    Deno.bench(`${name}.forEach`, { group: "holder.forEach" }, () => {
        holder.forEach(() => true);
    });
});
