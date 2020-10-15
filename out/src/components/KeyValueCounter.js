"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyValueCounter = /** @class */ (function () {
    function KeyValueCounter() {
        this.data = {};
        this.results = [];
        this.processed = false;
    }
    KeyValueCounter.prototype.add = function (item) {
        if (this.data[item]) {
            this.data[item]++;
        }
        else {
            this.data[item] = 1;
        }
        if (this.processed) {
            this.processed = false;
        }
    };
    KeyValueCounter.prototype.addAll = function (items) {
        items.forEach(this.add, this);
    };
    KeyValueCounter.prototype.getAll = function () {
        if (!this.processed) {
            this.process();
        }
        return this.results;
    };
    KeyValueCounter.prototype.getTopN = function (count) {
        if (!this.processed) {
            this.process();
        }
        return this.results.slice(0, count);
    };
    KeyValueCounter.prototype.getCount = function () {
        return this.getAll().length;
    };
    KeyValueCounter.prototype.process = function () {
        for (var key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.results.push({ key: key, count: this.data[key] });
            }
        }
        this.results.sort(function (a, b) { return b.count - a.count; });
        this.processed = true;
    };
    return KeyValueCounter;
}());
exports.KeyValueCounter = KeyValueCounter;
