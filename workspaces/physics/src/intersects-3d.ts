import { SimpleVector, Vector3 } from "@g43/math";
import type { MinMax3D, ReadonlySimpleVector3, SimpleVector3 } from "@g43/types";

/**
 * @see https://github.com/BennyQBD/3DGameProgrammingTutorial/blob/master/src/math/intersects.hpp
 */

/**
 * @see https://github.com/BennyQBD/3DGameProgrammingTutorial/blob/master/src/math/plane.cpp
 */
export function intersection3dPlane3dPlane(): unknown {
    throw new Error("Not implemented");
}

/**
 * @see  https://stackoverflow.com/questions/41727704/function-to-find-point-of-intersection-between-a-ray-and-a-sphere-javascript
 */
export function intersection3dLineSphere(
    start: ReadonlySimpleVector3,
    end: ReadonlySimpleVector3,
    center: ReadonlySimpleVector3,
    radius: number,
): ReadonlySimpleVector3 | undefined {
    // Solve |O + t D - C|^2 = R^2
    //       t^2 |D|^2 + 2 t < D, O - C > + |O - C|^2 - R^2 = 0
    const OC = { x: 0, y: 0, z: 0 }; // Use the output parameter as temporary workspace

    const direction = Vector3.sub(end, start);
    const origin = start;

    OC.x = origin.x - center.x;
    OC.y = origin.y - center.y;
    OC.z = origin.z - center.z;

    // Solve the quadratic equation a t^2 + 2 t b + c = 0
    const a = Vector3.sizeSQ(direction);
    const b = Vector3.dot(direction, OC);
    const c = Vector3.sizeSQ(OC) - radius * radius;
    const delta = b * b - a * c;

    if (delta < 0) { // No solution
        return;
    }

    // One or two solutions, take the closest (positive) intersection
    const sqrtDelta = Math.sqrt(delta);

    // a >= 0
    const tMin = (-b - sqrtDelta) / a;
    const tMax = (-b + sqrtDelta) / a;

    if (tMax < 0) { // All intersection points are behind the origin of the ray
        return;
    }

    // tMax >= 0
    const t = tMin >= 0 ? tMin : tMax;

    return {
        x: origin.x + t * direction.x,
        y: origin.y + t * direction.y,
        z: origin.z + t * direction.z,
    };
}

/**
 * TODO: move this to collisions-3d file
 *
 * @param R1 - point 1 of vector
 * @param R2 - point 2 of vector
 * @param S1
 * @param S2
 * @param S3
 * @param limit
 */
export function intersection3dVectorSquare_2(
    R1: SimpleVector3,
    R2: SimpleVector3,
    S1: SimpleVector3,
    S2: SimpleVector3,
    S3: SimpleVector3,
    limit = 1e-6,
): boolean {
    const dS21 = Vector3.sub(S2, S1);
    const dS31 = Vector3.sub(S3, S1);
    const squareNormal = dS21.cross(dS31);

    const dR = Vector3.sub(R1, R2);

    const ndotdR = squareNormal.dot(dR);

    if (Math.abs(ndotdR) < limit) {
        return false;
    }

    const t = -squareNormal.dot(Vector3.sub(R1, S1)) / ndotdR;
    const M = Vector3.sub(R1, dR.mulNum(t));

    const dMS1 = M.sub(S1);
    const u = dMS1.dot(dS21);
    const v = dMS1.dot(dS31);

    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}

export function cylinderLine(
    center: ReadonlySimpleVector3,
    radius: number,
    height: number,
    start: ReadonlySimpleVector3,
    end: ReadonlySimpleVector3,
): ReadonlySimpleVector3 | undefined {
    const point = drawIntersection(
        Vector3.sub(start, center),
        Vector3.sub(end, start),
        radius,
        height,
    );

    if (point) {
        return {
            x: point.x + center.x,
            y: point.y + center.y,
            z: point.z + center.z,
        };
    }
}

function drawIntersection(
    P: ReadonlySimpleVector3,
    RD: ReadonlySimpleVector3,
    Radius: number,
    Height: number,
): undefined | ReadonlySimpleVector3 {
    Vector3.normalize(RD);

    const RD2D = new Vector3();
    RD2D.set(RD);
    RD2D.y = 0;
    RD2D.normalize();

    const C = new Vector3(0, P.y, 0);
    const CP = new Vector3();
    Vector3.sub(C, P, CP);

    const CPLen = CP.length;
    const TP = CP.dot(RD2D);
    const TC = Math.sqrt(CPLen * CPLen - TP * TP);

    // Discard ray.
    if (TC > Radius) {
        return;
    }

    const TI = Math.sqrt(Math.max(Radius * Radius - TC * TC, 0));
    const IP = TP - TI;

    const CPnorm = new Vector3();
    CPnorm.set(CP);
    CPnorm.normalize();
    const cosB = Vector3.dot(RD, CPnorm);
    const PpP = IP / cosB;

    const Pinter = new Vector3();
    Pinter.set(P);
    Pinter.add(Vector3.mulNum(RD, PpP));

    // Finally, we need to check for the cylinder height:
    Pinter.y = Math.abs(Pinter.y); // Flip point y

    const halfCylinderHeight = Height * 0.5;
    if (Pinter.y > halfCylinderHeight) {
        // Check if we hit the cylinder cap:
        let YDir = new Vector3(0, -1, 0);
        if (RD.y > 0) {
            YDir = new Vector3(0, 1, 0);
        }
        const H = Math.abs(P.y) - halfCylinderHeight; // Flip y!
        const cosw = Vector3.dot(RD, YDir);
        const D = H / cosw;

        const Pcap = new Vector3();
        Pcap.set(P); // we now copy the original point
        Pcap.add(Vector3.mulNum(RD, D)); // Also use original dir
        const rad = Math.sqrt(Pcap.x * Pcap.x + Pcap.z * Pcap.z);
        if (rad > Radius) {
            // Discard, ray misses the cap
            return;
        }

        return Vector3.sum(P, Vector3.mulNum(Vector3.normalize(RD), D));
    }

    return Vector3.sum(P, Vector3.mulNum(Vector3.normalize(RD), PpP));
}

export function intersection3dLineMinMax(
    start: ReadonlySimpleVector3,
    end: ReadonlySimpleVector3,
    minMax: MinMax3D,
): ReadonlySimpleVector3 | undefined {
    const dir = Vector3.sub(end, start);
    const dirInv = {
        x: dir.x !== 0 ? 1 / dir.x : 0,
        y: dir.y !== 0 ? 1 / dir.y : 0,
        z: dir.z !== 0 ? 1 / dir.z : 0,
    };

    // This should be done outside and cached at the ray level for reuse on an array of aabb boxes. This sort of thing is only optimization for AABB checking.
    const b = [
        (dirInv.x < 0) ? 1 : 0,
        (dirInv.y < 0) ? 1 : 0,
        (dirInv.z < 0) ? 1 : 0,
    ];
    const bounds = [minMax.min, minMax.max];

    let tMin = (bounds[b[0]].x - start.x) * dirInv.x;
    let tMax = (bounds[1 - b[0]].x - start.x) * dirInv.x;

    // Y Axis ---------------------------
    let min = (bounds[b[1]].y - start.y) * dirInv.y;
    let max = (bounds[1 - b[1]].y - start.y) * dirInv.y;

    if (max < tMin || min > tMax) {
        return;
    } // if it criss crosses, its a miss
    if (min > tMin) {
        tMin = min;
    } // Get the greatest coordinates
    if (max < tMax) {
        tMax = max;
    } // Get the smallest imageSize

    // Z Axis ---------------------------
    min = (bounds[b[2]].z - start.z) * dirInv.z;
    max = (bounds[1 - b[2]].z - start.z) * dirInv.z;

    if (max < tMin || min > tMax) {
        return;
    } // if criss crosses, its a miss
    if (min > tMin) {
        tMin = min;
    } // Get the greatest coordinates
    if (max < tMax) {
        tMax = max;
    } // Get the smallest imageSize

    // Finish ------------------------------
    return Vector3.mulNum(dir, tMin, new Vector3()).add(start);
}

/**
 * TODO: move this to collisions-3d file
 *
 * @param r1x
 * @param r1y
 * @param r1z
 * @param r2x
 * @param r2y
 * @param r2z
 * @param s1x
 * @param s1y
 * @param s1z
 * @param s2x
 * @param s2y
 * @param s2z
 * @param s3x
 * @param s3y
 * @param s3z
 */
export function intersection3dVectorSquare(
    r1x: number,
    r1y: number,
    r1z: number,
    r2x: number,
    r2y: number,
    r2z: number,
    s1x: number,
    s1y: number,
    s1z: number,
    s2x: number,
    s2y: number,
    s2z: number,
    s3x: number,
    s3y: number,
    s3z: number,
): boolean {
    return intersection3dVectorSquare_2(
        new Vector3(r1x, r1y, r1z),
        new Vector3(r2x, r2y, r2z),
        new Vector3(s1x, s1y, s1z),
        new Vector3(s2x, s2y, s2z),
        new Vector3(s3x, s3y, s3z),
    );
}

/**
 * Determines the point of intersection between a plane defined by a point and a normal vector and a line defined by a point and a direction vector.
 *
 * @param planePoint    A point on the plane.
 * @param planeNormal   The normal vector of the plane.
 * @param linePoint     A point on the line.
 * @param lineDirection The direction vector of the line.
 * @param limit
 * @return The point of intersection between the line and the plane, null if the line is parallel to the plane.
 */
export function intersection3dPlaneLineIntersectionAdvanced(
    planePoint: ReadonlySimpleVector3,
    planeNormal: ReadonlySimpleVector3,
    linePoint: ReadonlySimpleVector3,
    lineDirection: ReadonlySimpleVector3,
    limit = 1e-6,
    result: Vector3 = new Vector3(),
): Vector3 | undefined {
    const unitLineDirection = Vector3.normalize(lineDirection, result);
    const planeNormalLineDirectionDot = Vector3.dot(planeNormal, unitLineDirection);

    if (Math.abs(planeNormalLineDirectionDot) < limit) {
        return;
    }

    const t = (Vector3.dot(planeNormal, planePoint) - Vector3.dot(planeNormal, linePoint)) /
        planeNormalLineDirectionDot;

    return unitLineDirection.mulNum(t).add(linePoint);
}

export function intersection3dPlaneLine(
    planePointX: number,
    planePointY: number,
    planePointZ: number,
    planeNormalX: number,
    planeNormalY: number,
    planeNormalZ: number,
    linePointX: number,
    linePointY: number,
    linePointZ: number,
    lineDirectionX: number,
    lineDirectionY: number,
    lineDirectionZ: number,
    limit?: number,
): Vector3 | undefined {
    return intersection3dPlaneLineIntersectionAdvanced(
        SimpleVector.create3(planePointX, planePointY, planePointZ),
        SimpleVector.create3(planeNormalX, planeNormalY, planeNormalZ),
        SimpleVector.create3(linePointX, linePointY, linePointZ),
        SimpleVector.create3(lineDirectionX, lineDirectionY, lineDirectionZ),
        limit,
    );
}
