"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var leftChild = function (index) { return index * 2 + 1; };
var rightChild = function (index) { return index * 2 + 2; };
var getParentIndex = function (index) { return Math.floor((index - 1) / 2); };
var PriorityQueue = (function () {
    function PriorityQueue(comparator) {
        this.comparator = comparator;
        this.heap = [];
    }
    PriorityQueue.createMaxQueue = function (valueExtractor) {
        return new PriorityQueue(function (a, b) { return valueExtractor(a) > valueExtractor(b); });
    };
    PriorityQueue.createMinQueue = function (valueExtractor) {
        return new PriorityQueue(function (a, b) { return valueExtractor(a) < valueExtractor(b); });
    };
    PriorityQueue.prototype.swap = function (indexOne, indexTwo) {
        var tmp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = tmp;
    };
    PriorityQueue.prototype.peek = function () {
        return this.heap[0];
    };
    Object.defineProperty(PriorityQueue.prototype, "length", {
        get: function () {
            return this.heap.length;
        },
        enumerable: false,
        configurable: true
    });
    PriorityQueue.prototype.contains = function (item) {
        var _this = this;
        return this.heap.some(function (e) { return _this.comparator(e, item); });
    };
    PriorityQueue.prototype.clear = function () {
        this.heap = [];
    };
    PriorityQueue.prototype.forEach = function (callback) {
        this.heap.forEach(callback);
    };
    PriorityQueue.prototype.add = function (element) {
        this.heap.push(element);
        var index = this.heap.length - 1;
        while (index !== 0 && this.comparator(this.heap[index], this.heap[getParentIndex(index)])) {
            this.swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    };
    PriorityQueue.prototype.pop = function () {
        var root = this.heap.shift();
        this.heap.unshift(this.heap[this.heap.length - 1]);
        this.heap.pop();
        this.heapify(0);
        return root;
    };
    PriorityQueue.prototype.heapify = function (index) {
        var left = leftChild(index);
        var right = rightChild(index);
        var smallest = index;
        if (left < this.heap.length && this.comparator(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }
        if (right < this.heap.length && this.comparator(this.heap[right], this.heap[smallest])) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priority-queue.js.map