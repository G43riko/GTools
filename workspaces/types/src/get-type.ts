/**
 * A utility type that retrieves the type of a deeply nested property from an object type `T` given a key `K`.
 *
 * - If `K` is a direct key of `T`, it retrieves the type associated with the key `K` in `T`.
 * - If `K` is a string representing a nested path (e.g., 'key1.key2'), it recursively retrieves the type of the nested property.
 * - If `K` does not match any key in `T` or if the path is invalid, it evaluates to `never`.
 *
 * This type is useful for working with strongly-typed, deeply nested objects, allowing type-safe access to specific properties.
 *
 * @template T The object type from which the property type is to be extracted.
 * @template K The key or nested path used to locate the property type.
 * @see https://github.com/type-challenges/type-challenges/issues/368
 **/
export type GetType<T, K> = K extends keyof T
    ? T[K]
    : K extends `${infer First}.${infer Rest}`
        ? GetType<GetType<T, First>, Rest>
        : never
