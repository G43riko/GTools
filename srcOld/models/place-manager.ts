import { ReadonlySimpleVector2 } from "../math";
import { Grid2ArrayHolder } from "./data-structures/grid-accessor";

class WorldPlaceItem {
    public item?: { type: string; instance: unknown };
    public size?: ReadonlySimpleVector2;
    public position?: ReadonlySimpleVector2;
    public parent?: WorldPlaceItem;

    public get root(): WorldPlaceItem {
        return this.parent ? this.parent.root : this;
    }
}

export class WorldPlaceManager {
    private readonly mapHolder = Grid2ArrayHolder.initWithProvider(
        this.size.x,
        this.size.y,
        () => new WorldPlaceItem(),
    );

    public constructor(
        private readonly size: ReadonlySimpleVector2,
        private readonly externalPlaceAccessibilityProvider: (x: number, y: number) => boolean = () => true,
    ) {
    }

    public isFree(x: number, y: number, size?: ReadonlySimpleVector2): boolean {
        if (x < 0 || y < 0) {
            return false;
        }
        if (!size) {
            return this.externalPlaceAccessibilityProvider(x, y) && !this.mapHolder.get(x, y).root.item;
        }

        // check borders
        if (
            x + size.x > this.size.x ||
            y + size.y > this.size.y
        ) {
            return false;
        }

        return this.mapHolder.getAreaBlocks({ x, y }, size).every(
            (e) =>
                this.externalPlaceAccessibilityProvider(e.coordinates.x, e.coordinates.y) &&
                !this.mapHolder.get(e.coordinates.x, e.coordinates.y).root.item,
        );
    }

    public printData(provider: (x: number, y: number, instanceType: WorldPlaceItem) => string, delimiter = ","): void {
        for (let x = 0; x < this.size.x; x++) {
            const row: string[] = [];
            for (let y = 0; y < this.size.y; y++) {
                row.push(provider(x, y, this.mapHolder.get(x, y)));
            }
            console.log(row.join(delimiter));
        }
    }

    private setChildren(position: ReadonlySimpleVector2, size?: ReadonlySimpleVector2, parent?: WorldPlaceItem): void {
        this.mapHolder.getArea(position, size ?? { x: 1, y: 1 }).forEach((block) => {
            if (!block || block === parent) {
                return;
            }

            block.parent = parent;
        });
    }

    public getItem<T>(position: ReadonlySimpleVector2): T | undefined {
        const block = this.mapHolder.get(position.x, position.y);
        if (!block) {
            return;
        }

        return block.root.item?.instance as T;
    }

    public setItem(type: string, instance: { position: ReadonlySimpleVector2; size?: ReadonlySimpleVector2 }): void {
        const block = this.mapHolder.get(instance.position.x, instance.position.y);
        block.item = { type, instance };
        block.size = instance.size;
        block.position = instance.position;

        this.setChildren(instance.position, instance.size, block);
    }

    public removeItemFrom(position: ReadonlySimpleVector2): boolean {
        const root = this.mapHolder.get(position.x, position.y)?.root;
        if (!root || !root.item || !root.position) {
            return false;
        }
        this.setChildren(root.position, root.size, undefined);

        root.item = undefined;
        root.position = undefined;
        root.size = undefined;

        return true;
    }

    public getCanvas(
        colorProvider: (x: number, y: number, instanceType?: string) => string,
        blockSize = { x: 16, y: 16 },
    ): HTMLCanvasElement {
        const canvas = document.createElement("canvas");
        canvas.width = blockSize.x * this.mapHolder.size.x;
        canvas.height = blockSize.y * this.mapHolder.size.y;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.mapHolder.forEach((item, x, y) => {
            if (item.parent) {
                return;
            }
            context.fillStyle = colorProvider(x, y, item.item?.type);
            context.fillRect(
                x * blockSize.x,
                y * blockSize.y,
                item.size ? blockSize.x * item.size.x : blockSize.x,
                item.size ? blockSize.y * item.size.y : blockSize.y,
            );
        });

        return canvas;
    }
}
