import type { ReadonlySimpleVector2 } from "@g43/types";
// import type { CollideEntity } from "./collide-entity.ts";
type CollideEntity = any;

let idCounter = 0;

/**
 * @see https://github.com/excaliburjs/Excalibur/blob/main/src/engine/Collision/Colliders/Collider.ts
 */
export abstract class Collider {
    public owner?: CollideEntity;
    private readonly offset?: ReadonlySimpleVector2;
    public readonly id = idCounter++;
}
