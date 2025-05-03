import { AbstractArrayHolder } from "./abstract-array-holder.ts";

export type NibbleType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

class NibbleUtils {
    public static readonly getLowerNibble = (byte: number): NibbleType => (byte & 0x0F) as NibbleType;

    public static readonly getUpperNibble = (byte: number): NibbleType => ((byte & 0xF0) >> 4) as NibbleType;

    public static readonly combineNibbles = (upper: NibbleType, lower: NibbleType): number =>
        (upper << 4) | (lower & 0x0F);
}

export class ArrayNibbleHolder extends AbstractArrayHolder<NibbleType, number[]> {
    public static fromNibbles(values: NibbleType[]): ArrayNibbleHolder {
        const data = new Array<number>();
        for (let i = 0; i < values.length;) {
            data.push(NibbleUtils.combineNibbles(values[i++], values[i++]));
        }

        return new ArrayNibbleHolder(data);
    }

    public static fromData(values: number[]): ArrayNibbleHolder {
        return new ArrayNibbleHolder(values);
    }

    private constructor(
        data: number[],
    ) {
        if (!Array.isArray(data) || !data.every(Number.isInteger)) {
            throw new Error("Data must be an array of integers.");
        }
        super(data);
    }

    public getData(): number[] {
        return [...this.data];
    }

    public override fill(item: NibbleType): void {
        const mergedValue = NibbleUtils.combineNibbles(item, item);

        this.data.fill(mergedValue);
    }

    public toReadonlyArray(): readonly NibbleType[] {
        const result = new Array<NibbleType>(this.data.length / 2);

        this.data.forEach((item, i) => {
            result[i * 2 + 1] = NibbleUtils.getLowerNibble(item) as NibbleType;
            result[i * 2] = NibbleUtils.getUpperNibble(item) as NibbleType;
        });

        return result;
    }

    public setData(data: ArrayNibbleHolder): void {
        return this.overrideData(data.toReadonlyArray());
    }

    /**
     * TODO: check length
     * @param data
     */
    public overrideData(values: readonly NibbleType[]): void {
        const data = new Array<number>();
        for (let i = 0; i < values.length;) {
            data.push(NibbleUtils.combineNibbles(values[i++], values[i++]));
        }
        this.data.splice(0, this.data.length, ...data);
    }

    public get(index: number): NibbleType {
        const realIndex = Math.floor(index / 2);
        const item = this.data[realIndex];

        return (index % 2 ? NibbleUtils.getLowerNibble(item) : NibbleUtils.getUpperNibble(item));
    }

    public set(index: number, item: NibbleType = 0): void {
        const realIndex = Math.floor(index / 2);
        const prevItem = this.data[realIndex];
        // we set lower value
        if (index % 2) {
            this.data[realIndex] = NibbleUtils.combineNibbles(NibbleUtils.getUpperNibble(prevItem), item);
        } else {
            this.data[realIndex] = NibbleUtils.combineNibbles(item, NibbleUtils.getLowerNibble(prevItem));
        }
    }
}
