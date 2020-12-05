import { expect } from 'chai'
import 'mocha';
import * as TESTED_OBJ from './sorted-array-utils';
describe("sorted-array-utils", () => {
	
	it("It should test function binarySearch", () => {
		expect(TESTED_OBJ.binarySearch(["b",  "d"], "a", (a, b) => a.localeCompare(b))).to.be.equal(-1);
		expect(TESTED_OBJ.binarySearch(["b",  "d"], "b", (a, b) => a.localeCompare(b))).to.be.equal(0);
		expect(TESTED_OBJ.binarySearch(["b",  "d"], "c", (a, b) => a.localeCompare(b))).to.be.equal(-2);
		expect(TESTED_OBJ.binarySearch(["b",  "d"], "d", (a, b) => a.localeCompare(b))).to.be.equal(1);
		expect(TESTED_OBJ.binarySearch(["b",  "d"], "e", (a, b) => a.localeCompare(b))).to.be.equal(-3);
	});

	it("It should test function sortedPickAll", () => {
		expect(TESTED_OBJ.sortedPickAll(["a", "b", "c"], ["b", "c", "d"], (a, b) => a.localeCompare(b))).to.deep.equal(["b", "c"]);
	});

	it("It should test function SortedDifference", () => {
		expect(TESTED_OBJ.SortedDifference(["a", "b", "c"], ["b", "c", "d"], (a, b) => a.localeCompare(b))).to.deep.equal(["a", "d"]);
	});

	it("It should test function sortedMerge", () => {
		expect(TESTED_OBJ.sortedMerge(["a", "c", "e"], ["b", "d"], (a, b) => a.localeCompare(b))).to.deep.equal(["a", "b", "c", "d", "e"]);
	});
});
