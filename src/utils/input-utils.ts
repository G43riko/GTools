import { Button, Keys } from "../enums";


export function getButtonFromEventButtons(button: MouseEvent["button"]): Button | undefined {
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

export function getButtonFromEvent(event: MouseEvent): Button | undefined {
    return getButtonFromEventButtons(event.button);
}

export function compareEventKey(event: KeyboardEvent, key: Keys): boolean {
    return event.code === key;
}
