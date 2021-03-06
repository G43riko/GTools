/**
 * Create class by name and data-structures of parameters
 *
 * @param name - class name
 * @param args - constructor parameter
 * @returns created object
 */
export function createClass(name: any, args: any[]): any {
    const temp = Object.create(name.prototype);
    name.apply(temp, args);

    return temp;
}

export function createInstance<T, S extends new (...args: any[]) => T>(type: S, ...params: ConstructorParameters<S>): T {
    return new type(...params);
}

export async function callFirstFunction(...functions: any[]): Promise<any> {
    for (const func of functions) {
        if (typeof func === "function") {
            // eslint-disable-next-line no-await-in-loop
            return await func();
        }
    }
}
