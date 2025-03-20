import { Button, Keys, PointerType } from "@g43/enums";

type InputEvent = TouchEvent | PointerEvent | MouseEvent;

export function extractKeyFromEvent(event: any): Keys {
    return event.code as Keys;
}

export function compareEventKey(event: KeyboardEvent, ...keys: Keys[]): boolean {
    return keys.includes(extractKeyFromEvent(event));
}

export function isTouchEvent(event: Event): event is TouchEvent {
    return "TouchEvent" in globalThis && event instanceof TouchEvent;
}

export function isPointerEvent(event: Event): event is PointerEvent {
    return "PointerEvent" in globalThis && event instanceof PointerEvent;
}

export function compareEventButton(event: InputEvent, ...buttons: Button[]): boolean {
    return buttons.includes(extractButtonFromEvent(event));
}

enum NativePointerButton {
    NoButton = -1,
    Left = 0,
    Middle = 1,
    Right = 2,
    Unknown = 3,
}

/**
 * @param key
 * @returns
 * ```ts
 * import {assertEquals} from "@std/assert";
 *
 * assertEquals(simplifyKey(Keys.A), "A"); // KeyA => A
 * assertEquals(simplifyKey(Keys.DIGIT_1), "1"); // Digit1 => 1
 * assertEquals(simplifyKey(Keys.CONTROL), "CTRL"); // ControlLeft => CTRL
 * assertEquals(simplifyKey(Keys.ALT), "ALT"); // AltLeft => ALT
 * assertEquals(simplifyKey(Keys.SHIFT), "SHIFT"); // ShiftLeft => SHIFT
 * ```
 */
export function simplifyKey(key: Keys): string {
    if (/Key[A-Z]/.test(key)) {
        return key.slice(3);
    }
    if (/Digit[0-1]/.test(key)) {
        return key.slice(5);
    }

    switch (key) {
        case Keys.CONTROL:
            return "CTRL";
        case Keys.ALT:
            return "ALT";
        case Keys.SHIFT:
            return "SHIFT";
        default:
            return key;
    }
}

export function extractButtonFromEvent(event: InputEvent): Button;
export function extractButtonFromEvent(
    event: InputEvent,
    allowUndefined: true,
): Button | unknown;
export function extractButtonFromEvent(
    event: InputEvent,
    allowUndefined?: true,
): Button | unknown {
    if (isTouchEvent(event)) {
        return allowUndefined ? undefined : Button.UNKNOWN;
    }

    switch (event.button) {
        case NativePointerButton.NoButton:
            return Button.NO_BUTTON;
        case NativePointerButton.Left:
            return Button.LEFT;
        case NativePointerButton.Middle:
            return Button.MIDDLE;
        case NativePointerButton.Right:
            return Button.RIGHT;
        case NativePointerButton.Unknown:
            return allowUndefined ? undefined : Button.UNKNOWN;
        default:
            if (allowUndefined) {
                return undefined;
            }
            throw new Error(`Unknown button ${event.button}`);
    }
}

export function extractPointerTypeFromPointerEvent(event: PointerEvent): any {
    switch (event.pointerType) {
        case "touch":
            return PointerType.TOUCH;
        case "mouse":
            return PointerType.MOUSE;
        case "pen":
            return PointerType.PEN;
        default:
            return PointerType.UNKNOWN;
    }
}
