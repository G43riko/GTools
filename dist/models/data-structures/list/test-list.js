"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testList = void 0;
var utils_1 = require("gtools/utils");
function testList(list, testOrder) {
    if (testOrder === void 0) { testOrder = false; }
    list.clear();
    console.assert(list.empty);
    console.assert(list.length === 0);
    console.assert(utils_1.deepEqual(list.toArray(), []));
    list.add("b");
    console.assert(!list.empty);
    console.assert(list.length === 1);
    console.assert(utils_1.deepEqual(list.toArray(), ["b"]));
    console.assert(!list.contains("a"));
    console.assert(list.contains("b"));
    console.assert(!list.contains("c"));
    list.add("a");
    list.add("c");
    list.add("e");
    list.add("d");
    var tmpList = [];
    for (var _i = 0, _a = list; _i < _a.length; _i++) {
        var item = _a[_i];
        tmpList.push(item);
    }
    var listArray = list.toArray();
    console.assert(listArray.length === tmpList.length);
    tmpList.forEach(function (item) {
        console.assert(listArray.indexOf(item) >= 0);
    });
    console.assert(list.length === 5);
    if (testOrder) {
        console.assert(utils_1.deepEqual(list.toArray(), ["a", "b", "c", "d", "e"]));
    }
    list.remove("b");
    list.remove("d");
    console.assert(list.length === 3);
    if (testOrder) {
        console.assert(utils_1.deepEqual(list.toArray(), ["a", "c", "e"]));
    }
    list.remove("a");
    list.remove("c");
    list.remove("e");
    console.assert(list.empty);
    console.assert(list.length === 0);
    console.assert(utils_1.deepEqual(list.toArray(), []));
}
exports.testList = testList;
//# sourceMappingURL=test-list.js.map