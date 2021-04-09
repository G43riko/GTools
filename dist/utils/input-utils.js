"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareEventKey = exports.getButtonFromEventButtons = exports.getButtonFromEvent = void 0;
var enums_1 = require("../enums");
function getButtonFromEvent(event) {
    return getButtonFromEventButtons(event.button);
}
exports.getButtonFromEvent = getButtonFromEvent;
function getButtonFromEventButtons(button) {
    if (button === 0) {
        return enums_1.Button.LEFT;
    }
    if (button === 1) {
        return enums_1.Button.MIDDLE;
    }
    if (button === 2) {
        return enums_1.Button.RIGHT;
    }
}
exports.getButtonFromEventButtons = getButtonFromEventButtons;
function compareEventKey(event, key) {
    return event.code === key;
}
exports.compareEventKey = compareEventKey;
//# sourceMappingURL=input-utils.js.map