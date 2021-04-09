import { expect } from "chai";
import "mocha";
import { intersection2dLineLine } from "./intersects-2d";

describe("Intersections2d", () => {
    describe("line-line", () => {
        it("It should test point inside small rect hole in polygon", () => {
            /**
             *   X
             *   |
             * X-X-X
             *   |
             *   X
             */
            expect(intersection2dLineLine(5, 0, 5, 10, 0, 5, 10, 5)).to.deep.equal({x: 5, y: 5});


            /**
             * X-A-X
             * X-B-X
             */
            expect(intersection2dLineLine(0, 0, 5, 0, 0, 1, 5, 1)).to.be.null;

            /**
             * XX
             * ||
             * AB
             * ||
             * XX
             */
            expect(intersection2dLineLine(0, 0, 0, 5, 1, 0, 1, 5)).to.be.null;
        });
    });
});
