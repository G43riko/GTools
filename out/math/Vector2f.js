"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = function (op, arg1, arg2) {
    if (typeof arg2 === "number") {
        op(arg1, arg2);
    }
    else {
        if (typeof arg1 === "number") {
            op(arg1, arg1);
        }
        else {
            op(arg1.x, arg1.y);
        }
    }
};
var Vector2f = /** @class */ (function () {
    function Vector2f(x, y) {
        this.y = 0;
        this.x = 0;
        this.x = x;
        this.y = y;
    }
    Vector2f.prototype.set = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x = x;
            _this.y = y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.add = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x += x;
            _this.y += y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.div = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x /= x;
            _this.y /= y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.mul = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x *= x;
            _this.y *= y;
        }, arg1, arg2);
        return this;
    };
    Vector2f.prototype.sub = function (arg1, arg2) {
        var _this = this;
        process(function (x, y) {
            _this.x -= x;
            _this.y -= y;
        }, arg1, arg2);
        return this;
    };
    return Vector2f;
}());
exports.Vector2f = Vector2f;
