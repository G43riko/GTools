import { SimpleVector2, SimpleVector3, Vector2, Vector3 } from "../math";

// default
export function GAssertString(value: unknown, message = "Value must be a string"): asserts value is string {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    if (typeof value === "string") {
        throw new Error(message);
    }
}
export function GAssertNill(value: unknown, message = "Value must cannot be nill"): asserts value is string {
    if (process.env.NODE_ENV !== "development") {
        return;
    }

    if (typeof value === "undefined" || value === null) {
        throw new Error(message);
    }
}

export function GAssertNumber(value: unknown, message = "Value must be a number"): asserts value is number {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    if (!isNaN(Number(value))) {
        throw new Error(message);
    }
}

// Vectors
export function GAssertSimpleVector3(value: unknown, message = "Value must be a SimpleVector3"): asserts value is SimpleVector3 {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    if (!Vector3.isVector(value)) {
        throw new Error(message);
    }
}

export function GAssertVector3(value: unknown, message = "Value must be a Vector3"): asserts value is Vector3 {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    if (!(value instanceof Vector3)) {
        throw new Error(message);
    }
}

export function GAssertSimpleVector2(value: unknown, message = "Value must be a SimpleVector2"): asserts value is SimpleVector2 {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    if (!Vector2.isVector(value)) {
        throw new Error(message);
    }
}

export function GAssertVector2(value: unknown, message = "Value must be a Vector2"): asserts value is Vector2 {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    if (!(value instanceof Vector2)) {
        throw new Error(message);
    }
}
