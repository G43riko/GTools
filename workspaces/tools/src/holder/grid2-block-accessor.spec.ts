import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Grid2ArrayHolder } from "./2d/grid2-array-holder.ts";
import { Grid2BlockAccessor } from "./grid2-block-accessor.ts";

describe("Grid2BlockAccessor", () => {
    // 3×3 grid:
    //  a b c
    //  d e f
    //  g h i
    const holder = new Grid2ArrayHolder<string>(
        { x: 3, y: 3 },
        ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
    );

    function accessor(x: number, y: number): Grid2BlockAccessor<string> {
        return new Grid2BlockAccessor(holder, { x, y });
    }

    describe("check", () => {
        it("passes the cell value to the filter", () => {
            expect(accessor(0, 0).check((v) => v === "a")).toBe(true);
            expect(accessor(0, 0).check((v) => v === "z")).toBe(false);
        });

        it("checks the correct cell in the middle", () => {
            expect(accessor(1, 1).check((v) => v === "e")).toBe(true);
        });
    });

    describe("getByOffset", () => {
        it("returns an accessor offset by (1, 0)", () => {
            const next = accessor(0, 0).getByOffset(1, 0);
            expect(next.check((v) => v === "b")).toBe(true);
        });

        it("returns an accessor offset by (0, -1) (moving down in grid coordinates)", () => {
            // getByOffset subtracts y, so offset (0, -1) adds 1 to the y coordinate
            const next = accessor(0, 0).getByOffset(0, -1);
            expect(next.check((v) => v === "d")).toBe(true);
        });
    });

    describe("top", () => {
        it("points to the cell with y-1 (one row up in grid)", () => {
            // top uses getByOffset(0, -1), which subtracts -1 from y → y + 1
            // For cell (1,0), top is (1,1) which holds 'e'
            expect(accessor(1, 0).top.check((v) => v === "e")).toBe(true);
        });
    });

    describe("bottom", () => {
        it("points to the cell with y+1 (one row down in grid)", () => {
            // bottom uses getByOffset(0, 1), which subtracts 1 from y → y - 1
            // For cell (1,1), bottom is (1,0) which holds 'b'
            expect(accessor(1, 1).bottom.check((v) => v === "b")).toBe(true);
        });
    });

    describe("left", () => {
        it("points to the cell at x-1", () => {
            // left uses getByOffset(-1, 0)
            expect(accessor(1, 0).left.check((v) => v === "a")).toBe(true);
        });
    });

    describe("right", () => {
        it("points to the cell at x+1", () => {
            // right uses getByOffset(1, 0)
            expect(accessor(0, 0).right.check((v) => v === "b")).toBe(true);
        });
    });
});
