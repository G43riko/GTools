"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseBooleanValue(key) {
    if (key.match(/(1|true|yes|ano|áno)/i)) {
        return true;
    }
    if (key.match(/(0|false|no|nie)/i)) {
        return false;
    }
}
exports.parseBooleanValue = parseBooleanValue;
