export type TypedArray =
    | Uint8Array
    | Int8Array
    | Uint8ClampedArray
    | Uint16Array
    | Int16Array
    | Uint32Array
    | Int32Array
    | Float32Array
    | Float64Array;

export abstract class AbstractArrayHolder<
    Item,
    Data extends Array<Item> | Array<number> | TypedArray, /* | BigInt64Array | BigUint64Array */
> {
    public get length(): number {
        return this.data.length;
    }

    protected constructor(
        protected readonly data: Data,
    ) {
    }

    public abstract toReadonlyArray(): readonly Item[];

    public cleanUp(): void {
        this.data.slice(0, this.data.length);
    }

    public abstract fill(item: Item): void;

    public abstract overrideData(data: Item[]): void;

    public abstract get(index: number): Item | undefined;

    public require(index: number, message = `Item at index ${index} is missing`): Item {
        const item = this.get(index);
        if (typeof item === "undefined") {
            throw new Error(message);
        }
        return item;
    }

    public abstract setData(data: AbstractArrayHolder<Item, Data>): void;

    public abstract set(index: number, item: Item | undefined): void;
}
