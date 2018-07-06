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
});
