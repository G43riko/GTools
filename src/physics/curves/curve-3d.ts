import { Mat4, ReadonlySimpleVector3, Vector2, Vector3 } from "../../math";
import { clamp } from "../../utils";
import { Curve } from "./curve";

export abstract class Curve3D extends Curve<ReadonlySimpleVector3> {
    protected lerp(vec1: ReadonlySimpleVector3, vec2: ReadonlySimpleVector3, value: number): ReadonlySimpleVector3 {
        const dirX = vec2.x - vec1.x;
        const dirY = vec2.y - vec1.y;
        const dirZ = vec2.z - vec1.z;

        return {
            x: dirX * value + vec1.x,
            y: dirY * value + vec1.y,
            z: dirZ * value + vec1.z,
        };
    }

    /**
     * Returns a unit vector tangent at t
     * In case any sub curve does not implement its tangent derivation,
     * 2 points a small delta apart will be used to find its gradient
     * which seems to give a reasonable approximation
     */
    private getTangent(t: number, optionalTarget?: Vector3): Vector3 {

        const delta = 0.0001;
        let t1      = t - delta;
        let t2      = t + delta;

        // Capping in case of danger

        if (t1 < 0) {
            t1 = 0;
        }
        if (t2 > 1) {
            t2 = 1;
        }

        const pt1 = this.getPointAtArc(t1);
        const pt2 = this.getPointAtArc(t2);

        const tangent = optionalTarget || ((Vector3.isVector(pt1)) ? new Vector3() : new Vector2());

        tangent.set(pt2).sub(pt1).normalize();

        return tangent as Vector3;

    }

    private getTangentAt(u: number, optionalTarget?: Vector3): Vector3 {
        // TODO: this should be used
        // const t = this.getUtoTmapping(u);
        // return this.getTangent(t, optionalTarget);

        return this.getTangent(u, optionalTarget);
    }

    /**
     * https://github.com/mrdoob/three.js/blob/8cb903d61618cb58e3134431a389212d9c98dff0/src/extras/core/Curve.js#L260
     */
    public computeFrenetFrames(segments: number, closed: boolean): { tangents: Vector3[]; normals: Vector3[]; binormals: Vector3[] } {

        // see http://www.cs.indiana.edu/pub/techreports/TR425.pdf

        const normal = new Vector3();

        const tangents  = [];
        const normals   = [];
        const binormals = [];

        const vec = new Vector3();
        const mat = Mat4.create();

        // compute the tangent vectors for each segment on the curve

        for (let i = 0; i <= segments; i++) {

            const u = i / segments;

            tangents[i] = this.getTangentAt(u, new Vector3());

        }

        // select an initial normal vector perpendicular to the first tangent vector,
        // and in the direction of the minimum tangent xyz component

        normals[0]   = new Vector3();
        binormals[0] = new Vector3();
        let min      = Number.MAX_VALUE;
        const tx     = Math.abs(tangents[0].x);
        const ty     = Math.abs(tangents[0].y);
        const tz     = Math.abs(tangents[0].z);

        if (tx <= min) {

            min = tx;
            normal.setData(1, 0, 0);

        }

        if (ty <= min) {

            min = ty;
            normal.setData(0, 1, 0);

        }

        if (tz <= min) {

            normal.setData(0, 0, 1);

        }
        vec.set(tangents[0].cross(normal)).normalize();

        normals[0].set(tangents[0].cross(vec));
        binormals[0].set(tangents[0].cross(normals[0]));

        // compute the slowly-varying normal and binormal vectors for each segment on the curve

        for (let i = 1; i <= segments; i++) {

            normals[i] = normals[i - 1].clone();

            binormals[i] = binormals[i - 1].clone();

            vec.set(tangents[i - 1].cross(normals[0]));

            if (vec.length > Number.EPSILON) {

                vec.normalize();

                const theta = Math.acos(clamp(tangents[i - 1].dot(tangents[i]), -1, 1)); // clamp for floating pt errors

                Mat4.fromRotation(theta, vec, mat);

                mat.transformVector(normals[i]);
            }

            binormals[i].set(tangents[i].cross(normals[i]));

        }

        // if the curve is closed, postprocess the vectors so the first and last normal vectors are the same

        if (closed) {
            let theta = Math.acos(clamp(normals[0].dot(normals[segments]), -1, 1));
            theta /= segments;

            if (tangents[0].dot(vec.set(normals[0].cross(normals[segments]))) > 0) {

                theta = -theta;

            }

            for (let i = 1; i <= segments; i++) {

                // twist a little...
                Mat4.fromRotation(theta * i, tangents[i], mat);
                mat.transformVector(normals[i]);
                binormals[i].set(tangents[i].cross(normals[i]));

            }

        }

        return {
            tangents,
            normals,
            binormals,
        };

    }
}
