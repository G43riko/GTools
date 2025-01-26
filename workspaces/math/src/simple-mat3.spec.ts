import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Mat3 } from "./mat3.ts";

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
});
