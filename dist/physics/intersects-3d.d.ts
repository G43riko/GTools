import { ReadonlySimpleVector3, SimpleVector3, Vector3 } from "../math";
export declare function intersection3dVectorSquare(r1x: number, r1y: number, r1z: number, r2x: number, r2y: number, r2z: number, s1x: number, s1y: number, s1z: number, s2x: number, s2y: number, s2z: number, s3x: number, s3y: number, s3z: number): boolean;
/**
 * @param R1 - point 1 of vector
 * @param R2 - point 2 of vector
 * @param S1
 * @param S2
 * @param S3
 * @param limit
 */
export declare function intersection3dVectorSquare_2(R1: SimpleVector3, R2: SimpleVector3, S1: SimpleVector3, S2: SimpleVector3, S3: SimpleVector3, limit?: number): boolean;
export declare function intersection3dPlaneLine(planePointX: number, planePointY: number, planePointZ: number, planeNormalX: number, planeNormalY: number, planeNormalZ: number, linePointX: number, linePointY: number, linePointZ: number, lineDirectionX: number, lineDirectionY: number, lineDirectionZ: number, limit?: number): null | ReadonlySimpleVector3;
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
export declare function intersection3dPlaneLineIntersectionAdvanced(planePoint: Vector3, planeNormal: Vector3, linePoint: Vector3, lineDirection: Vector3, limit?: number): null | ReadonlySimpleVector3;
//# sourceMappingURL=intersects-3d.d.ts.map