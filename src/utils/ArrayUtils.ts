export class ArrayUtils {
    public static where<T = any>(array: any[], condition: T[]): T[] {
        const result: T[] = [];
        array.forEach((e) => {
            let add = true;
            for (const key in condition) {
                if (condition.hasOwnProperty(key)) {
                    if (e[key] !== condition[key]) {
                        add = false;
                        break;
                    }
                }
            }
            if (add) {
                result[result.length] = e;
            }
        });

        return result;
    }

    public static subArray(array: any[], from = 0, to = array.length): any[] {
        const result: any[] = [];
        const final = array.length < to ? array.length : to;
        for (let i = from; i < final; i++) {
            result[result.length] = array[i];
        }

        return result;
    }

    public static max(array: number[]): number {
        return array.reduce((a, b) => a > b ? a : b);
    }

    public static min(array: number[]): number {
        return array.reduce((a, b) => a < b ? a : b);
    }

    public static sum(array: number[]): number {
        return array.reduce((a, b) => a + b);
    }

    public static avg(array: number[]): number {
        return array.reduce((a, b) => a + b) / array.length;
    }

    public static join(array: any[], delimiter: string, prefix: string = "", postfix: string = ""): string {
        return prefix + array.join(delimiter) + postfix;
    }

    public static getLast<T = any>(array: T[]): T {
        if (!Array.isArray(array)) {
            return array;
        }

        return array[array.length - 1];
    }

    public static getRandom<T = any>(args: any[]): T {
        return args[(Math.random() * args.length)];
    }

    public static makeUnique<T = any>(array: T[]): T[] {
        return Array.from(new Set<T>(array));
    }
}
