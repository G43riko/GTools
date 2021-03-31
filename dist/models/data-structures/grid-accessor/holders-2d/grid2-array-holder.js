"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid2ArrayHolder = void 0;
var math_1 = require("../../../../math");
function getMapIndex(x, y, width) {
    return y * width + x;
}
function getCoordinates(index, width) {
    return {
        x: index % width,
        y: Math.floor(index / width),
    };
}
var Grid2ArrayHolder = (function () {
    function Grid2ArrayHolder(size, data) {
        this.size = size;
        this.data = data;
    }
    Grid2ArrayHolder.initEmpty = function (x, y, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var size = x * y;
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = defaultValue;
        }
        return new Grid2ArrayHolder({ x: x, y: y }, result);
    };
    Grid2ArrayHolder.prototype.get = function (x, y) {
        return this.data[this.getIndex(x, y)];
    };
    Grid2ArrayHolder.prototype.set = function (x, y, value) {
        this.data[this.getIndex(x, y)] = value;
    };
    Grid2ArrayHolder.prototype.getIndex = function (x, y) {
        return getMapIndex(x, y, this.size.x);
    };
    Grid2ArrayHolder.prototype.getCoordinates = function (index) {
        return getCoordinates(index, this.size.x);
    };
    Grid2ArrayHolder.prototype.getAroundData = function (x, y, size) {
        if (size === void 0) { size = 1; }
        var center = { x: x, y: y };
        var minPosition = {
            x: Math.max(0, x - size),
            y: Math.max(0, y - size),
        };
        var maxPosition = {
            x: Math.min(this.size.x - 1, size + x),
            y: Math.min(this.size.y - 1, size + y),
        };
        return this.getAreaInternally(minPosition, {
            x: maxPosition.x - minPosition.x + 1,
            y: maxPosition.y - minPosition.y + 1,
        }, "block").filter(function (e) { return math_1.Vector2.dist(e.coordinates, center) <= size; });
    };
    Grid2ArrayHolder.prototype.getAround = function (x, y, size) {
        if (size === void 0) { size = 1; }
        return this.getAroundData(x, y, size).map(function (e) { return e.item; });
    };
    Grid2ArrayHolder.prototype.getAroundSQ = function (x, y, size) {
        if (size === void 0) { size = 1; }
        var minPosition = {
            x: Math.max(0, x - size),
            y: Math.max(0, y - size),
        };
        var maxPosition = {
            x: Math.min(this.size.x - 1, size + x),
            y: Math.min(this.size.y - 1, size + y),
        };
        return this.getAreaInternally(minPosition, {
            x: maxPosition.x - minPosition.x + 1,
            y: maxPosition.y - minPosition.y + 1,
        }, "data");
    };
    Grid2ArrayHolder.prototype.getBetween = function (pointA, pointB) {
        var min = {
            x: Math.min(pointA.x, pointB.x),
            y: Math.min(pointA.y, pointB.y),
        };
        var max = {
            x: Math.max(pointA.x, pointB.x),
            y: Math.max(pointA.y, pointB.y),
        };
        return this.getAreaInternally(min, {
            x: max.x - min.x + 1,
            y: max.y - min.y + 1,
        }, "data");
    };
    Grid2ArrayHolder.prototype.getNearest = function (x, y, condition) {
        var _this = this;
        var Statuses;
        (function (Statuses) {
            Statuses[Statuses["ADDED"] = 0] = "ADDED";
            Statuses[Statuses["FALSE"] = 1] = "FALSE";
        })(Statuses || (Statuses = {}));
        var data = {};
        var result = [];
        var current = [[this.getIndex(x, y)]];
        var _loop_1 = function () {
            var actualLevel = current.shift();
            var nextLevel = [];
            actualLevel.forEach(function (actual) {
                if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                    return;
                }
                var coordinates = _this.getCoordinates(actual);
                if (condition(_this.data[actual])) {
                    data[actual] = Statuses.ADDED;
                    result.push({ coordinates: coordinates, item: _this.data[actual] });
                }
                else {
                    data[actual] = Statuses.FALSE;
                    nextLevel.push.apply(nextLevel, _this.getAround4(coordinates.x, coordinates.y));
                }
            });
            current.push(nextLevel);
        };
        while (!result.length) {
            _loop_1();
        }
        return result;
    };
    Grid2ArrayHolder.prototype.expandConditionally = function (x, y, condition) {
        var Statuses;
        (function (Statuses) {
            Statuses[Statuses["ADDED"] = 0] = "ADDED";
            Statuses[Statuses["FALSE"] = 1] = "FALSE";
        })(Statuses || (Statuses = {}));
        var data = {};
        var current = [this.getIndex(x, y)];
        var result = [];
        while (current.length) {
            var actual = current.shift();
            if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                continue;
            }
            if (condition(this.data[actual])) {
                data[actual] = Statuses.ADDED;
                var coordinates = this.getCoordinates(actual);
                result.push({ coordinates: coordinates, item: this.data[actual] });
                current.push.apply(current, this.getAround4(coordinates.x, coordinates.y));
            }
            else {
                data[actual] = Statuses.FALSE;
            }
        }
        return result;
    };
    Grid2ArrayHolder.prototype.getAround4 = function (x, y) {
        var centerIndex = this.getIndex(x, y);
        var result = [];
        if (x > 0) {
            result.push(centerIndex - 1);
        }
        if (y > 0) {
            result.push(centerIndex - this.size.x);
        }
        if (x + 1 < this.size.x) {
            result.push(centerIndex + 1);
        }
        if (y + 1 < this.size.y) {
            result.push(centerIndex + this.size.x);
        }
        return result;
    };
    Grid2ArrayHolder.prototype.getAround4Index = function (centerIndex) {
        var _a = this.getCoordinates(centerIndex), x = _a.x, y = _a.y;
        var result = [];
        if (x > 0) {
            result.push(centerIndex - 1);
        }
        if (y > 0) {
            result.push(centerIndex - this.size.x);
        }
        if (x + 1 < this.size.x) {
            result.push(centerIndex + 1);
        }
        if (y + 1 < this.size.y) {
            result.push(centerIndex + this.size.x);
        }
        return result;
    };
    Grid2ArrayHolder.prototype.getArea = function (position, size) {
        return this.getAreaInternally(position, size, "data");
    };
    Grid2ArrayHolder.prototype.getAreaInternally = function (position, size, select) {
        var _this = this;
        var result = new Array(size.x * size.y);
        var counter = 0;
        var y = position.y;
        if (select === "block") {
            for (var i = 0; i < size.y; i++) {
                var currentIndex = this.getIndex(position.x, y);
                for (var j = 0; j < size.x; j++) {
                    result[counter++] = {
                        index: currentIndex,
                        item: this.data[currentIndex++],
                        coordinates: { y: y, x: position.x + j },
                    };
                }
                y++;
            }
            return result;
        }
        for (var i = 0; i < size.y; i++) {
            var currentIndex = this.getIndex(position.x, y);
            for (var j = 0; j < size.x; j++) {
                result[counter++] = currentIndex++;
            }
            y++;
        }
        if (select === "indices") {
            return result;
        }
        return result.map(function (index) { return _this.data[index]; });
    };
    Grid2ArrayHolder.prototype.forEach = function (callback) {
        for (var i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i % this.size.x, Math.floor(i / this.size.x)) === false) {
                return;
            }
        }
    };
    Grid2ArrayHolder.prototype.getRandomBlockOfSize = function (size, filter) {
        while (true) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            var blocks = this.getArea(this.getCoordinates(randomIndex), size);
            if (blocks.every(function (item) { return filter(item); })) {
                return {
                    item: this.data[randomIndex],
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    };
    Grid2ArrayHolder.prototype.getRandomBlock = function (filter) {
        while (true) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            var item = this.data[randomIndex];
            if (!filter || filter(item)) {
                return {
                    item: item,
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    };
    Grid2ArrayHolder.prototype.getRandomBlock2 = function (filter) {
        if (!filter) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            return {
                item: this.data[randomIndex],
                coordinates: this.getCoordinates(randomIndex),
            };
        }
        var sortedArray = this.data.map(function (item, index) { return ({ item: item, index: index }); }).sort(function () { return Math.random() - 0.5; });
        var result = sortedArray.find(function (e) { return filter(e.item); });
        if (!result) {
            return null;
        }
        return {
            item: result.item,
            coordinates: this.getCoordinates(result.index),
        };
    };
    return Grid2ArrayHolder;
}());
exports.Grid2ArrayHolder = Grid2ArrayHolder;
//# sourceMappingURL=grid2-array-holder.js.map