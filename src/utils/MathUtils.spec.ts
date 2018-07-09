import { expect } from "chai";
import "mocha";
import { MathUtils } from "./MathUtils";

describe("Math utils", () => {
    describe("Pad", () => {
        it("test pad function", () => {
            expect(MathUtils.pad(1, 3)).to.equal("001");
            expect(MathUtils.pad(321, 4)).to.equal("0321");
            expect(MathUtils.pad(1234, 3)).to.equal("234");
        });
    });
    describe("RoundToDecimal", () => {
        it("test roundToDecimal function", () => {
            expect(MathUtils.roundToDecimals(1, 5)).to.equal("1.00000");
            expect(MathUtils.roundToDecimals(1.00000000001, 5)).to.equal("1.00000");
            expect(MathUtils.roundToDecimals(1.000009, 5, "floor")).to.equal("1.00000");
            expect(MathUtils.roundToDecimals(1.000009, 4, "floor")).to.equal("1.0000");
            expect(MathUtils.roundToDecimals(1.000001, 5, "ceil")).to.equal("1.00001");
            expect(MathUtils.roundToDecimals(1.000001, 4, "ceil")).to.equal("1.0001");
            expect(MathUtils.roundToDecimals(1.000005, 5)).to.equal("1.00001");
            expect(MathUtils.roundToDecimals(1.000005, 4)).to.equal("1.0000");
        });
    });
});
