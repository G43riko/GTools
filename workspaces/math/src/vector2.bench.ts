import type { ReadonlySimpleVector2 } from "@g43/types";
import { Vector2 } from "./vector2.ts";

function distNew(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
    return Math.hypot(vecA.x - vecB.x, vecA.y - vecB.y);
}
const v1 = { x: 2, y: 3 };
const v2 = { x: 4, y: 5 };
Deno.bench("dist new ", { group: "Vector2.dist" }, () => {
    distNew(v1, v2);
});
Deno.bench("dist current ", { group: "Vector2.dist" }, () => {
    Vector2.dist(v1, v2);
});
