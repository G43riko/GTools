import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { Button, Keys, PointerType } from "@g43/enums";
import {
    compareEventButton,
    compareEventKey,
    extractButtonFromEvent,
    extractKeyFromEvent,
    extractPointerTypeFromPointerEvent,
    isPointerEvent,
    isTouchEvent,
    simplifyKey,
} from "./input-utils.ts"; // Replace with the correct path

if (!globalThis.MouseEvent) {
    class MouseEvent {
        public readonly button?: string;
        public readonly type: string;
        public constructor(
            type: string,
            { button }: { button?: string } = {},
        ) {
            this.type = type;
            this.button = button;
        }
    }
    Object.assign(globalThis, { MouseEvent });
}
if (!globalThis.PointerEvent) {
    class PointerEvent {
        public readonly pointerType?: string;
        public readonly type: string;
        public constructor(
            type: string,
            { pointerType }: { pointerType?: string } = {},
        ) {
            this.type = type;
            this.pointerType = pointerType;
        }
    }
    Object.assign(globalThis, { PointerEvent });
}

if (!globalThis.MouseEvent) {
    class MouseEvent {
        public readonly type: string;
        public constructor(
            type: string,
        ) {
            this.type = type;
        }
    }
    Object.assign(globalThis, { MouseEvent });
}

if (!globalThis.TouchEvent) {
    class TouchEvent {
        public readonly type: string;
        public constructor(
            type: string,
        ) {
            this.type = type;
        }
    }
    Object.assign(globalThis, { TouchEvent });
}

describe("extractKeyFromEvent", () => {
    it("should extract the correct key code from the event", () => {
        const mockEvent = { code: Keys.A };
        expect(extractKeyFromEvent(mockEvent)).toBe(Keys.A);

        const mockEvent2 = { code: Keys.ARROW_LEFT };
        expect(extractKeyFromEvent(mockEvent2)).toBe(Keys.ARROW_LEFT);
    });
});

describe("compareEventKey", () => {
    it("should return true if the event key matches any of the provided keys", () => {
        const mockEvent = { code: Keys.A };
        expect(compareEventKey(mockEvent as KeyboardEvent, Keys.A, Keys.B)).toBe(true);
        expect(compareEventKey(mockEvent as KeyboardEvent, Keys.B, Keys.C)).toBe(false);

        const mockEvent2 = { code: Keys.ARROW_LEFT };
        expect(compareEventKey(mockEvent2 as KeyboardEvent, Keys.ARROW_LEFT, Keys.ARROW_RIGHT)).toBe(true);
    });
});

describe("isTouchEvent", () => {
    it("should return true if the event is a TouchEvent, false otherwise", () => {
        const mockTouchEvent = new TouchEvent("touchstart");
        const mockMouseEvent = new MouseEvent("click");

        expect(isTouchEvent(mockTouchEvent)).toBe(true);
        expect(isTouchEvent(mockMouseEvent)).toBe(false);
    });
});

describe("isPointerEvent", () => {
    it("should return true if the event is a PointerEvent, false otherwise", () => {
        const mockPointerEvent = new PointerEvent("pointerdown");
        const mockMouseEvent = new MouseEvent("click");

        expect(isPointerEvent(mockPointerEvent)).toBe(true);
        expect(isPointerEvent(mockMouseEvent)).toBe(false);
    });
});

describe("compareEventButton", () => {
    it("should return true if the event button matches any of the provided buttons", () => {
        const mockMouseEventLeft = new MouseEvent("click", { button: 0 }); // Left mouse button
        const mockMouseEventMiddle = new MouseEvent("click", { button: 1 }); // Middle mouse button
        const mockMouseEventRight = new MouseEvent("click", { button: 2 }); // Right mouse button
        const mockTouchEvent = new TouchEvent("touchstart");

        expect(compareEventButton(mockMouseEventLeft, Button.LEFT)).toBe(true);
        expect(compareEventButton(mockMouseEventLeft, Button.MIDDLE)).toBe(false);
        expect(compareEventButton(mockMouseEventMiddle, Button.MIDDLE)).toBe(true);
        expect(compareEventButton(mockMouseEventRight, Button.RIGHT)).toBe(true);
        expect(compareEventButton(mockTouchEvent, Button.UNKNOWN)).toBe(true); // Touch event should default to UNKNOWN
    });
});

describe("simplifyKey", () => {
    it("should simplify key names correctly", () => {
        expect(simplifyKey(Keys.A)).toBe("A");
        expect(simplifyKey(Keys.DIGIT_1)).toBe("1");
        expect(simplifyKey(Keys.CONTROL)).toBe("CTRL");
        expect(simplifyKey(Keys.ALT)).toBe("ALT");
        expect(simplifyKey(Keys.SHIFT)).toBe("SHIFT");
        // expect(simplifyKey(Keys.F1)).toBe(Keys.F1); // Test a key that shouldn't be simplified
        // expect(simplifyKey(Keys.CONTROL_LEFT)).toBe("CTRL"); // Test a key that shouldn't be simplified
    });
});

describe("extractButtonFromEvent", () => {
    it("should extract the correct button from MouseEvent", () => {
        const mockMouseEventLeft = new MouseEvent("click", { button: 0 });
        const mockMouseEventMiddle = new MouseEvent("click", { button: 1 });
        const mockMouseEventRight = new MouseEvent("click", { button: 2 });
        const mockMouseEventUnknown = new MouseEvent("click", { button: 3 });

        expect(extractButtonFromEvent(mockMouseEventLeft)).toBe(Button.LEFT);
        expect(extractButtonFromEvent(mockMouseEventMiddle)).toBe(Button.MIDDLE);
        expect(extractButtonFromEvent(mockMouseEventRight)).toBe(Button.RIGHT);
        expect(extractButtonFromEvent(mockMouseEventUnknown)).toBe(Button.UNKNOWN);
    });

    it("should handle TouchEvent", () => {
        const mockTouchEvent = new TouchEvent("touchstart");
        expect(extractButtonFromEvent(mockTouchEvent)).toBe(Button.UNKNOWN);
        expect(extractButtonFromEvent(mockTouchEvent, true)).toBeUndefined(); // With allowUndefined
    });

    it("should handle unknown button codes and allow undefined", () => {
        const mockMouseEventUnknown = new MouseEvent("click", { button: 4 }); // Simulate an unknown button code
        expect(extractButtonFromEvent(mockMouseEventUnknown, true)).toBeUndefined();
    });

    it("should handle unknown button codes and throw an error", () => {
        const mockMouseEventUnknown = new MouseEvent("click", { button: 4 }); // Simulate an unknown button code
        expect(() => extractButtonFromEvent(mockMouseEventUnknown)).toThrow();
    });
});

describe("extractPointerTypeFromPointerEvent", () => {
    it("should extract the correct pointer type from the event", () => {
        const mockPointerEventTouch = new PointerEvent("pointerdown", { pointerType: "touch" }) as any;
        const mockPointerEventMouse = new PointerEvent("pointerdown", { pointerType: "mouse" }) as any;
        const mockPointerEventPen = new PointerEvent("pointerdown", { pointerType: "pen" }) as any;
        const mockPointerEventUnknown = new PointerEvent("pointerdown", { pointerType: "unknown" }) as any; // Simulate an unknown pointer type

        expect(extractPointerTypeFromPointerEvent(mockPointerEventTouch)).toBe(PointerType.TOUCH);
        expect(extractPointerTypeFromPointerEvent(mockPointerEventMouse)).toBe(PointerType.MOUSE);
        expect(extractPointerTypeFromPointerEvent(mockPointerEventPen)).toBe(PointerType.PEN);
        expect(extractPointerTypeFromPointerEvent(mockPointerEventUnknown)).toBe(PointerType.UNKNOWN);
    });
});
