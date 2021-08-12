export function coerceBooleanProperty<T>(value: T): boolean {
    return value !== null && String(value) !== "false";
}
