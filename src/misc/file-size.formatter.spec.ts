import { expect } from "chai";
import { formatFileSize } from "./file-size-formatter";

describe("FileSizeFormatter", () => {
    describe("formatTime file size", () => {
        it("It should formatTime fil size", () => {
            expect(formatFileSize(0)).to.be.equal("0");
            expect(formatFileSize(31)).to.be.equal("31 B");
            expect(formatFileSize(32)).to.be.equal("0.03 KB");
            expect(formatFileSize(1018)).to.be.equal("0.99 KB");
            expect(formatFileSize(1019)).to.be.equal("1 KB");
            expect(formatFileSize(1024)).to.be.equal("1 KB");
            expect(formatFileSize(1029)).to.be.equal("1 KB");
            expect(formatFileSize(1030)).to.be.equal("1.01 KB");
        });
    });
});
