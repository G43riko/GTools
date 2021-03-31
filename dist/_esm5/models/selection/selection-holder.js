import { __spreadArrays } from "tslib";
var SelectionHolder = (function () {
    function SelectionHolder(comparator) {
        if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
        this.comparator = comparator;
        this.selectedValues = [];
    }
    SelectionHolder.prototype.isSelected = function (item) {
        var _this = this;
        return this.selectedValues.some(function (actualItem) { return _this.comparator(actualItem, item); });
    };
    SelectionHolder.prototype.emit = function (data) {
        this.selectedValues = data;
        if (typeof this.onChange === "function") {
            this.onChange();
        }
    };
    SelectionHolder.prototype.select = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.emit(__spreadArrays(this.selectedValues, items));
    };
    SelectionHolder.prototype.unselectAll = function () {
        this.emit([]);
    };
    SelectionHolder.prototype.selectOnly = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.emit(__spreadArrays(items));
    };
    SelectionHolder.prototype.unselect = function (item) {
        var _this = this;
        var newSelectedValues = __spreadArrays(this.selectedValues);
        var index = this.selectedValues.findIndex(function (actualItem) {
            return _this.comparator(actualItem, item);
        });
        if (index < 0) {
            return;
        }
        newSelectedValues.splice(index, 1);
        this.emit(newSelectedValues);
    };
    Object.defineProperty(SelectionHolder.prototype, "selected", {
        get: function () {
            return this.selectedValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectionHolder.prototype, "length", {
        get: function () {
            return this.selectedValues.length;
        },
        enumerable: false,
        configurable: true
    });
    return SelectionHolder;
}());
export { SelectionHolder };
//# sourceMappingURL=selection-holder.js.map