"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasCamera = void 0;
var defaultCameraViewport = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    scale: [1, 1],
};
var CanvasCamera = (function () {
    function CanvasCamera(context, settings) {
        var _a;
        this.context = context;
        this.settings = settings;
        this.distance = 1000;
        this.lookAt = [0, 0];
        this.viewport = Object.assign({}, defaultCameraViewport);
        this.fieldOfView = (_a = this.settings.fieldOfView) !== null && _a !== void 0 ? _a : Math.PI / 4;
        this.aspectRatio = this.context.canvas.width / this.context.canvas.height;
        this.addListeners();
        this.updateViewport();
    }
    CanvasCamera.prototype.begin = function () {
        this.context.save();
        this.applyScale();
        this.applyTranslation();
    };
    CanvasCamera.prototype.end = function () {
        this.context.restore();
    };
    CanvasCamera.prototype.applyScale = function () {
        this.context.scale(this.viewport.scale[0], this.viewport.scale[1]);
    };
    CanvasCamera.prototype.applyTranslation = function () {
        this.context.translate(-this.viewport.left, -this.viewport.top);
    };
    CanvasCamera.prototype.updateViewport = function () {
        this.viewport.width = this.distance * Math.tan(this.fieldOfView);
        this.viewport.height = this.viewport.width / this.aspectRatio;
        this.viewport.left = this.lookAt[0] - (this.viewport.width / 2);
        this.viewport.top = this.lookAt[1] - (this.viewport.height / 2);
        this.viewport.right = this.viewport.left + this.viewport.width;
        this.viewport.bottom = this.viewport.top + this.viewport.height;
        this.viewport.scale[0] = this.context.canvas.width / this.viewport.width;
        this.viewport.scale[1] = this.context.canvas.height / this.viewport.height;
    };
    CanvasCamera.prototype.zoomTo = function (zoom) {
        this.distance = zoom;
        this.updateViewport();
    };
    CanvasCamera.prototype.moveTo = function (x, y) {
        this.lookAt[0] = x;
        this.lookAt[1] = y;
        this.updateViewport();
    };
    CanvasCamera.prototype.screenToWorld = function (x, y, obj) {
        if (obj === void 0) { obj = { x: 0, y: 0 }; }
        obj = obj || {};
        obj.x = (x / this.viewport.scale[0]) + this.viewport.left;
        obj.y = (y / this.viewport.scale[1]) + this.viewport.top;
        return obj;
    };
    CanvasCamera.prototype.worldToScreen = function (x, y, obj) {
        if (obj === void 0) { obj = { x: 0, y: 0 }; }
        obj.x = (x - this.viewport.left) * (this.viewport.scale[0]);
        obj.y = (y - this.viewport.top) * (this.viewport.scale[1]);
        return obj;
    };
    CanvasCamera.prototype.addListeners = function () {
        var _this = this;
        window.onwheel = function (e) {
            if (e.ctrlKey) {
                var zoomLevel = _this.distance - (e.deltaY * 20);
                if (zoomLevel <= 1) {
                    zoomLevel = 1;
                }
                _this.zoomTo(zoomLevel);
            }
            else {
                var x = _this.lookAt[0] + (e.deltaX * 2);
                var y = _this.lookAt[1] + (e.deltaY * 2);
                _this.moveTo(x, y);
            }
        };
        window.addEventListener("keydown", function (e) {
            if (e.key === "r") {
                _this.zoomTo(1000);
                _this.moveTo(0, 0);
            }
        });
    };
    return CanvasCamera;
}());
exports.CanvasCamera = CanvasCamera;
//# sourceMappingURL=canvas-camera.js.map