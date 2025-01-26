import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import {
    collision3dBoxCylinder,
    collision3dBoxMinMaxCylinder,
    collision3dCapsulePoint,
    collision3dCylinderCylinder,
    collision3dPointCylinder,
    collision3dPointSphere,
    collision3dSphereBoxMinMax,
    collision3dSphereCylinder,
    collision3dSphereSphere,
} from "./collisions-3d.ts";
import type { Box } from "./objects/3d/box.ts";
import type { Capsule } from "./objects/3d/capsule.ts";
import type { Cylinder } from "./objects/3d/cylinder.ts";
import type { Sphere } from "./objects/3d/sphere.ts";

export class CollisionTable3d {
    public static sphereCylinder(sphere: Sphere, cylinder: Cylinder): boolean {
        return collision3dSphereCylinder(
            sphere.center.x,
            sphere.center.y,
            sphere.center.z,
            sphere.radius,
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
        );
    }

    public static pointCapsule(point: ReadonlySimpleVector3, capsule: Capsule): boolean {
        return collision3dCapsulePoint(
            capsule.position.x,
            capsule.position.y,
            capsule.position.z,
            capsule.radius,
            capsule.height,
            point.x,
            point.y,
            point.z,
        );
    }

    public static sphereMinMax(sphere: Sphere, minMax: MinMax3D): boolean {
        return collision3dSphereBoxMinMax(
            sphere.center.x,
            sphere.center.y,
            sphere.center.z,
            sphere.radius,
            minMax.min.x,
            minMax.min.y,
            minMax.min.z,
            minMax.max.x,
            minMax.max.y,
            minMax.max.z,
        );
    }

    public static sphereSphere(sphereA: Sphere, sphereB: Sphere): boolean {
        return collision3dSphereSphere(
            sphereA.center.x,
            sphereA.center.y,
            sphereA.center.z,
            sphereA.radius,
            sphereB.center.x,
            sphereB.center.y,
            sphereB.center.z,
            sphereB.radius,
        );
    }

    public static spherePoint(sphere: Sphere, point: ReadonlySimpleVector3): boolean {
        return collision3dPointSphere(
            point.x,
            point.y,
            point.z,
            sphere.center.x,
            sphere.center.y,
            sphere.center.z,
            sphere.radius,
        );
    }

    public static cylinderBox(cylinder: Cylinder, box: Box): boolean {
        return collision3dBoxCylinder(
            box.position.x,
            box.position.y,
            box.position.z,
            box.size.x,
            box.size.y,
            box.size.z,
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
        );
    }

    public static cylinderMinMax(cylinder: Cylinder, minMax: MinMax3D): boolean {
        return collision3dBoxMinMaxCylinder(
            minMax.min.x,
            minMax.min.y,
            minMax.min.z,
            minMax.max.x,
            minMax.max.y,
            minMax.max.z,
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
        );
    }

    public static cylinderPoint(cylinder: Cylinder, point: ReadonlySimpleVector3): boolean {
        return collision3dPointCylinder(
            point.x,
            point.y,
            point.z,
            cylinder.position.x,
            cylinder.position.y,
            cylinder.position.z,
            cylinder.radius,
            cylinder.height,
        );
    }

    public static cylinderCylinder(cylinderA: Cylinder, cylinderB: Cylinder): boolean {
        return collision3dCylinderCylinder(
            cylinderA.position.x,
            cylinderA.position.y,
            cylinderA.position.z,
            cylinderA.radius,
            cylinderA.height,
            cylinderB.position.x,
            cylinderB.position.y,
            cylinderB.position.z,
            cylinderB.radius,
            cylinderB.height,
        );
    }
}
