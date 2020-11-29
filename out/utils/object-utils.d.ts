import { ObjectEntry } from "gtools/types";
export declare function without<T extends Record<string, unknown>>(obj: T, items: (keyof T)[]): Omit<T, any>;
export declare function getObjectEntries<T extends Record<string, unknown>>(obj: T): ObjectEntry<T>[];
export declare function getNestedProperty(object: any, propertyPath: string, separator?: string): any;
export declare function setNestedProperty<T>(key: string, item: any, value: T): void;
export declare function roughSizeOfObject<T>(object: T): number;
export declare function size<T extends (Record<string, unknown> | unknown[])>(object: T): number;
export declare function isPlain<T extends Record<string, unknown>>(object: T): boolean;
export declare function makeFlat(list: any[], propertyPath: string, separator?: string, skipUndefined?: boolean): any;
