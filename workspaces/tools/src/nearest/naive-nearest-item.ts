import type { ReadonlyMinMax2D, ReadonlySimpleVector2 } from "@g43/types";
import type { NearestItem } from "./nearest-item.ts";

export interface NaiveNearestItemClient {
    position: ReadonlySimpleVector2;
}

export class NaiveNearestItem implements NearestItem<NaiveNearestItemClient> {
    private readonly bounds: ReadonlyMinMax2D;
    private readonly dimensions: ReadonlySimpleVector2;
    public newClient(_position: ReadonlySimpleVector2, _size: ReadonlySimpleVector2): NaiveNearestItemClient {
        return undefined as unknown as NaiveNearestItemClient;
    }

    public findNear(_position: ReadonlySimpleVector2, _size: ReadonlySimpleVector2): NaiveNearestItemClient[] {
        return [];
    }

    public updateClient(_client: NaiveNearestItemClient): void {
    }

    public constructor(
        bounds: ReadonlyMinMax2D,
        dimensions: ReadonlySimpleVector2,
    ) {
        this.bounds = bounds;
        this.dimensions = dimensions;
    }
}
