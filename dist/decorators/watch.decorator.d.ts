import { PropertyDecorator } from "../types/property-decorator.type";
export interface WatchOptions {
    enumerable?: boolean;
    configurable?: boolean;
    prefix?: string;
}
export declare function Watch(onSet?: (newValue: any, oldValue: any) => any, options?: WatchOptions): PropertyDecorator;
