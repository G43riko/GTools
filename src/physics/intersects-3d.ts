import { SimpleVector3, Vector3 } from "gtools/math";

export function vectorSquareIntersect3d(
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
    return vectorSquareIntersect3d_2(
        new Vector3(r1x, r1y, r1z),
        new Vector3(r2x, r2y, r2z),
        new Vector3(s1x, s1y, s1z),
        new Vector3(s2x, s2y, s2z),
        new Vector3(s3x, s3y, s3z),
    );
}

export function vectorSquareIntersect3d_2(
    R1: SimpleVector3,
    R2: SimpleVector3,
    S1: SimpleVector3,
    S2: SimpleVector3,
    S3: SimpleVector3,
): boolean {
    const dS21 = Vector3.sub(S2, S1);
    const dS31 = Vector3.sub(S3, S1);
    const dR   = Vector3.sub(R1, R2);
    const n    = dS21.cross(dS31);

    const ndotdR = n.dot(dR);

    if (Math.abs(ndotdR) < 1e-6) { // Choose your tolerance
        return false;
    }

    const t = -n.dot(Vector3.sub(R1, S1)) / ndotdR;
    const M = Vector3.add(R1, dR.mul(t));

    const dMS1 = M.sub(S1);
    const u    = dMS1.dot(dS21);
    const v    = dMS1.dot(dS31);

    return (u >= 0 && u <= dS21.dot(dS21) && v >= 0 && v <= dS31.dot(dS31));
}
