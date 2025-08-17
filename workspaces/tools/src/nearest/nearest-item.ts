import type { ReadonlySimpleVector2 } from "@g43/types";

/**
 * TODO:
 *  - [ ] get the nearest item to
 *  - [ ] get items within radius
 *  - [ ] get items within square
 */
export interface NearestItem<T extends { position: ReadonlySimpleVector2 }> {
    newClient(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): T;

    findNear(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): readonly T[];

    updateClient(client: T): void;
}
