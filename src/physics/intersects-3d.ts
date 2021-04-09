import { ReadonlySimpleVector3, SimpleVector3, Vector3 } from "../math";

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
): null | ReadonlySimpleVector3 {
    return intersection3dPlaneLineIntersectionAdvanced(
        new Vector3(planePointX, planePointY, planePointZ),
        new Vector3(planeNormalX, planeNormalY, planeNormalZ),
        new Vector3(linePointX, linePointY, linePointZ),
        new Vector3(lineDirectionX, lineDirectionY, lineDirectionZ),
        limit,
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
): null | ReadonlySimpleVector3 {
    lineDirection.normalize();
    if (planeNormal.dot(lineDirection) < limit) {
        return null;
    }

    const t = (planeNormal.dot(planePoint) - planeNormal.dot(linePoint)) / planeNormal.dot(lineDirection);

    return linePoint.add(lineDirection.mul(t));
}
