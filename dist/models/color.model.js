"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var utils_1 = require("gtools/utils");
function checkColorValue(value) {
    console.assert(value >= 0);
    console.assert(value <= 255);
}
var Color = (function () {
    function Color(red, green, blue, alpha) {
        if (alpha === void 0) { alpha = 255; }
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        checkColorValue(red);
        checkColorValue(green);
        checkColorValue(blue);
        checkColorValue(alpha);
    }
    Object.defineProperty(Color.prototype, "rgb", {
        get: function () {
            return [this.red, this.green, this.blue];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgbString", {
        get: function () {
            return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgba", {
        get: function () {
            return [this.red, this.green, this.blue, this.alpha];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hex", {
        get: function () {
            return utils_1.rgb2hex(Math.floor(this.red), Math.floor(this.green), Math.floor(this.blue));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "int", {
        get: function () {
            return utils_1.rgb2int(this.red, this.green, this.blue);
        },
        enumerable: false,
        configurable: true
    });
    Color.fromHex = function (color) {
        var value = utils_1.hex2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
    Color.fromInt = function (color) {
        var value = utils_1.int2rgb(color);
        return new (Color.bind.apply(Color, __spreadArrays([void 0], value)))();
    };
    Color.prototype.normalized = function () {
        if (this.red > 1 || this.green > 1 || this.blue > 1 || this.alpha > 1) {
            return new Color(this.red / 255, this.green / 255, this.blue / 255, this.alpha / 255);
        }
        return this;
    };
    Color.BLACK = new Color(0, 0, 0);
    Color.WHITE = new Color(255, 255, 255);
    Color.GRAY = new Color(128, 128, 128);
    Color.RED = new Color(255, 0, 0);
    Color.GREEN = new Color(0, 255, 0);
    Color.BLUE = new Color(0, 0, 255);
    return Color;
}());
exports.Color = Color;
//# sourceMappingURL=color.model.js.map