import { ObjectEntry } from "gtools/types";
export declare function without<T extends Record<string, unknown>>(obj: T, items: (keyof T)[]): Omit<T, any>;
export declare function deepEqual<T>(objA: T, objB: T): boolean;
export declare function deepCopy<T>(source: T): T;
export declare function getObjectEntries<T extends Record<string, unknown>>(obj: T): ObjectEntry<T>[];
export declare function getNestedProperty(object: any, propertyPath: string, separator?: string): any;
export declare function setNestedProperty<T>(key: string, item: any, value: T): void;
export declare function roughSizeOfObject<T>(object: T): number;
export declare function size<T extends (Record<string, unknown> | unknown[])>(object: T): number;
export declare function isPlain<T extends Record<string, unknown>>(object: T): boolean;
/**
 *
 * @param list - list to flat
 * @param propertyPath - path to property
 * @param separator - separator in propertyPath
 * @param skipUndefined - true if undefined should be skipped
 *
 * @example
 * ```
 * const items = [
 *    {
 *        person: {
 *            name: "Gabriel"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Ella"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Gabriel"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Joe"
 *        }
 *    }
 * ]
 *
 * console.log(makeFlat(items), "person.name");
 * // ["Gabriel", "Ella", "Gabriel", "Joe"]
 * console.log(makeFlat(items), "person_name", "_");
 * // ["Gabriel", "Ella", "Gabriel", "Joe"]
 * console.log(makeFlat(items), "person.name", ".", true);
 * // ["Gabriel", "Ella", "Joe"]
 * ```
 */
export declare function makeFlat(list: any[], propertyPath: string, separator?: string, skipUndefined?: boolean): any;
//# sourceMappingURL=object-utils.d.ts.map