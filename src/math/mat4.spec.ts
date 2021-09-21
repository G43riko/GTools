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
        it("Test matrix translation", () => {
            const matrix = Mat4.fromTranslation({x: 2, y: 3, z: 4});

            const positionA = {x: 0, y: 0, z: 0};
            const positionB = {x: 2, y: 3, z: 4};
            const positionC = {x: 10, y: 10, z: 10};
            const positionATransformed = matrix.getTransformedVector(positionA);
            const positionBTransformed = matrix.getTransformedVector(positionB);
            const positionCTransformed = matrix.getTransformedVector(positionC);

            expect(positionATransformed).to.deep.equal({x: 2, y: 3, z: 4});
            expect(positionBTransformed).to.deep.equal({x: 4, y: 6, z: 8});
            expect(positionCTransformed).to.deep.equal({x: 12, y: 13, z: 14});
        });
        it("Test different kind of transformation matrix creation", () => {
            const matrixA = Mat4.fromRotation(Math.PI, {x: 0, y: 1, z: 0});

            const matrix = Mat4.create();
            matrix.rotate(Math.PI, {x: 0, y: 1, z: 0});

            expect(matrixA?.equals(matrix)).to.be.true;
        });
        it("Test matrix rotation", () => {
            const matrix = Mat4.fromRotation(Math.PI, {x: 0, y: 1, z: 0});
            if(!matrix) {
                throw new Error("Matrix is null");
            }

            const positionA = {x: 2, y: 0, z: 0};
            const positionB = {x: 0, y: 2, z: 0};
            const positionC = {x: 0, y: 0, z: 2};
            const positionATransformed = matrix.getTransformedVector(positionA);
            const positionBTransformed = matrix.getTransformedVector(positionB);
            const positionCTransformed = matrix.getTransformedVector(positionC);

            console.log(matrix);

            expect(positionATransformed).to.deep.equal({x: -2, y: 0, z: 0});
            expect(positionBTransformed).to.deep.equal({x: 0, y: 2, z: 0});
            expect(positionCTransformed).to.deep.equal({x: 0, y: 0, z: -2});
        });
    });
});
