import { __spreadArrays } from "tslib";
import { SelectionHolder } from "./selection-holder";
var Selection = (function () {
    function Selection(allValues, options) {
        var _this = this;
        if (allValues === void 0) { allValues = []; }
        if (options === void 0) { options = {
            mode: "single",
            unselectable: false,
        }; }
        this.allValues = allValues;
        this.options = options;
        this.selectionHolder = new SelectionHolder();
        this.selection = Object.defineProperties({}, {
            isSelected: { value: function (item) { return _this.selectionHolder.isSelected(item); } },
            selected: {
                get: function () { return _this.selectionHolder.selected; },
            },
            length: {
                get: function () { return _this.selectionHolder.length; },
            },
        });
    }
    Selection.prototype.click = function (item, options) {
        if (options === void 0) { options = {}; }
        switch (this.options.mode) {
            case "single":
                return this.processSingleClick(item);
            case "multi":
                return this.processMultiClick(item);
            case "multi-control":
                return this.processMultiControlClick(item, !!options.ctrlDown);
            case "multi-continuous":
                return this.processMultiContinuousClick(item, !!options.shiftDown);
        }
    };
    Selection.prototype.setValues = function (values) {
        this.allValues = values;
    };
    Selection.prototype.setOptions = function (options) {
        this.options.mode = options.mode || this.options.mode;
        this.options.unselectable = typeof options.unselectable === "boolean" ? options.unselectable : this.options.unselectable;
    };
    Selection.prototype.processSingleClick = function (item) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            this.selectionHolder.selectOnly(item);
        }
    };
    Selection.prototype.processMultiClick = function (item) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                this.selectionHolder.unselect(item);
            }
            else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            this.selectionHolder.select(item);
        }
    };
    Selection.prototype.processMultiControlClick = function (item, isCtrlDown) {
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                if (isCtrlDown) {
                    this.selectionHolder.unselect(item);
                }
                else {
                    this.selectionHolder.selectOnly(item);
                }
            }
            else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            if (isCtrlDown) {
                this.selectionHolder.select(item);
            }
            else {
                this.selectionHolder.selectOnly(item);
            }
        }
    };
    Selection.prototype.processMultiContinuousClick = function (item, isShiftDown) {
        var _a;
        var _this = this;
        if (this.selectionHolder.isSelected(item)) {
            if (this.selectionHolder.length > 1) {
                this.selectionHolder.selectOnly(item);
            }
            else if (this.options.unselectable) {
                this.selectionHolder.unselectAll();
            }
        }
        else {
            if (isShiftDown) {
                if (this.selectionHolder.length === 0) {
                    this.selectionHolder.select(item);
                }
                else {
                    var selectedIndices = this.selectionHolder.selected.map(function (actualItem) { return _this.allValues.indexOf(actualItem); });
                    var minIndex = Math.min.apply(Math, __spreadArrays([this.allValues.indexOf(item)], selectedIndices));
                    var maxIndex = Math.max.apply(Math, __spreadArrays([this.allValues.indexOf(item)], selectedIndices));
                    (_a = this.selectionHolder).selectOnly.apply(_a, this.allValues.slice(minIndex, maxIndex + 1));
                }
            }
            else {
                this.selectionHolder.selectOnly(item);
            }
        }
    };
    return Selection;
}());
export { Selection };
//# sourceMappingURL=selection.js.map