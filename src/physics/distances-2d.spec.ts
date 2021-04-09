import { expect } from "chai";
import "mocha";
import { distance2dCircleCircle, distance2dPointLine, distance2dPointPoint } from "./distances-2d";

describe("Distances2d", () => {
    describe("point-point", () => {
        it("It should test two point distance", () => {
            expect(distance2dPointPoint(0, 0, 0, 0)).to.be.equal(0);
            expect(distance2dPointPoint(0, 10, 0, 0)).to.be.equal(10);
            expect(distance2dPointPoint(0, 0, 0, 10)).to.be.equal(10);
        });
    });
    describe("line-point", () => {
        it("It should check points on line", () => {
            expect(distance2dPointLine(
                0, 0,
                0, 20,
                0, 0,
            )).to.be.equal(0);
            expect(distance2dPointLine(
                0, 0,
                0, 20,
                0, 20,
            )).to.be.equal(0);
            expect(distance2dPointLine(
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
            expect(distance2dPointLine(
                0, 0,
                0, 20,
                10, 10,
            )).to.be.equal(10);
            /**
             * |
             * |
             * |.x
             */
            expect(distance2dPointLine(
                0, 0,
                0, 20,
                10, 0,
            )).to.be.equal(10);

            /**
             *   |
             *   |
             * x.|
             */
            expect(distance2dPointLine(
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
            expect(distance2dPointLine(
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
            expect(distance2dPointLine(
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
            expect(distance2dPointLine(
                0, 0,
                0, 20,
                10, 30,
            )).to.be.equal(distance2dPointPoint(0, 20, 10, 30));
        });
    });
    describe("circle-circle", () => {
        it("It should check same circles", () => {
            expect(distance2dCircleCircle(0, 0, 5, 0, 0, 10)).to.be.equal(0);
        });
        it("It should check touching circles", () => {
            expect(distance2dCircleCircle(0, 0, 5, 5, 0, 5)).to.be.equal(0);
            expect(distance2dCircleCircle(0, 0, 5, 8, 0, 10)).to.be.equal(0);
            expect(distance2dCircleCircle(0, 0, 5, 10, 0, 5)).to.be.equal(0);
            expect(distance2dCircleCircle(0, 0, 6, 10, 0, 6)).to.be.equal(0);
        });
        it("It should calc real distance between circle", () => {
            expect(distance2dCircleCircle(0, 0, 5, 20, 0, 5)).to.be.equal(10);
            expect(distance2dCircleCircle(0, 0, 5, 20, 0, 10)).to.be.equal(5);
        });
    });
});
