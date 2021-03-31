"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vectorSquare3dIntersect_2 = exports.vectorSquare3dIntersect = void 0;
var math_1 = require("../math");
function vectorSquare3dIntersect(r1x, r1y, r1z, r2x, r2y, r2z, s1x, s1y, s1z, s2x, s2y, s2z, s3x, s3y, s3z) {
    return vectorSquare3dIntersect_2(new math_1.Vector3(r1x, r1y, r1z), new math_1.Vector3(r2x, r2y, r2z), new math_1.Vector3(s1x, s1y, s1z), new math_1.Vector3(s2x, s2y, s2z), new math_1.Vector3(s3x, s3y, s3z));
}
exports.vectorSquare3dIntersect = vectorSquare3dIntersect;
function vectorSquare3dIntersect_2(R1, R2, S1, S2, S3) {
    var dS21 = math_1.Vector3.sub(S2, S1);
    var dS31 = math_1.Vector3.sub(S3, S1);
    var dR = math_1.Vector3.sub(R1, R2);
    var n = dS21.cross(dS31);
    var ndotdR = n.dot(dR);
    if (Math.abs(ndotdR) < 1e-6) {
        return false;
    }
    var t = -n.dot(math_1.Vector3.sub(R1, S1)) / ndotdR;
    var M = math_1.Vector3.add(R1, dR.mul(t));
    var dMS1 = M.sub(S1);
    var u = dMS1.dot(dS21);
    var v = dMS1.dot(dS31);
    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}
exports.vectorSquare3dIntersect_2 = vectorSquare3dIntersect_2;
//# sourceMappingURL=intersects-3d.js.map