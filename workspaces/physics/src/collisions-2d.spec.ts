import type { Pair } from "@g43/types";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import {
    circleCircle2dCollision,
    circleRect2dCollision,
    lineLine2dCollision,
    lineLine2dCollision2,
    lineRectangle2dCollision,
    pointCircle2dCollision,
    pointMultiPolygon2dCollision,
    pointPolygon2dCollision2,
    pointRect2dCollision,
    pointRectMinMax2dCollision,
    rectRect2dCollision,
} from "./collisions-2d.ts";

describe("Collisions2d", () => {
    describe("point-rect", () => {
        it("It should test point inside rect", () => {
            expect(pointRect2dCollision(0, 0, 0, 0, 10, 10)).toBeTruthy();
            expect(pointRect2dCollision(10, 0, 0, 0, 10, 10)).toBeTruthy();
            expect(pointRect2dCollision(0, 10, 0, 0, 10, 10)).toBeTruthy();
            expect(pointRect2dCollision(10, 10, 0, 0, 10, 10)).toBeTruthy();
            expect(pointRect2dCollision(5, 5, 0, 0, 10, 10)).toBeTruthy();
        });
        it("It should test point outside rect", () => {
            expect(pointRect2dCollision(-1, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(11, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(5, -1, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(5, 11, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(-1, -1, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(11, -1, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(-1, 11, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRect2dCollision(11, 11, 0, 0, 10, 10)).toBeFalsy();
        });
    });

    describe("rect-rect", () => {
        it("It should test same rectangles", () => {
            expect(rectRect2dCollision(0, 0, 10, 10, 0, 0, 10, 10)).toBeTruthy();
        });
        it("It should test touching rectangles rectangles", () => {
            expect(rectRect2dCollision(0, 0, 10, 10, 10, 0, 10, 10)).toBeTruthy();
            expect(rectRect2dCollision(0, 0, 10, 10, 0, 10, 10, 10)).toBeTruthy();
            expect(rectRect2dCollision(0, 0, 10, 10, 10, 10, 10, 10)).toBeTruthy();
            expect(rectRect2dCollision(0, 0, 10, 10, -10, 0, 10, 10)).toBeTruthy();
            expect(rectRect2dCollision(0, 0, 10, 10, 0, -10, 10, 10)).toBeTruthy();
            expect(rectRect2dCollision(0, 0, 10, 10, -10, -10, 10, 10)).toBeTruthy();
        });
        it("It should test not touching rectangles", () => {
            expect(rectRect2dCollision(0, 0, 10, 10, 11, 0, 10, 10)).toBeFalsy();
            expect(rectRect2dCollision(0, 0, 10, 10, 0, 11, 10, 10)).toBeFalsy();
            expect(rectRect2dCollision(0, 0, 10, 10, 11, 11, 10, 10)).toBeFalsy();
            expect(rectRect2dCollision(0, 0, 10, 10, -11, 0, 10, 10)).toBeFalsy();
            expect(rectRect2dCollision(0, 0, 10, 10, 0, -11, 10, 10)).toBeFalsy();
            expect(rectRect2dCollision(0, 0, 10, 10, -11, -11, 10, 10)).toBeFalsy();
        });
    });

    describe("circle-circle", () => {
        it("It should test same circles", () => {
            expect(circleCircle2dCollision(0, 0, 10, 0, 0, 10)).toBeTruthy();
        });
        it("It should test touching circles circles", () => {
            expect(circleCircle2dCollision(0, 0, 10, 20, 0, 10)).toBeTruthy();
            expect(circleCircle2dCollision(0, 0, 10, 0, 20, 10)).toBeTruthy();
            expect(circleCircle2dCollision(0, 0, 10, -20, 0, 10)).toBeTruthy();
            expect(circleCircle2dCollision(0, 0, 10, 0, -20, 10)).toBeTruthy();
        });
        it("It should test not touching circles", () => {
            expect(circleCircle2dCollision(0, 0, 10, 21, 0, 10)).toBeFalsy();
            expect(circleCircle2dCollision(0, 0, 10, 0, 21, 10)).toBeFalsy();
            expect(circleCircle2dCollision(0, 0, 10, 20, 20, 10)).toBeFalsy();
            expect(circleCircle2dCollision(0, 0, 10, -21, 0, 10)).toBeFalsy();
            expect(circleCircle2dCollision(0, 0, 10, 0, -21, 10)).toBeFalsy();
            expect(circleCircle2dCollision(0, 0, 10, -20, -20, 10)).toBeFalsy();
        });
    });

    describe("point-circle", () => {
        it("It should test point inside circle", () => {
            expect(pointCircle2dCollision(-10, 0, 0, 0, 10)).toBeTruthy();
            expect(pointCircle2dCollision(0, -10, 0, 0, 10)).toBeTruthy();
            expect(pointCircle2dCollision(10, 0, 0, 0, 10)).toBeTruthy();
            expect(pointCircle2dCollision(0, 10, 0, 0, 10)).toBeTruthy();
            expect(pointCircle2dCollision(0, 0, 0, 0, 10)).toBeTruthy();
        });
        it("It should test point outside rect", () => {
            expect(pointCircle2dCollision(11, 0, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(-11, 0, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(0, 11, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(0, -11, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(10, 10, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(-10, 10, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(10, -10, 0, 0, 10)).toBeFalsy();
            expect(pointCircle2dCollision(-10, -10, 0, 0, 10)).toBeFalsy();
        });
    });

    describe("line-rect", () => {
        /**
         * *---*
         * |   |
         * | x-+-x
         * |   |
         * *---*
         */
        it("it should test line intersecting with one point", () => {
            expect(lineRectangle2dCollision(5, 5, 15, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(5, 5, -5, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(5, 15, 5, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(5, -5, 5, 5, 0, 0, 10, 10)).toBeTruthy();
        });
        /**
         *   *---*
         *   |   |
         * x-+---+-x
         *   |   |
         *   *---*
         */
        it("it should test line intersecting with two points", () => {
            expect(lineRectangle2dCollision(-5, 5, 15, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(5, -5, 5, 15, 0, 0, 10, 10)).toBeTruthy();
        });
        it("it should test diagonal line intersecting with two points", () => {
            // bottom left corner
            expect(lineRectangle2dCollision(-1, 1, 1, -1, 0, 0, 10, 10)).toBeTruthy();
            // top right corner
            expect(lineRectangle2dCollision(9, 11, 11, 9, 0, 0, 10, 10)).toBeTruthy();
            // bottom right corner
            expect(lineRectangle2dCollision(11, 1, 9, -1, 0, 0, 10, 10)).toBeTruthy();
            // top left corner
            expect(lineRectangle2dCollision(-1, 9, 1, 11, 0, 0, 10, 10)).toBeTruthy();
        });
        it("it should test lying on edge", () => {
            // exactly on line
            expect(lineRectangle2dCollision(0, 0, 0, 10, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(0, 0, 10, 0, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(10, 0, 10, 10, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(0, 10, 10, 10, 0, 0, 10, 10)).toBeTruthy();
            // longer than line
            expect(lineRectangle2dCollision(0, -1, 0, 11, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(-1, 0, 11, 0, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(10, -1, 10, 11, 0, 0, 10, 10)).toBeTruthy();
            expect(lineRectangle2dCollision(-1, 10, 11, 10, 0, 0, 10, 10)).toBeTruthy();
        });
    });

    describe.skip("circe-rect", () => {
        it("It should test inside circle", () => {
            expect(circleRect2dCollision(1, 1, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(1, 9, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(9, 1, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(9, 9, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(5, 5, 5, 0, 0, 10, 10)).toBeTruthy();
        });

        it("It should test touching circles", () => {
            expect(circleRect2dCollision(-5, 0, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(0, -5, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(15, 0, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(circleRect2dCollision(0, 15, 5, 0, 0, 10, 10)).toBeTruthy();
        });

        it("It should test outside circles", () => {
            expect(circleRect2dCollision(-6, 0, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(circleRect2dCollision(0, -6, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(circleRect2dCollision(16, 0, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(circleRect2dCollision(0, 16, 5, 0, 0, 10, 10)).toBeFalsy();
        });

        it("It should test outside circles 2", () => {
            expect(circleRect2dCollision(-5, -5, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(circleRect2dCollision(15, -5, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(circleRect2dCollision(-5, 15, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(circleRect2dCollision(15, 15, 5, 0, 0, 10, 10)).toBeFalsy();
        });
    });

    describe("line-line", () => {
        it("should detect intersection when lines cross", () => {
            /**
             * X-A-X-B-X
             */
            expect(lineLine2dCollision(0, 0, 5, 0, 5, 0, 10, 0)).toBeTruthy();

            /**
             * X
             * |
             * A
             * |
             * X
             * |
             * B
             * |
             * X
             */
            expect(lineLine2dCollision(0, 0, 0, 5, 0, 5, 0, 10)).toBeTruthy();
            /**
             *   X
             *   |
             * X-X-X
             *   |
             *   X
             */
            expect(lineLine2dCollision(5, 0, 5, 10, 0, 5, 10, 5)).toBeTruthy();
        });

        it("should not detect intersection when lines are parallel", () => {
            /**
             * X-A-X
             * X-B-X
             */
            expect(lineLine2dCollision(0, 0, 5, 0, 0, 1, 5, 1)).toBeFalsy();

            /**
             * XX
             * ||
             * AB
             * ||
             * XX
             */
            expect(lineLine2dCollision(0, 0, 0, 5, 1, 0, 1, 5)).toBeFalsy();
        });
    });

    describe("line-line2", () => {
        it("should detect intersection when lines cross", () => {
            // Crossing lines
            expect(lineLine2dCollision2(0, 0, 10, 10, 0, 10, 10, 0)).toBeTruthy();
            expect(lineLine2dCollision2(0, 0, 10, 0, 5, -5, 5, 5)).toBeTruthy();
        });

        it("should not detect intersection when lines are parallel", () => {
            // Parallel lines
            expect(lineLine2dCollision2(0, 0, 10, 0, 0, 5, 10, 5)).toBeFalsy();
            expect(lineLine2dCollision2(0, 0, 0, 10, 5, 0, 5, 10)).toBeFalsy();
        });

        it("should not detect intersection when lines don't intersect within their segments", () => {
            // Lines would intersect if extended, but not within their segments
            expect(lineLine2dCollision2(0, 0, 5, 5, 10, 0, 15, 5)).toBeFalsy();
        });
    });

    describe("point-rect-minmax", () => {
        it("should detect point inside rectangle", () => {
            expect(pointRectMinMax2dCollision(5, 5, 0, 0, 10, 10)).toBeTruthy();
            expect(pointRectMinMax2dCollision(0, 0, 0, 0, 10, 10)).toBeTruthy();
            expect(pointRectMinMax2dCollision(10, 10, 0, 0, 10, 10)).toBeTruthy();
        });

        it("should not detect point outside rectangle", () => {
            expect(pointRectMinMax2dCollision(-1, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRectMinMax2dCollision(5, -1, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRectMinMax2dCollision(11, 5, 0, 0, 10, 10)).toBeFalsy();
            expect(pointRectMinMax2dCollision(5, 11, 0, 0, 10, 10)).toBeFalsy();
        });
    });

    describe("point-polygon2", () => {
        it("should detect point inside polygon", () => {
            const polygon = [
                [0, 0],
                [10, 0],
                [10, 10],
                [0, 10],
            ] as Pair<number>[];

            expect(pointPolygon2dCollision2(5, 5, polygon)).toBeTruthy();
        });

        it("should not detect point outside polygon", () => {
            const polygon = [
                [0, 0],
                [10, 0],
                [10, 10],
                [0, 10],
            ] as Pair<number>[];

            expect(pointPolygon2dCollision2(-5, 5, polygon)).toBeFalsy();
            expect(pointPolygon2dCollision2(15, 5, polygon)).toBeFalsy();
            expect(pointPolygon2dCollision2(5, -5, polygon)).toBeFalsy();
            expect(pointPolygon2dCollision2(5, 15, polygon)).toBeFalsy();
        });

        it("should handle complex polygons", () => {
            // Star-like polygon
            const polygon = [
                [5, 0],
                [4, 3],
                [0, 3],
                [3, 5],
                [2, 9],
                [5, 7],
                [8, 9],
                [7, 5],
                [10, 3],
                [6, 3],
            ] as Pair<number>[];

            // Point in the center of the star
            expect(pointPolygon2dCollision2(5, 5, polygon)).toBeTruthy();

            // Point outside the star
            expect(pointPolygon2dCollision2(5, 10, polygon)).toBeFalsy();
        });
    });

    describe("point-polygon", () => {
        describe("rect like polygon", () => {
            const createPolygonFromRect = (
                minX: number,
                minY: number,
                maxX: number,
                maxY: number,
            ): [number, number][] => [
                [
                    minX,
                    minY,
                ],
                [minX, maxY],
                [maxX, maxY],
                [maxX, minY],
            ];

            it("It should test point inside small rect hole in polygon", () => {
                expect(pointMultiPolygon2dCollision(1, 1, [
                    createPolygonFromRect(-10, -10, 20, 20),
                    createPolygonFromRect(0, 0, 10, 10),
                ])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(9, 1, [
                    createPolygonFromRect(-10, -10, 20, 20),
                    createPolygonFromRect(0, 0, 10, 10),
                ])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(1, 9, [
                    createPolygonFromRect(-10, -10, 20, 20),
                    createPolygonFromRect(0, 0, 10, 10),
                ])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(9, 9, [
                    createPolygonFromRect(-10, -10, 20, 20),
                    createPolygonFromRect(0, 0, 10, 10),
                ])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(5, 5, [
                    createPolygonFromRect(-10, -10, 20, 20),
                    createPolygonFromRect(0, 0, 10, 10),
                ])).toBeFalsy();
            });
            it("It should test point inside rect", () => {
                expect(pointMultiPolygon2dCollision(0, 0, [createPolygonFromRect(0, 0, 10, 10)])).toBeTruthy();
                expect(pointMultiPolygon2dCollision(10, 0, [createPolygonFromRect(0, 0, 10, 10)])).toBeTruthy();
                expect(pointMultiPolygon2dCollision(0, 10, [createPolygonFromRect(0, 0, 10, 10)])).toBeTruthy();
                expect(pointMultiPolygon2dCollision(10, 10, [createPolygonFromRect(0, 0, 10, 10)])).toBeTruthy();
                expect(pointMultiPolygon2dCollision(5, 5, [createPolygonFromRect(0, 0, 10, 10)])).toBeTruthy();
            });
            it("It should test point outside rect", () => {
                expect(pointMultiPolygon2dCollision(-1, 5, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(11, 5, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(5, -1, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(5, 11, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(-1, -1, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(11, -1, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(-1, 11, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
                expect(pointMultiPolygon2dCollision(11, 11, [createPolygonFromRect(0, 0, 10, 10)])).toBeFalsy();
            });
        });
    });
});
