
type GenNode<K extends string | number,IsRoot extends boolean> = IsRoot extends true? `${K}`: `.${K}` | (K extends number? `[${K}]` | `.[${K}]`:never)

/**
 * Represents the recursive key paths of an object type `T`.
 *
 * This utility type computes string literals that correspond to all valid key paths of an object,
 * including nested keys separated by a delimiting syntax.
 *
 * @template T The object type for which key paths need to be generated.
 * @template IsRoot A boolean value typically used for internal tracking to indicate if the current object represents the root level. Default is `true`.
 * @template K The keys of the object `T`. This defaults to `keyof T` and restricts type exploration for nested levels.
 * @see https://github.com/type-challenges/type-challenges/issues/7939
 */
export type ObjectKeyPaths<
    T extends object,
    IsRoot extends boolean = true,
    K extends keyof T = keyof T
> =
    K extends string | number ?
        GenNode<K,IsRoot> | (T[K] extends object? `${GenNode<K,IsRoot>}${ObjectKeyPaths<T[K],false>}`:never)
        :never;
