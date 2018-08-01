"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtils_1 = require("../utils/ArrayUtils");
var ItemCounter = /** @class */ (function () {
    function ItemCounter() {
        this.data = {};
        this.results = [];
        this.processed = false;
    }
    ItemCounter.prototype.add = function (item) {
        if (this.data[item]) {
            this.data[item]++;
        }
        else {
            this.data[item] = 1;
        }
        if (this.process()) {
            this.processed = false;
        }
    };
    ItemCounter.prototype.addAll = function (items) {
        items.forEach(this.add, this);
    };
    ItemCounter.prototype.getTopN = function (count) {
        if (!this.processed) {
            this.process();
        }
        return ArrayUtils_1.ArrayUtils.subArray(this.results, 0, count);
    };
    ItemCounter.prototype.getCount = function () {
        if (!this.processed) {
            this.process();
        }
        return this.results.length;
    };
    ItemCounter.prototype.process = function () {
        for (var key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.results.push({ key: key, count: this.data[key] });
            }
        }
        this.results.sort(function (a, b) { return b.count - a.count; });
        this.processed = true;
    };
    return ItemCounter;
}());
exports.ItemCounter = ItemCounter;
