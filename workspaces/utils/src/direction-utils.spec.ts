import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { vector2ToDirection4 } from "./direction-utils.ts";
import { SimpleVector, Vector2 } from "@g43/math";
import { Direction4, Direction6, Direction7 } from "@g43/enums";
import {
    direction4ToVector2,
    getAdjacentPositionBy,
    getAdjacentPositionByData,
    getOppositeDirection4,
    getOppositeDirection6,
    Vector3ToDirection7,
} from "./direction-utils.ts"; // Replace with the correct path

describe("getOppositeDirection6", () => {
    it("should return the opposite direction for each Direction6 value", () => {
        expect(getOppositeDirection6(Direction6.DOWN)).toBe(Direction6.UP);
        expect(getOppositeDirection6(Direction6.LEFT)).toBe(Direction6.RIGHT);
        expect(getOppositeDirection6(Direction6.RIGHT)).toBe(Direction6.LEFT);
        expect(getOppositeDirection6(Direction6.UP)).toBe(Direction6.DOWN);
        expect(getOppositeDirection6(Direction6.FRONT)).toBe(Direction6.BACK);
        expect(getOppositeDirection6(Direction6.BACK)).toBe(Direction6.FRONT);
    });
});

describe("getOppositeDirection4", () => {
    it("should return the opposite direction for each Direction4 value", () => {
        expect(getOppositeDirection4(Direction4.DOWN)).toBe(Direction4.UP);
        expect(getOppositeDirection4(Direction4.LEFT)).toBe(Direction4.RIGHT);
        expect(getOppositeDirection4(Direction4.RIGHT)).toBe(Direction4.LEFT);
        expect(getOppositeDirection4(Direction4.UP)).toBe(Direction4.DOWN);
    });
});

describe("getAdjacentPositionByData", () => {
    it("should return the correct adjacent position for each Direction7 value", () => {
        const x = 1;
        const y = 2;
        const z = 3;
        const offset = 2;

        expect(getAdjacentPositionByData(x, y, z, Direction7.UP, offset)).toEqual(
            SimpleVector.create3(x, y + offset, z),
        );
        expect(getAdjacentPositionByData(x, y, z, Direction7.DOWN, offset)).toEqual(
            SimpleVector.create3(x, y - offset, z),
        );
        expect(getAdjacentPositionByData(x, y, z, Direction7.RIGHT, offset)).toEqual(
            SimpleVector.create3(x + offset, y, z),
        );
        expect(getAdjacentPositionByData(x, y, z, Direction7.LEFT, offset)).toEqual(
            SimpleVector.create3(x - offset, y, z),
        );
        expect(getAdjacentPositionByData(x, y, z, Direction7.FRONT, offset)).toEqual(
            SimpleVector.create3(x, y, z - offset),
        );
        expect(getAdjacentPositionByData(x, y, z, Direction7.BACK, offset)).toEqual(
            SimpleVector.create3(x, y, z + offset),
        );
        expect(getAdjacentPositionByData(x, y, z, Direction7.CENTER, offset)).toEqual(SimpleVector.create3(x, y, z)); // CENTER should not change position

        // Default offset = 1
        expect(getAdjacentPositionByData(x, y, z, Direction7.UP)).toEqual(SimpleVector.create3(x, y + 1, z));
    });

    it("should throw an error for invalid Direction7 values", () => {
        expect(() => getAdjacentPositionByData(1, 2, 3, "INVALID_DIRECTION" as any)).toThrow(
            "Invalid direction 'INVALID_DIRECTION'",
        );
    });
});

describe("getAdjacentPositionBy", () => {
    it("should call getAdjacentPositionByData with the correct parameters", () => {
        const position = SimpleVector.create3(1, 2, 3);
        const direction = Direction7.UP;
        const offset = 2;

        const result = getAdjacentPositionBy(position, direction, offset);

        expect(result).toEqual(getAdjacentPositionByData(position.x, position.y, position.z, direction, offset));
    });
});

describe("direction4ToVector2", () => {
    it("should return the correct Vector2 for each Direction4 value", () => {
        expect(direction4ToVector2(Direction4.LEFT)).toEqual(Vector2.LEFT);
        expect(direction4ToVector2(Direction4.RIGHT)).toEqual(Vector2.RIGHT);
        expect(direction4ToVector2(Direction4.UP)).toEqual(Vector2.UP);
        expect(direction4ToVector2(Direction4.DOWN)).toEqual(Vector2.DOWN);
    });

    it("should throw an error for invalid Direction4 values", () => {
        expect(() => direction4ToVector2("INVALID_DIRECTION" as any)).toThrow(
            "Unknown direction 'INVALID_DIRECTION'",
        );
    });
});

describe("Vector3ToDirection7", () => {
    it("should return the correct Direction7 for a given SimpleVector3", () => {
        expect(Vector3ToDirection7(SimpleVector.create3(0, 1, 0))).toBe(Direction7.UP);
        expect(Vector3ToDirection7(SimpleVector.create3(0, -1, 0))).toBe(Direction7.DOWN);
        expect(Vector3ToDirection7(SimpleVector.create3(1, 0, 0))).toBe(Direction7.RIGHT);
        expect(Vector3ToDirection7(SimpleVector.create3(-1, 0, 0))).toBe(Direction7.LEFT);
        expect(Vector3ToDirection7(SimpleVector.create3(0, 0, 1))).toBe(Direction7.BACK);
        expect(Vector3ToDirection7(SimpleVector.create3(0, 0, -1))).toBe(Direction7.FRONT);
        expect(Vector3ToDirection7(SimpleVector.create3(0, 0, 0))).toBe(Direction7.CENTER); // or throw an error, depending on desired behavior
        // expect(Vector3ToDirection7(SimpleVector.create3(1, 1, 0))).toBe(Direction7.CENTER); // Diagonal, should return CENTER
        // expect(Vector3ToDirection7(SimpleVector.create3(1, 0, 1))).toBe(Direction7.CENTER); // Diagonal, should return CENTER
        // expect(Vector3ToDirection7(SimpleVector.create3(0, 1, 1))).toBe(Direction7.CENTER); // Diagonal, should return CENTER
    });
});
describe("Directions", () => {
    describe("vector2ToDirection4", () => {
        it("should test vector2ToDirection4", () => {
            expect(vector2ToDirection4({ x: 0, y: 1 })).toBe(Direction4.UP);
            expect(vector2ToDirection4({ x: 0, y: -1 })).toBe(Direction4.DOWN);
            expect(vector2ToDirection4({ x: 1, y: 0 })).toBe(Direction4.RIGHT);
            expect(vector2ToDirection4({ x: -1, y: 0 })).toBe(Direction4.LEFT);
        });
        it("should test vector2ToDirection4", () => {
            expect(vector2ToDirection4({ x: 1, y: 1.000001 })).toBe(Direction4.UP);
            expect(vector2ToDirection4({ x: 1, y: 0.999999 })).toBe(Direction4.RIGHT);
        });
    });
});
