import { Vector3 } from "../math";
export function vectorSquare3dIntersect(r1x, r1y, r1z, r2x, r2y, r2z, s1x, s1y, s1z, s2x, s2y, s2z, s3x, s3y, s3z) {
    return vectorSquare3dIntersect_2(new Vector3(r1x, r1y, r1z), new Vector3(r2x, r2y, r2z), new Vector3(s1x, s1y, s1z), new Vector3(s2x, s2y, s2z), new Vector3(s3x, s3y, s3z));
}
export function vectorSquare3dIntersect_2(R1, R2, S1, S2, S3) {
    const dS21 = Vector3.sub(S2, S1);
    const dS31 = Vector3.sub(S3, S1);
    const dR = Vector3.sub(R1, R2);
    const n = dS21.cross(dS31);
    const ndotdR = n.dot(dR);
    if (Math.abs(ndotdR) < 1e-6) {
        return false;
    }
    const t = -n.dot(Vector3.sub(R1, S1)) / ndotdR;
    const M = Vector3.add(R1, dR.mul(t));
    const dMS1 = M.sub(S1);
    const u = dMS1.dot(dS21);
    const v = dMS1.dot(dS31);
    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}
//# sourceMappingURL=intersects-3d.js.map