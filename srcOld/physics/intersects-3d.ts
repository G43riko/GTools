import { ReadonlySimpleVector3, SimpleVector3, Vector3 } from "../math";
import { MinMax3D } from "../types";

/**
 * https://stackoverflow.com/questions/41727704/function-to-find-point-of-intersection-between-a-ray-and-a-sphere-javascript
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
    const origin    = start;

    OC.x = origin.x - center.x;
    OC.y = origin.y - center.y;
    OC.z = origin.z - center.z;

    // Solve the quadratic equation a t^2 + 2 t b + c = 0
    const a     = Vector3.squaredLength(direction);
    const b     = Vector3.dot(direction, OC);
    const c     = Vector3.squaredLength(OC) - radius * radius;
    const delta = b * b - a * c;

    if (delta < 0){ // No solution
        return;
    }

    // One or two solutions, take the closest (positive) intersection
    const sqrtDelta = Math.sqrt(delta);

    // a >= 0
    const tMin = (-b - sqrtDelta) / a;
    const tMax = (-b + sqrtDelta) / a;

    if (tMax < 0){ // All intersection points are behind the origin of the ray
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
    const dS21         = Vector3.sub(S2, S1);
    const dS31         = Vector3.sub(S3, S1);
    const squareNormal = dS21.cross(dS31);

    const dR = Vector3.sub(R1, R2);

    const ndotdR = squareNormal.dot(dR);

    if (Math.abs(ndotdR) < limit) {
        return false;
    }

    const t = -squareNormal.dot(Vector3.sub(R1, S1)) / ndotdR;
    const M = Vector3.sub(R1, dR.mul(t));

    const dMS1 = M.sub(S1);
    const u    = dMS1.dot(dS21);
    const v    = dMS1.dot(dS31);

    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}

export function intersection3dLineMinMax(
    start: ReadonlySimpleVector3,
    end: ReadonlySimpleVector3,
    minMax: MinMax3D,
): SimpleVector3 | undefined {
    const dir    = Vector3.sub(end, start);
    const dirInv = {
        x: dir.x !== 0 ? 1 / dir.x : 0,
        y: dir.y !== 0 ? 1 / dir.y : 0,
        z: dir.z !== 0 ? 1 / dir.z : 0,
    };

    // This should be done outside and cached at the ray level for reuse on an array of aabb boxes. This sort of thing is only optimization for AABB checking.
    const b      = [
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
    planePoint: Vector3,
    planeNormal: Vector3,
    linePoint: Vector3,
    lineDirection: Vector3,
    limit = 1e-6,
): null | SimpleVector3 {
    lineDirection.normalize();
    if (planeNormal.dot(lineDirection) < limit) {
        return null;
    }

    const t = (planeNormal.dot(planePoint) - planeNormal.dot(linePoint)) / planeNormal.dot(lineDirection);

    return linePoint.add(lineDirection.mul(t));
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
): null | SimpleVector3 {
    return intersection3dPlaneLineIntersectionAdvanced(
        new Vector3(planePointX, planePointY, planePointZ),
        new Vector3(planeNormalX, planeNormalY, planeNormalZ),
        new Vector3(linePointX, linePointY, linePointZ),
        new Vector3(lineDirectionX, lineDirectionY, lineDirectionZ),
        limit,
    );
}
