import { AbstractArrayHolder, type TypedArray } from "./abstract-array-holder.ts";

export class TypedArrayHolder<
    Item extends number,
    Data extends TypedArray,
> extends AbstractArrayHolder<Item, Data> {
    public readonly fill = this.data.fill.bind(this.data);

    public constructor(
        data: Data,
    ) {
        super(data);
    }

    public getData(): Data {
        return this.data.subarray() as Data;
    }

    public toReadonlyArray(): readonly Item[] {
        return Array.from(this.data) as Item[];
    }

    /**
     * TODO: check length
     * @param data
     */
    public setData(data: TypedArrayHolder<Item, Data>): void {
        this.data.set(data.data);
    }

    /**
     * TODO: check length
     * @param data
     */
    public overrideData(data: Item[]): void {
        this.data.set(data);
    }

    public get(index: number): Item {
        return this.data.at(index) as Item;
    }

    public set(index: number, item: Item | undefined): void {
        this.data[index] = item ?? 0;
    }
}
