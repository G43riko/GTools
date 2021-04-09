import { Vector3 } from "../math";
export function intersection3dVectorSquare(r1x, r1y, r1z, r2x, r2y, r2z, s1x, s1y, s1z, s2x, s2y, s2z, s3x, s3y, s3z) {
    return intersection3dVectorSquare_2(new Vector3(r1x, r1y, r1z), new Vector3(r2x, r2y, r2z), new Vector3(s1x, s1y, s1z), new Vector3(s2x, s2y, s2z), new Vector3(s3x, s3y, s3z));
}
export function intersection3dVectorSquare_2(R1, R2, S1, S2, S3, limit = 1e-6) {
    const dS21 = Vector3.sub(S2, S1);
    const dS31 = Vector3.sub(S3, S1);
    const squareNormal = dS21.cross(dS31);
    const dR = Vector3.sub(R1, R2);
    const ndotdR = squareNormal.dot(dR);
    if (Math.abs(ndotdR) < limit) {
        return false;
    }
    const t = -squareNormal.dot(Vector3.sub(R1, S1)) / ndotdR;
    const M = Vector3.sub(R1, dR.mul(t));
    const dMS1 = M.sub(S1);
    const u = dMS1.dot(dS21);
    const v = dMS1.dot(dS31);
    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}
export function intersection3dPlaneLine(planePointX, planePointY, planePointZ, planeNormalX, planeNormalY, planeNormalZ, linePointX, linePointY, linePointZ, lineDirectionX, lineDirectionY, lineDirectionZ, limit) {
    return intersection3dPlaneLineIntersectionAdvanced(new Vector3(planePointX, planePointY, planePointZ), new Vector3(planeNormalX, planeNormalY, planeNormalZ), new Vector3(linePointX, linePointY, linePointZ), new Vector3(lineDirectionX, lineDirectionY, lineDirectionZ), limit);
}
export function intersection3dPlaneLineIntersectionAdvanced(planePoint, planeNormal, linePoint, lineDirection, limit = 1e-6) {
    lineDirection.normalize();
    if (planeNormal.dot(lineDirection) < limit) {
        return null;
    }
    const t = (planeNormal.dot(planePoint) - planeNormal.dot(linePoint)) / planeNormal.dot(lineDirection);
    return linePoint.add(lineDirection.mul(t));
}
//# sourceMappingURL=intersects-3d.js.map