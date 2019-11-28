import { PropertyDecoratorType } from "../utils/DecoratorsUtils";
export declare function Mapper(params: {
    onGet?: (oldValue: any) => any;
    onSet?: (oldValue: any) => void;
}, prefix?: string): PropertyDecoratorType;
