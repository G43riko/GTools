import { Checkers } from "../dom/Checkers";
import { NullPointerException } from "../errors/NullPointerException";
import { WrongParameterException } from "../errors/WrongParameterException";
import { WrongTypeException } from "../errors/WrongTypeException";

let useRuntimeCheckers = true;

export class Runtime {
    public static useRuntimeExceptions(value: boolean): void {
        useRuntimeCheckers = value;
    }

    public static notNull<T>(obj: T): T {
        if (useRuntimeCheckers && obj === null) {
            throw new NullPointerException();
        }

        return obj;
    }

    public static exists<T>(obj: T): T {
        if (useRuntimeCheckers && (typeof obj !== "boolean" && !obj)) {
            throw new Error("Variable ");
        }

        return obj;
    }

    public static isArray<T>(obj: T[]): T[] {
        if (useRuntimeCheckers && !Checkers.isArray(obj)) {
            throw new WrongTypeException("Array");
        }

        return obj;
    }

    public static isString(obj: string): string {
        if (useRuntimeCheckers && !Checkers.isString(obj)) {
            throw new WrongTypeException("string");
        }

        return obj;
    }

    public static isNumber(obj: number): number {
        if (useRuntimeCheckers && !Checkers.isNumber(obj)) {
            throw new WrongTypeException("number");
        }

        return obj;
    }

    public static isFunction<T>(obj: T): T {
        if (useRuntimeCheckers && !Checkers.isFunction(obj)) {
            throw new WrongTypeException("function");
        }

        return obj;
    }

    // tslint:disable-next-line
    public static checkFunction(func: Function, args: any[] = [], thisArg = this): boolean {
        try {
            func.apply(thisArg, args);

            return true;
        }
        catch (e) {
            return false;
        }
    }

    public static isBoolean(obj: boolean): boolean {
        if (useRuntimeCheckers && !Checkers.isBoolean(obj)) {
            throw new WrongTypeException("boolean");
        }

        return obj;
    }

    public static min(obj: number, value: number): number {
        if (useRuntimeCheckers && obj <= value) {
            throw new WrongParameterException(`Number ${obj}  must be greater than ${value}`);
        }

        return obj;
    }

    public static max(obj: number, value: number): number {
        if (useRuntimeCheckers && obj >= value) {
            throw new WrongParameterException(`Number ${obj}  must be lower than ${value}`);
        }

        return obj;
    }
}
