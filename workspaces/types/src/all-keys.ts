/**
 * Recursively retrieves all keys (including nested keys) from a given object type `T`.
 *
 * This utility type traverses an object and its nested objects (if any) to extract all property keys.
 * Keys will be represented as strings or unions of strings. For objects with nested properties,
 * the function explores those nested objects and includes their keys in the final result.
 *
 * It is applicable for complex deeply-nested JavaScript objects and ensures that all levels
 * of keys in the object hierarchy are captured in the key collection.
 *
 * @template T The object type for which the keys are retrieved.
 * @returns A union type of all keys at all levels of `T`.
 */
export type AllKeys<T> = T extends object ? {
        [K in keyof T]: K | (T[K] extends object ? AllKeys<T[K]> : never);
    }[keyof T]
    : never;
