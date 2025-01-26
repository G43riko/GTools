import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import { cylinderLine, intersection3dLineMinMax, intersection3dLineSphere } from "./intersects-3d.ts";
import type { Cylinder } from "./objects/3d/cylinder.ts";
import type { Line3D } from "./objects/3d/line-3d.ts";
import type { Sphere } from "./objects/3d/sphere.ts";

export class IntersectionTable3d {
    public static sphereLine(sphere: Sphere, line: Line3D): ReadonlySimpleVector3 | undefined {
        return intersection3dLineSphere(line.pointA, line.pointB, sphere.center, sphere.radius);
    }

    public static minMaxLine(
        minMax: MinMax3D,
        start: ReadonlySimpleVector3,
        end: ReadonlySimpleVector3,
    ): ReadonlySimpleVector3 | undefined {
        return intersection3dLineMinMax(start, end, minMax);
    }

    public static cylinderLine(
        cylinder: Cylinder,
        start: ReadonlySimpleVector3,
        end: ReadonlySimpleVector3,
    ): ReadonlySimpleVector3 | undefined {
        return cylinderLine(cylinder.position, cylinder.radius, cylinder.height, start, end);
    }
}
