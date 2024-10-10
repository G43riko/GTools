import { expect } from "chai";
import "mocha";
import { Mat3 } from "./mat3";

describe("Mat3", () => {
    describe("init", () => {
        it("Test matrix creation", () => {
            const emptyMatrix = [
                1, 0, 0,
                0, 1, 0,
                0, 0, 1,
            ];
            expect(Mat3.create().equalsArray(emptyMatrix)).to.be.true;
            expect(Mat3.create().equals(Mat3.create())).to.be.true;
            expect(Mat3.create().equals(null as any)).to.be.false;
            expect(Mat3.create().equals({} as any)).to.be.false;

            expect(Mat3.fromTranslation(0, 0).equals(Mat3.create())).to.be.true;
            expect(Mat3.fromScale(1, 1).equals(Mat3.create())).to.be.true;

            expect(Mat3.fromScale(1, 1)).to.deep.equal(Mat3.create());
            expect(Mat3.fromTranslation(0, 0)).to.deep.equal(Mat3.create());
            // // commented because error during comparison 0 and -0
            // expect(Mat3.fromRotation(0)).to.deep.equal(Mat3.create());

        });
    });
});
