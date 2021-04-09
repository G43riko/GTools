"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mat4 = exports.SimpleMat4 = void 0;
var SimpleMat4 = (function () {
    function SimpleMat4(data) {
        this.data = data;
    }
    SimpleMat4.prototype.set = function (x, y, value) {
        this.data[x][y] = value;
    };
    SimpleMat4.prototype.get = function (x, y) {
        return this.data[x][y];
    };
    return SimpleMat4;
}());
exports.SimpleMat4 = SimpleMat4;
var Mat4 = (function (_super) {
    __extends(Mat4, _super);
    function Mat4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mat4.createViewMatrix = function () {
    };
    Mat4.createTransformMatrix = function () {
    };
    Mat4.createPerspectiveMatrix = function () {
    };
    Mat4.createOrthographicMatrix = function () {
    };
    return Mat4;
}(SimpleMat4));
exports.Mat4 = Mat4;
//# sourceMappingURL=mat4.js.map