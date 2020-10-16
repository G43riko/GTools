export function coerceBooleanProperty(value) {
    return value !== null && "" + value !== "false";
}
