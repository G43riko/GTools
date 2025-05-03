/**
 * Represents either a direct value of type T or a function that returns a value of type T.
 *
 * This type is useful when you want to allow both static values and dynamic computed values
 * in the same context.
 *
 * @template T - The type of the value provided
 * @template Args - The types of arguments that the provider function accepts (if it's a function)
 *
 * @example
 * ```ts
 * // Direct value
 * const directValue: ValueProvider<number> = 42;
 *
 * // Function that returns a value
 * const computedValue: ValueProvider<number> = () => 42;
 *
 * // Function with arguments
 * const parameterizedValue: ValueProvider<string, [name: string]> = (name) => `Hello, ${name}!`;
 * ```
 */
export type ValueProvider<T, Args extends unknown[] = []> = T | ((...args: Args) => T);

/**
 * Determines whether a given provider is a function.
 *
 * This is a type guard that checks if the provider is a function that can be called
 * to produce a value, rather than being a direct value itself.
 *
 * @template T - The type of the value provided
 * @template Args - The types of arguments that the provider function accepts (if it's a function)
 * @param provider - The provider to evaluate
 * @returns A boolean value indicating whether the provider is a function
 *
 * @example
 * ```ts
 * const directValue = 42;
 * const functionValue = () => 42;
 *
 * isProviderFunction(directValue); // false
 * isProviderFunction(functionValue); // true
 * ```
 */
export function isProviderFunction<T, Args extends unknown[] = []>(
    provider: ValueProvider<T, Args>,
): provider is (...args: Args) => T {
    return typeof provider === "function";
}

/**
 * Retrieves a value from the given provider. The provider can be a function or a direct value.
 * If the provider is a function, it is invoked with the provided arguments to compute the value.
 *
 * This function is useful when you want to handle both static values and dynamic computed values
 * in a consistent way without having to check the type of the provider yourself.
 *
 * @template T - The type of the value provided
 * @template Args - The types of arguments that the provider function accepts (if it's a function)
 * @param provider - The provider that supplies the value (either a function or a direct value)
 * @param args - The arguments to pass to the provider function if the provider is a function
 * @returns The value retrieved from the provider
 *
 * @example
 * ```ts
 * // With a direct value
 * const value1 = getValueFromProvider(42); // Returns 42
 *
 * // With a function
 * const value2 = getValueFromProvider(() => 42); // Returns 42
 *
 * // With a function that takes arguments
 * const greeting = getValueFromProvider(
 *   (name: string) => `Hello, ${name}!`,
 *   "World"
 * ); // Returns "Hello, World!"
 * ```
 */
export function getValueFromProvider<T, Args extends unknown[]>(provider: ValueProvider<T, Args>, ...args: Args): T {
    if (isProviderFunction(provider)) {
        return provider(...args);
    }

    return provider;
}
