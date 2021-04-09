import { __extends } from "tslib";
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
export { SimpleMat4 };
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
export { Mat4 };
//# sourceMappingURL=mat4.js.map