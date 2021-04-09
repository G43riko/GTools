"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var grid2_array_holder_1 = require("./grid2-array-holder");
var grid2_hash_holder_1 = require("./grid2-hash-holder");
var grid2_map_holder_1 = require("./grid2-map-holder");
var grid2_object_holder_1 = require("./grid2-object-holder");
var grid2_object_map_holder_1 = require("./grid2-object-map-holder");
var grid2_string_holder_1 = require("./grid2-string-holder");
describe("Grid2", function () {
    describe("default", function () {
        var size = { x: 256, y: 256 };
        var arrayHolder = grid2_array_holder_1.Grid2ArrayHolder.initEmpty(size.x, size.y, 0);
        var mapHolder = grid2_map_holder_1.Grid2MapHolder.initEmpty(size.x, size.y, 0);
        var hashHolder = new grid2_hash_holder_1.Grid2HashHolder();
        var objectHolder = new grid2_object_holder_1.Grid2ObjectHolder();
        var stringHolder = new grid2_string_holder_1.Grid2StringHolder();
        var objectMapHolder = new grid2_object_map_holder_1.Grid2ObjectMapHolder();
        var sorts = [
            arrayHolder,
            mapHolder,
            objectHolder,
            objectMapHolder,
            stringHolder,
        ];
        var createArray = function () {
            var result = new Array(size.x);
            for (var i = 0; i < size.x; i++) {
                result[i] = new Array(size.y);
                for (var j = 0; j < size.y; j++) {
                    result[i][j] = Math.random();
                }
            }
            return result;
        };
        it("It should test adding", function () {
            sorts.forEach(function (holder) {
                var testArr = createArray();
                var start = Date.now();
                testArr.forEach(function (row, x) {
                    row.forEach(function (item, y) {
                        holder.set(x, y, item);
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
                        holder.get(x, y);
                    }
                }
                var diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
        it("It should test iterating", function () {
            sorts.forEach(function (holder) {
                var start = Date.now();
                var diff = Date.now() - start;
                console.log(holder.constructor.name, ": ", diff, "ms");
            });
        });
    });
});
//# sourceMappingURL=grid2.perf.js.map