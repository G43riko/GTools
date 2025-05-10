import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { SimpleVector } from "./simple-vector.ts";

describe("SimpleVector", () => {
    describe("2D vector creation", () => {
        it("create2", () => {
            const v = SimpleVector.create2(3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("empty2", () => {
            const v = SimpleVector.empty2();
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
        });

        it("createReadonly2", () => {
            const v = SimpleVector.createReadonly2(3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("clone2", () => {
            const original = { x: 3, y: 4 };
            const clone = SimpleVector.clone2(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            // Ensure it's a different object
            original.x = 5;
            assertEquals(clone.x, 3);
        });

        it("cloneReadonly2", () => {
            const original = { x: 3, y: 4 };
            const clone = SimpleVector.cloneReadonly2(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
        });

        it("createRandom2Int", () => {
            const v = SimpleVector.createRandom2Int(10, 20);
            // Check that values are within range
            assertEquals(v.x >= 0 && v.x <= 10, true);
            assertEquals(v.y >= 0 && v.y <= 20, true);
            // Check that values are integers
            assertEquals(Math.floor(v.x), v.x);
            assertEquals(Math.floor(v.y), v.y);
        });

        it("createDir", () => {
            const v = SimpleVector.createDir(Math.PI / 2);
            assertEquals(Math.abs(v.x) < 0.0001, true); // Close to 0
            assertEquals(Math.abs(v.y - 1) < 0.0001, true); // Close to 1
        });

        it("assign2", () => {
            const dest = { x: 0, y: 0 };
            const source = { x: 3, y: 4 };
            SimpleVector.assign2(dest, source);
            assertEquals(dest.x, 3);
            assertEquals(dest.y, 4);
        });
    });

    describe("3D vector creation", () => {
        it("create3", () => {
            const v = SimpleVector.create3(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("empty3", () => {
            const v = SimpleVector.empty3();
            assertEquals(v.x, 0);
            assertEquals(v.y, 0);
            assertEquals(v.z, 0);
        });

        it("createReadonly3", () => {
            const v = SimpleVector.createReadonly3(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("clone3", () => {
            const original = { x: 3, y: 4, z: 5 };
            const clone = SimpleVector.clone3(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            assertEquals(clone.z, 5);
            // Ensure it's a different object
            original.x = 6;
            assertEquals(clone.x, 3);
        });

        it("cloneReadonly3", () => {
            const original = { x: 3, y: 4, z: 5 };
            const clone = SimpleVector.cloneReadonly3(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            assertEquals(clone.z, 5);
        });

        it("createDirXY", () => {
            const v = SimpleVector.createDirXY(Math.PI / 2, 5);
            assertEquals(Math.abs(v.x) < 0.0001, true); // Close to 0
            assertEquals(Math.abs(v.y - 1) < 0.0001, true); // Close to 1
            assertEquals(v.z, 5);
        });

        it("assign3", () => {
            const dest = { x: 0, y: 0, z: 0 };
            const source = { x: 3, y: 4, z: 5 };
            SimpleVector.assign3(dest, source);
            assertEquals(dest.x, 3);
            assertEquals(dest.y, 4);
            assertEquals(dest.z, 5);
        });
    });

    describe("4D vector creation", () => {
        it("create4", () => {
            const v = SimpleVector.create4(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("createReadonly4", () => {
            const v = SimpleVector.createReadonly4(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("clone4", () => {
            const original = { x: 3, y: 4, z: 5, w: 6 };
            const clone = SimpleVector.clone4(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            assertEquals(clone.z, 5);
            assertEquals(clone.w, 6);
            // Ensure it's a different object
            original.x = 7;
            assertEquals(clone.x, 3);
        });

        it("cloneReadonly4", () => {
            const original = { x: 3, y: 4, z: 5, w: 6 };
            const clone = SimpleVector.cloneReadonly4(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.y, 4);
            assertEquals(clone.z, 5);
            assertEquals(clone.w, 6);
        });

        it("assign4", () => {
            const dest = { x: 0, y: 0, z: 0, w: 0 };
            const source = { x: 3, y: 4, z: 5, w: 6 };
            SimpleVector.assign4(dest, source);
            assertEquals(dest.x, 3);
            assertEquals(dest.y, 4);
            assertEquals(dest.z, 5);
            assertEquals(dest.w, 6);
        });
    });

    describe("XZ vector creation", () => {
        it("createXZ", () => {
            const v = SimpleVector.createXZ(3, 5);
            assertEquals(v.x, 3);
            assertEquals(v.z, 5);
        });

        it("createReadonlyXZ", () => {
            const v = SimpleVector.createReadonlyXZ(3, 5);
            assertEquals(v.x, 3);
            assertEquals(v.z, 5);
        });

        it("cloneXZ", () => {
            const original = { x: 3, z: 5 };
            const clone = SimpleVector.cloneXZ(original);
            assertEquals(clone.x, 3);
            assertEquals(clone.z, 5);
            // Ensure it's a different object
            original.x = 7;
            assertEquals(clone.x, 3);
        });
    });

    describe("Generic create methods", () => {
        it("create with 2 parameters", () => {
            const v = SimpleVector.create(3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("create with 3 parameters", () => {
            const v = SimpleVector.create(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("create with 4 parameters", () => {
            const v = SimpleVector.create(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });

        it("createReadonly with 2 parameters", () => {
            const v = SimpleVector.createReadonly(3, 4);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
        });

        it("createReadonly with 3 parameters", () => {
            const v = SimpleVector.createReadonly(3, 4, 5);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
        });

        it("createReadonly with 4 parameters", () => {
            const v = SimpleVector.createReadonly(3, 4, 5, 6);
            assertEquals(v.x, 3);
            assertEquals(v.y, 4);
            assertEquals(v.z, 5);
            assertEquals(v.w, 6);
        });
    });
});
