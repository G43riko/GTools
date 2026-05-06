import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SpatialHashGrid } from "./spatial-hash-grid.ts";

const bounds = { min: { x: 0, y: 0 }, max: { x: 100, y: 100 } };
const dimensions = { x: 10, y: 10 };

describe("SpatialHashGrid", () => {
    describe("newClient", () => {
        it("creates a client with the given position and size", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const client = grid.newClient({ x: 10, y: 10 }, { x: 5, y: 5 });
            expect(client.position).toEqual({ x: 10, y: 10 });
            expect(client.size).toEqual({ x: 5, y: 5 });
            expect(client.indices).toBeDefined();
        });
    });

    describe("findNear", () => {
        it("finds a client that was inserted at the same position", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const client = grid.newClient({ x: 50, y: 50 }, { x: 5, y: 5 });
            const result = grid.findNear({ x: 50, y: 50 }, { x: 5, y: 5 });
            expect(result).toContain(client);
        });

        it("returns empty array when no clients exist", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const result = grid.findNear({ x: 50, y: 50 }, { x: 5, y: 5 });
            expect(result).toHaveLength(0);
        });

        it("does not find a client in a completely different cell", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            grid.newClient({ x: 5, y: 5 }, { x: 2, y: 2 });
            // Search far away, in a cell that definitely doesn't overlap
            const result = grid.findNear({ x: 90, y: 90 }, { x: 2, y: 2 });
            expect(result).toHaveLength(0);
        });

        it("can find multiple clients in overlapping cells", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const c1 = grid.newClient({ x: 50, y: 50 }, { x: 5, y: 5 });
            const c2 = grid.newClient({ x: 52, y: 52 }, { x: 5, y: 5 });
            const result = grid.findNear({ x: 50, y: 50 }, { x: 10, y: 10 });
            expect(result).toContain(c1);
            expect(result).toContain(c2);
        });

        it("does not return duplicate clients", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const client = grid.newClient({ x: 50, y: 50 }, { x: 20, y: 20 });
            const result = grid.findNear({ x: 40, y: 40 }, { x: 30, y: 30 });
            const countOfClient = result.filter((c) => c === client).length;
            expect(countOfClient).toBe(1);
        });
    });

    describe("remove", () => {
        it("removes a client so it is no longer found", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const client = grid.newClient({ x: 50, y: 50 }, { x: 5, y: 5 });
            grid.remove(client);
            const result = grid.findNear({ x: 50, y: 50 }, { x: 5, y: 5 });
            expect(result).not.toContain(client);
        });
    });

    describe("updateClient", () => {
        it("moves a client so it appears in the new location", () => {
            const grid = new SpatialHashGrid(bounds, dimensions);
            const pos = { x: 50, y: 50 };
            const client = grid.newClient(pos, { x: 5, y: 5 });

            // Mutate position and update
            pos.x = 5;
            pos.y = 5;
            grid.updateClient(client);

            const nearNew = grid.findNear({ x: 5, y: 5 }, { x: 5, y: 5 });
            expect(nearNew).toContain(client);
        });
    });
});
