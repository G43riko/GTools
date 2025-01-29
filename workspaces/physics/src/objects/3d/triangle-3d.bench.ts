/// <reference lib="deno.ns" />

import { Triangle3D } from "./triangle-3d.ts";
import { assertEquals } from "@std/assert";
import { Vector3 } from "@g43/math";
import type {  ReadonlySimpleVector3 } from "@g43/types";
const v1 = { x: 0, y: 0, z: 0 };
const v2 = { x: 2, y: 0, z: 0 };
const v3 = { x: 0, y: 2, z: 0 };
const t = new Triangle3D(v1, v2, v3);

function triangleAreaOld(v1: ReadonlySimpleVector3, v2: ReadonlySimpleVector3, v3: ReadonlySimpleVector3): number {
    const vAvB = Vector3.sub(v1, v2)
    const vBvC = Vector3.sub(v2, v3)
    const cross = Vector3.crossStatic(vAvB, vBvC);

    return cross.length / 2;
}
assertEquals(t.area, triangleAreaOld(v1, v2, v3))
Deno.bench("Triangle3D.area new ", { group: "Triangle3D.area" }, () => {
    Triangle3D.area(v1, v2, v3);

});
Deno.bench("Triangle3D.area old ", { group: "Triangle3D.area" }, () => {
    triangleAreaOld(v1, v2, v3);
});
