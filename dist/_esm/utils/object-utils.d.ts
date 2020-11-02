import { ObjectEntry } from "../types/object-entry.interface";
export declare function without<T extends object>(obj: T, items: (keyof T)[]): Omit<T, any>;
export declare function getObjectEntries<T extends object>(obj: T): ObjectEntry<T>[];
export declare function getNestedProperty(object: any, propertyPath: string, separator?: string): any;
export declare function setNestedProperty<T>(key: string, item: any, value: T): void;
export declare function roughSizeOfObject<T>(object: T): number;
export declare function size<T extends object>(object: T): number;
export declare function isPlain<T extends object>(object: T): boolean;
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
