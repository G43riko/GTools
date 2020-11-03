import { expect } from "chai";
import "mocha";
import { circleCircle2dCollision, circleRect2dCollision, lineRectangle2dCollision, pointCircle2dCollision, pointRect2dCollision, rectRect2dCollision } from "./collisions-2d";

describe("Collisions2d", () => {
    describe("point-rect", () => {
        it("It should test point inside rect", () => {
            expect(pointRect2dCollision(0, 0, 0, 0, 10, 10)).to.be.true;
            expect(pointRect2dCollision(10, 0, 0, 0, 10, 10)).to.be.true;
            expect(pointRect2dCollision(0, 10, 0, 0, 10, 10)).to.be.true;
            expect(pointRect2dCollision(10, 10, 0, 0, 10, 10)).to.be.true;
            expect(pointRect2dCollision(5, 5, 0, 0, 10, 10)).to.be.true;
        });
        it("It should test point outside rect", () => {
            expect(pointRect2dCollision(-1, 5, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(11, 5, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(5, -1, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(5, 11, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(-1, -1, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(11, -1, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(-1, 11, 0, 0, 10, 10)).to.be.false;
            expect(pointRect2dCollision(11, 11, 0, 0, 10, 10)).to.be.false;
        });
    });

    describe("rect-rect", () => {
        it("It should test same rectangles", () => {
            expect(rectRect2dCollision(0, 0, 10, 10, 0, 0, 10, 10)).to.be.true;
        });
        it("It should test touching rectangles rectangles", () => {
            expect(rectRect2dCollision(0, 0, 10, 10, 10, 0, 10, 10)).to.be.true;
            expect(rectRect2dCollision(0, 0, 10, 10, 0, 10, 10, 10)).to.be.true;
            expect(rectRect2dCollision(0, 0, 10, 10, 10, 10, 10, 10)).to.be.true;
            expect(rectRect2dCollision(0, 0, 10, 10, -10, 0, 10, 10)).to.be.true;
            expect(rectRect2dCollision(0, 0, 10, 10, 0, -10, 10, 10)).to.be.true;
            expect(rectRect2dCollision(0, 0, 10, 10, -10, -10, 10, 10)).to.be.true;
        });
        it("It should test not touching rectangles", () => {
            expect(rectRect2dCollision(0, 0, 10, 10, 11, 0, 10, 10)).to.be.false;
            expect(rectRect2dCollision(0, 0, 10, 10, 0, 11, 10, 10)).to.be.false;
            expect(rectRect2dCollision(0, 0, 10, 10, 11, 11, 10, 10)).to.be.false;
            expect(rectRect2dCollision(0, 0, 10, 10, -11, 0, 10, 10)).to.be.false;
            expect(rectRect2dCollision(0, 0, 10, 10, 0, -11, 10, 10)).to.be.false;
            expect(rectRect2dCollision(0, 0, 10, 10, -11, -11, 10, 10)).to.be.false;
        });
    });

    describe("circle-circle", () => {
        it("It should test same circles", () => {
            expect(circleCircle2dCollision(0, 0, 10, 0, 0, 10)).to.be.true;
        });
        it("It should test touching circles circles", () => {
            expect(circleCircle2dCollision(0, 0, 10, 20, 0, 10)).to.be.true;
            expect(circleCircle2dCollision(0, 0, 10, 0, 20, 10)).to.be.true;
            expect(circleCircle2dCollision(0, 0, 10, -20, 0, 10)).to.be.true;
            expect(circleCircle2dCollision(0, 0, 10, 0, -20, 10)).to.be.true;
        });
        it("It should test not touching circles", () => {
            expect(circleCircle2dCollision(0, 0, 10, 21, 0, 10)).to.be.false;
            expect(circleCircle2dCollision(0, 0, 10, 0, 21, 10)).to.be.false;
            expect(circleCircle2dCollision(0, 0, 10, 20, 20, 10)).to.be.false;
            expect(circleCircle2dCollision(0, 0, 10, -21, 0, 10)).to.be.false;
            expect(circleCircle2dCollision(0, 0, 10, 0, -21, 10)).to.be.false;
            expect(circleCircle2dCollision(0, 0, 10, -20, -20, 10)).to.be.false;
        });
    });

    describe("point-circle", () => {
        it("It should test point inside circle", () => {
            expect(pointCircle2dCollision(-10, 0, 0, 0, 10)).to.be.true;
            expect(pointCircle2dCollision(0, -10, 0, 0, 10)).to.be.true;
            expect(pointCircle2dCollision(10, 0, 0, 0, 10)).to.be.true;
            expect(pointCircle2dCollision(0, 10, 0, 0, 10)).to.be.true;
            expect(pointCircle2dCollision(0, 0, 0, 0, 10)).to.be.true;
        });
        it("It should test point outside rect", () => {
            expect(pointCircle2dCollision(11, 0, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(-11, 0, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(0, 11, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(0, -11, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(10, 10, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(-10, 10, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(10, -10, 0, 0, 10)).to.be.false;
            expect(pointCircle2dCollision(-10, -10, 0, 0, 10)).to.be.false;
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
            expect(lineRectangle2dCollision(5, 5, 15, 5, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(5, 5, -5, 5, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(5, 15, 5, 5, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(5, -5, 5, 5, 0, 0, 10, 10)).to.be.true;
        });
        /**
         *   *---*
         *   |   |
         * x-+---+-x
         *   |   |
         *   *---*
         */
        it("it should test line intersecting with two points", () => {
            expect(lineRectangle2dCollision(-5, 5, 15, 5, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(5, -5, 5, 15, 0, 0, 10, 10)).to.be.true;
        });
        it("it should test diagonal line intersecting with two points", () => {
            // bottom left corner
            expect(lineRectangle2dCollision(-1, 1, 1, -1, 0, 0, 10, 10)).to.be.true;
            // top right corner
            expect(lineRectangle2dCollision(9, 11, 11, 9, 0, 0, 10, 10)).to.be.true;
            // bottom right corner
            expect(lineRectangle2dCollision(11, 1, 9, -1, 0, 0, 10, 10)).to.be.true;
            // top left corner
            expect(lineRectangle2dCollision(-1, 9, 1, 11, 0, 0, 10, 10)).to.be.true;
        });
        it("it should test lying on edge", () => {
            // exactly on line
            expect(lineRectangle2dCollision(0, 0, 0, 10, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(0, 0, 10, 0, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(10, 0, 10, 10, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(0, 10, 10, 10, 0, 0, 10, 10)).to.be.true;
            // longer than line
            expect(lineRectangle2dCollision(0, -1, 0, 11, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(-1, 0, 11, 0, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(10, -1, 10, 11, 0, 0, 10, 10)).to.be.true;
            expect(lineRectangle2dCollision(-1, 10, 11, 10, 0, 0, 10, 10)).to.be.true;
        });
    });

    describe.skip("circe-rect", () => {
        it("It should test inside circle", () => {
            expect(circleRect2dCollision(1, 1, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(1, 9, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(9, 1, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(9, 9, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(5, 5, 5, 0, 0, 10, 10)).to.be.true;
        });

        it("It should test touching circles", () => {
            expect(circleRect2dCollision(-5, 0, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(0, -5, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(15, 0, 5, 0, 0, 10, 10)).to.be.true;
            expect(circleRect2dCollision(0, 15, 5, 0, 0, 10, 10)).to.be.true;
        });

        it("It should test outside circles", () => {
            expect(circleRect2dCollision(-6, 0, 5, 0, 0, 10, 10)).to.be.false;
            expect(circleRect2dCollision(0, -6, 5, 0, 0, 10, 10)).to.be.false;
            expect(circleRect2dCollision(16, 0, 5, 0, 0, 10, 10)).to.be.false;
            expect(circleRect2dCollision(0, 16, 5, 0, 0, 10, 10)).to.be.false;
        });

        it("It should test outside circles 2", () => {
            expect(circleRect2dCollision(-5, -5, 5, 0, 0, 10, 10)).to.be.false;
            expect(circleRect2dCollision(15, -5, 5, 0, 0, 10, 10)).to.be.false;
            expect(circleRect2dCollision(-5, 15, 5, 0, 0, 10, 10)).to.be.false;
            expect(circleRect2dCollision(15, 15, 5, 0, 0, 10, 10)).to.be.false;
        });
    });
});
