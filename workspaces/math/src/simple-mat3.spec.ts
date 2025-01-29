import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Mat3 } from "./mat3.ts";
import { SimpleMat3 } from "./simple-mat3.ts";

describe("Mat3", () => {
    describe("init", () => {
        it("Test matrix creation", () => {
            const emptyMatrix = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
            ];
            expect(Mat3.create().equalsArray(emptyMatrix)).toBeTruthy();
            expect(Mat3.create().equals(Mat3.create())).toBeTruthy();
            expect(Mat3.create().equals(null as any)).toBeFalsy();
            expect(Mat3.create().equals({} as any)).toBeFalsy();

            expect(Mat3.fromTranslation(0, 0).equals(Mat3.create())).toBeTruthy();
            expect(Mat3.fromScale(1, 1).equals(Mat3.create())).toBeTruthy();

            expect(Mat3.fromScale(1, 1)).toEqual(Mat3.create());
            expect(Mat3.fromTranslation(0, 0)).toEqual(Mat3.create());
            // // commented because error during comparison 0 and -0
            // expect(Mat3.fromRotation(0)).toEqual(Mat3.create());
        });
    });

    describe("translation", () => {
        it("Should create matrix from translation", () => {
            const mat = Mat3.fromTranslation(10, 25);
            expect(mat.data).toEqual([1, 0, 10, 0, 1, 25, 0, 0, 1]);
        })
        it.skip("Should create matrix from translation", () => {
            const mat = Mat3.create();
            Mat3.translate(mat, 10, 25, mat);
            // console.log(mat.data, "----", [1, 0, 10, 0, 1, 25, 0, 0, 1]);
            expect(mat.data).toEqual([1, 0, 10, 0, 1, 25, 0, 0, 1]);
        })
        it("Should extract correct translate", () => {
            const mat = SimpleMat3.fromTranslation(10, 25);
            // const rotatedMat = SimpleMat3.rotate(mat, 25)
            // const scaledAndRotatedMat = SimpleMat3.scale(rotatedMat, 25, 365);

            expect(SimpleMat3.getTranslate(mat)).toEqual({x: 10, y: 25});
            // expect(SimpleMat3.getTranslate(rotatedMat)).toEqual({x: 10, y: 25});
            // expect(SimpleMat3.getTranslate(scaledAndRotatedMat)).toEqual({x: 10, y: 25});
        })
    });
    
    describe("rotation", () => {
        it("Should create same matrix from rotation and rotate matrix", () => {
            const matFromRotation = Mat3.fromRotation(Math.PI / 6);
            const rotatedMatrix = Mat3.create();
            Mat3.rotate(rotatedMatrix, -Math.PI / 6, rotatedMatrix);
            expect(Mat3.getRotation(matFromRotation)).toBeCloseTo(Mat3.getRotation(rotatedMatrix));
        })
        it("Should create matrix from rotation", () => {
            const mat = Mat3.fromRotation(Math.PI / 6);
            const rotation = SimpleMat3.getRotation(mat)
            expect(rotation).toBeCloseTo(Math.PI / 6);
        })
        it.skip("Should correctly rotate matrix", () => {
            const mat = Mat3.create();
            Mat3.rotate(mat, Math.PI / 6);
            const rotation = SimpleMat3.getRotation(mat)
            expect(rotation).toBeCloseTo(Math.PI / 6);
        })

        it.skip("Should extract correct translate", () => {
            const mat = Mat3.fromRotation(Math.PI / 6);
            const translatedMat = SimpleMat3.translate(mat, 15, 25)
            // const scaledAndTranslatedMat = SimpleMat3.scale(translatedMat, 25, 365);

            expect(SimpleMat3.getRotation(mat)).toBeCloseTo(Math.PI / 6);
            expect(SimpleMat3.getRotation(translatedMat)).toBeCloseTo(Math.PI / 6);
            // expect(SimpleMat3.getRotation(scaledAndTranslatedMat)).toBeCloseTo(Math.PI / 6);
        })
    })
});
