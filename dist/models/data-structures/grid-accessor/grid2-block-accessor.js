"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid2BlockAccessor = void 0;
var Grid2BlockAccessor = (function () {
    function Grid2BlockAccessor(holder, position) {
        this.holder = holder;
        this.position = position;
    }
    Grid2BlockAccessor.prototype.check = function (filter) {
        return filter(this.holder.get(this.position.x, this.position.y));
    };
    Grid2BlockAccessor.prototype.getByOffset = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return new Grid2BlockAccessor(this.holder, { x: this.position.x + x, y: this.position.y - y });
    };
    Object.defineProperty(Grid2BlockAccessor.prototype, "top", {
        get: function () {
            return this.getByOffset(0, -1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid2BlockAccessor.prototype, "bottom", {
        get: function () {
            return this.getByOffset(0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid2BlockAccessor.prototype, "left", {
        get: function () {
            return this.getByOffset(-1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid2BlockAccessor.prototype, "right", {
        get: function () {
            return this.getByOffset(1, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Grid2BlockAccessor;
}());
exports.Grid2BlockAccessor = Grid2BlockAccessor;
//# sourceMappingURL=grid2-block-accessor.js.map