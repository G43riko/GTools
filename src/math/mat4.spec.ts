import { expect } from "chai";
import "mocha";
import { Mat4 } from "./mat4";

describe("Mat4", () => {
    describe("init", () => {
        it("Test matrix creation", () => {
            const emptyMatrix = [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1,
            ];
            expect(Mat4.create().equalsArray(emptyMatrix)).to.be.true;
            expect(Mat4.create().equals(Mat4.create())).to.be.true;
            expect(Mat4.create().equals(null as any)).to.be.false;
            expect(Mat4.create().equals({} as any)).to.be.false;

            expect(Mat4.fromTranslation({x: 0, y: 0, z: 0}).equals(Mat4.create())).to.be.true;
            expect(Mat4.fromScale({x: 1, y: 1, z: 1}).equals(Mat4.create())).to.be.true;

            expect(Mat4.fromScale({x: 1, y: 1, z: 1})).to.deep.equal(Mat4.create());
            expect(Mat4.fromTranslation({x: 0, y: 0, z: 0})).to.deep.equal(Mat4.create());
            expect(Mat4.fromRotation(0, {x: Math.random() * 360, y: Math.random() * 360, z: Math.random() * 360})).to.deep.equal(Mat4.create());


            expect(Mat4.fromXRotation(0).equals(Mat4.create())).to.be.true;
            expect(Mat4.fromYRotation(0).equals(Mat4.create())).to.be.true;
            expect(Mat4.fromZRotation(0).equals(Mat4.create())).to.be.true;
            // // commented because error during comparison 0 and -0
            // expect(Mat4.fromXRotation(0)).to.deep.equal(Mat4.create());
            // expect(Mat4.fromYRotation(0)).to.deep.equal(Mat4.create());
            // expect(Mat4.fromZRotation(0)).to.deep.equal(Mat4.create());
        });
    });
});
