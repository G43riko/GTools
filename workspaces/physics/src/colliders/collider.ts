import type { ReadonlySimpleVector2 } from "@g43/types";
import type { CollideEntity } from "./collide-entity.ts";

let idCounter = 0;

/**
 * https://github.com/excaliburjs/Excalibur/blob/main/src/engine/Collision/Colliders/Collider.ts
 */
export abstract class collider {
    public owner?: CollideEntity;
    private readonly offset?: ReadonlySimpleVector2;
    public readonly id = idCounter++;
}
