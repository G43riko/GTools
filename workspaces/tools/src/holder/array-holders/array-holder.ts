import { AbstractArrayHolder } from "./abstract-array-holder.ts";

export class ArrayHolder<Item> extends AbstractArrayHolder<Item, Item[]> {
    public readonly get = this.data.at.bind(this.data);
    public readonly fill = this.data.fill.bind(this.data);

    public constructor(
        data: Item[],
    ) {
        super(data);
    }

    public toReadonlyArray(): readonly Item[] {
        return [...this.data];
    }

    public setData(data: ArrayHolder<Item>): void {
        return this.overrideData(data.data);
    }

    /**
     * TODO: check length
     * @param data
     */
    public overrideData(data: Item[]): void {
        this.data.splice(0, this.data.length, ...data);
    }

    public set(index: number, item?: Item): void {
        this.data[index] = item as Item;
    }
}
