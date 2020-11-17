import { PropertyDecorator } from "gtools/types";
export interface WatchOptions {
    enumerable?: boolean;
    configurable?: boolean;
    prefix?: string;
}
export declare function Watch(onSet?: (newValue: any, oldValue: any) => any, options?: WatchOptions): PropertyDecorator;
//# sourceMappingURL=watch.decorator.d.ts.map