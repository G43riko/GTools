/**
 * Create class by name and data-structures of parameters
 *
 * @param name - class name
 * @param args - constructor parameter
 * @returns created object
 */
export declare function createClass(name: any, args: any[]): any;
export declare function createInstance<T, S extends new (...args: any[]) => T>(type: S, ...params: ConstructorParameters<S>): T;
export declare function callFirstFunction(...functions: any[]): Promise<any>;
//# sourceMappingURL=reflection-utils.d.ts.map