export const PointerType = {
    TOUCH: "TOUCH",
    MOUSE: "MOUSE",
    PEN: "PEN",
    UNKNOWN: "UNKNOWN",
};
export type PointerType = (typeof PointerType)[keyof typeof PointerType];
