import { expect } from "chai";
import "mocha";
import { circleCircle2dDistance, pointLine2dDistance, pointPoint2dDistance } from "./distances-2d";

describe("Distances2d", () => {
    describe("point-point", () => {
        it("It should test two point distance", () => {
            expect(pointPoint2dDistance(0, 0, 0, 0)).to.be.equal(0);
            expect(pointPoint2dDistance(0, 10, 0, 0)).to.be.equal(10);
            expect(pointPoint2dDistance(0, 0, 0, 10)).to.be.equal(10);
        });
    });
    describe("line-point", () => {
        it("It should check points on line", () => {
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                0, 0,
            )).to.be.equal(0);
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                0, 20,
            )).to.be.equal(0);
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                0, 10,
            )).to.be.equal(0);
        });

        it("It should check vertical line", () => {
            /**
             * |
             * |.x
             * |
             */
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                10, 10,
            )).to.be.equal(10);
            /**
             * |
             * |
             * |.x
             */
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                10, 0,
            )).to.be.equal(10);

            /**
             *   |
             *   |
             * x.|
             */
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                -10, 0,
            )).to.be.equal(10);

            /**
             * |
             * |
             * |
             * .
             * x
             */
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                0, -10,
            )).to.be.equal(10);

            /**
             * x
             * .
             * |
             * |
             * |
             */
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                0, 30,
            )).to.be.equal(10);
            /**
             *   x
             *  .
             * |
             * |
             */
            expect(pointLine2dDistance(
                0, 0,
                0, 20,
                10, 30,
            )).to.be.equal(pointPoint2dDistance(0, 20, 10, 30));
        });
    });
    describe("circle-circle", () => {
        it("It should check same circles", () => {
            expect(circleCircle2dDistance(0, 0, 5, 0, 0, 10)).to.be.equal(0);
        });
        it("It should check touching circles", () => {
            expect(circleCircle2dDistance(0, 0, 5, 5, 0, 5)).to.be.equal(0);
            expect(circleCircle2dDistance(0, 0, 5, 8, 0, 10)).to.be.equal(0);
            expect(circleCircle2dDistance(0, 0, 5, 10, 0, 5)).to.be.equal(0);
            expect(circleCircle2dDistance(0, 0, 6, 10, 0, 6)).to.be.equal(0);
        });
        it("It should calc real distance between circle", () => {
            expect(circleCircle2dDistance(0, 0, 5, 20, 0, 5)).to.be.equal(10);
            expect(circleCircle2dDistance(0, 0, 5, 20, 0, 10)).to.be.equal(5);
        });
    });
});
