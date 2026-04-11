import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SpatialHashGridFast } from "./spatial-hash-grid-fast.ts";

const bounds = { min: { x: 0, y: 0 }, max: { x: 100, y: 100 } };
const dimensions = { x: 10, y: 10 };

describe("SpatialHashGridFast", () => {
    describe("newClient", () => {
        it("creates a client with the given position and size", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const client = grid.newClient({ x: 10, y: 10 }, { x: 5, y: 5 });
            expect(client.position).toEqual({ x: 10, y: 10 });
            expect(client.size).toEqual({ x: 5, y: 5 });
            expect(client.indices).toBeDefined();
            expect(client.queryId).toBe(-1);
        });
    });

    describe("findNear", () => {
        it("finds a client inserted at the same position", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const client = grid.newClient({ x: 50, y: 50 }, { x: 5, y: 5 });
            const result = grid.findNear({ x: 50, y: 50 }, { x: 5, y: 5 });
            expect(result).toContain(client);
        });

        it("returns empty array when no clients exist", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const result = grid.findNear({ x: 50, y: 50 }, { x: 5, y: 5 });
            expect(result).toHaveLength(0);
        });

        it("does not find a client in a completely different cell", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            grid.newClient({ x: 5, y: 5 }, { x: 2, y: 2 });
            const result = grid.findNear({ x: 90, y: 90 }, { x: 2, y: 2 });
            expect(result).toHaveLength(0);
        });

        it("finds multiple clients in overlapping cells", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const c1 = grid.newClient({ x: 50, y: 50 }, { x: 5, y: 5 });
            const c2 = grid.newClient({ x: 52, y: 52 }, { x: 5, y: 5 });
            const result = grid.findNear({ x: 50, y: 50 }, { x: 10, y: 10 });
            expect(result).toContain(c1);
            expect(result).toContain(c2);
        });

        it("does not return duplicate clients", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const client = grid.newClient({ x: 50, y: 50 }, { x: 20, y: 20 });
            const result = grid.findNear({ x: 40, y: 40 }, { x: 30, y: 30 });
            const countOfClient = result.filter((c) => c === client).length;
            expect(countOfClient).toBe(1);
        });
    });

    describe("remove", () => {
        it("removes a client so it is no longer found", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const client = grid.newClient({ x: 50, y: 50 }, { x: 5, y: 5 });
            grid.remove(client);
            const result = grid.findNear({ x: 50, y: 50 }, { x: 5, y: 5 });
            expect(result).not.toContain(client);
        });
    });

    describe("updateClient", () => {
        it("re-indexes the client after its position changes", () => {
            const grid = new SpatialHashGridFast(bounds, dimensions);
            const pos = { x: 50, y: 50 };
            const client = grid.newClient(pos, { x: 5, y: 5 });

            pos.x = 5;
            pos.y = 5;
            grid.updateClient(client);

            const nearNew = grid.findNear({ x: 5, y: 5 }, { x: 5, y: 5 });
            expect(nearNew).toContain(client);
        });
    });
});
