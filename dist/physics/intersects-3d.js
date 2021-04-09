"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection3dPlaneLineIntersectionAdvanced = exports.intersection3dPlaneLine = exports.intersection3dVectorSquare_2 = exports.intersection3dVectorSquare = void 0;
var math_1 = require("../math");
function intersection3dVectorSquare(r1x, r1y, r1z, r2x, r2y, r2z, s1x, s1y, s1z, s2x, s2y, s2z, s3x, s3y, s3z) {
    return intersection3dVectorSquare_2(new math_1.Vector3(r1x, r1y, r1z), new math_1.Vector3(r2x, r2y, r2z), new math_1.Vector3(s1x, s1y, s1z), new math_1.Vector3(s2x, s2y, s2z), new math_1.Vector3(s3x, s3y, s3z));
}
exports.intersection3dVectorSquare = intersection3dVectorSquare;
function intersection3dVectorSquare_2(R1, R2, S1, S2, S3, limit) {
    if (limit === void 0) { limit = 1e-6; }
    var dS21 = math_1.Vector3.sub(S2, S1);
    var dS31 = math_1.Vector3.sub(S3, S1);
    var squareNormal = dS21.cross(dS31);
    var dR = math_1.Vector3.sub(R1, R2);
    var ndotdR = squareNormal.dot(dR);
    if (Math.abs(ndotdR) < limit) {
        return false;
    }
    var t = -squareNormal.dot(math_1.Vector3.sub(R1, S1)) / ndotdR;
    var M = math_1.Vector3.sub(R1, dR.mul(t));
    var dMS1 = M.sub(S1);
    var u = dMS1.dot(dS21);
    var v = dMS1.dot(dS31);
    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}
exports.intersection3dVectorSquare_2 = intersection3dVectorSquare_2;
function intersection3dPlaneLine(planePointX, planePointY, planePointZ, planeNormalX, planeNormalY, planeNormalZ, linePointX, linePointY, linePointZ, lineDirectionX, lineDirectionY, lineDirectionZ, limit) {
    return intersection3dPlaneLineIntersectionAdvanced(new math_1.Vector3(planePointX, planePointY, planePointZ), new math_1.Vector3(planeNormalX, planeNormalY, planeNormalZ), new math_1.Vector3(linePointX, linePointY, linePointZ), new math_1.Vector3(lineDirectionX, lineDirectionY, lineDirectionZ), limit);
}
exports.intersection3dPlaneLine = intersection3dPlaneLine;
function intersection3dPlaneLineIntersectionAdvanced(planePoint, planeNormal, linePoint, lineDirection, limit) {
    if (limit === void 0) { limit = 1e-6; }
    lineDirection.normalize();
    if (planeNormal.dot(lineDirection) < limit) {
        return null;
    }
    var t = (planeNormal.dot(planePoint) - planeNormal.dot(linePoint)) / planeNormal.dot(lineDirection);
    return linePoint.add(lineDirection.mul(t));
}
exports.intersection3dPlaneLineIntersectionAdvanced = intersection3dPlaneLineIntersectionAdvanced;
//# sourceMappingURL=intersects-3d.js.map