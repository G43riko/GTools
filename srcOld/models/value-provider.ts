export type ValueProvider<T> = T | (() => T);

function isProviderFunction<T>(provider: ValueProvider<T>): provider is () => T {
    return typeof provider === "function";
}

export function getValueFromProvider<T>(provider: ValueProvider<T>): T {
    if (isProviderFunction(provider)) {
        return provider();
    }

    return provider;
}
