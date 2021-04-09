import "mocha";
import { Grid3ArrayHolder } from "./grid3-array-holder";
import { Grid3HashHolder } from "./grid3-hash-holder";
import { Grid3MapHolder } from "./grid3-map-holder";
import { Grid3ObjectHolder } from "./grid3-object-holder";
describe("Grid3", function () {
    describe("default", function () {
        var sizeOne = 128;
        var size = { x: sizeOne, y: sizeOne, z: sizeOne };
        var arrayHolder = Grid3ArrayHolder.initEmpty(size.x, size.y, size.z, 0);
        var mapHolder = Grid3MapHolder.initEmpty(size.x, size.y, size.z, 0);
        var objectHolder = new Grid3ObjectHolder();
        var hashHolder = new Grid3HashHolder();
        var sorts = [
            arrayHolder,
            objectHolder,
            mapHolder,
        ];
        var createArray = function () {
            var result = new Array(size.x);
            for (var i = 0; i < size.x; i++) {
                result[i] = new Array(size.y);
                for (var j = 0; j < size.y; j++) {
                    result[i][j] = new Array(size.z);
                    for (var k = 0; k < size.z; k++) {
                        result[i][j][k] = Math.random();
                    }
                }
            }
            return result;
        };
        it("It should test adding", function () {
            sorts.forEach(function (holder) {
                var testArr = createArray();
                var start = Date.now();
                testArr.forEach(function (row, x) {
                    row.forEach(function (column, y) {
                        column.forEach(function (item, z) {
                            holder.set(x, y, z, item);
                        });
                    });
                });
                var diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test getting", function () {
            sorts.forEach(function (holder) {
                var start = Date.now();
                for (var x = 0; x < size.x; x++) {
                    for (var y = 0; y < size.y; y++) {
                        for (var z = 0; z < size.z; z++) {
                            holder.get(x, y, z);
                        }
                    }
                }
                var diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test iterating", function () {
            sorts.forEach(function (holder) {
                var start = Date.now();
                holder.forEach(function () { return null; });
                var diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
    });
});
//# sourceMappingURL=grid3.perf.js.map