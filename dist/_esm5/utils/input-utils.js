import { Button } from "gtools/enums";
export function getButtonFromEvent(event) {
    return getButtonFromEventButtons(event.button);
}
export function getButtonFromEventButtons(button) {
    if (button === 0) {
        return Button.LEFT;
    }
    if (button === 1) {
        return Button.MIDDLE;
    }
    if (button === 2) {
        return Button.RIGHT;
    }
}
export function compareEventKey(event, key) {
    return event.code === key;
}
//# sourceMappingURL=input-utils.js.map