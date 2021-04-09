import { Vector2 } from "../../../math";
export class Ray2D {
    constructor(origin, direction, length = Infinity) {
        this.origin = origin;
        this.direction = direction;
        this.length = length;
    }
    get end() {
        return Vector2.from(this.direction.x, this.direction.y).mul(this.length).add(this.origin);
    }
    static fromLine(start, end) {
        const direction = Vector2.sub(end, start);
        const length = direction.length;
        return new Ray2D(start, Vector2.normalize(direction), length);
    }
}
export var RayMode;
(function (RayMode) {
    RayMode["ANY"] = "ANY";
    RayMode["CLOSEST"] = "CLOSEST";
    RayMode["ALL"] = "ALL";
})(RayMode || (RayMode = {}));
export class RaycastResult {
    constructor() {
        this.normal = new Vector2();
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
    }
    reset() {
        this.normal.setData(0, 0);
        this.shape = null;
        this.body = null;
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
    }
    getHitDistance(ray) {
        return Vector2.dist(ray.from, ray.to) * this.fraction;
    }
    hasHit() {
        return this.fraction !== -1;
    }
    getHitPoint(ray) {
        return Vector2.lerp(ray.from, ray.to, this.fraction);
    }
    stop() {
        this.isStopped = true;
    }
    shouldStop(ray) {
        return this.isStopped || (this.fraction !== -1 && ray.mode === RayMode.ANY);
    }
    set(normal, shape, body, fraction, faceIndex) {
        this.normal.set(normal);
        this.shape = shape;
        this.body = body;
        this.fraction = fraction;
        this.faceIndex = faceIndex;
    }
}
export class RayCast {
    constructor(ray) {
        this.ray = ray;
        this.checkCollisionResponse = true;
        this.skipBackfaces = false;
        this.collisionMask = -1;
        this.collisionGroup = -1;
        this.mode = RayMode.ANY;
    }
    get from() {
        return this.ray.origin;
    }
    get to() {
        return this.ray.end;
    }
    get direction() {
        return this.ray.direction;
    }
    reportIntersection(result, fraction, normal, faceIndex) {
        const shape = null;
        const body = null;
        if (this.skipBackfaces && Vector2.dot(normal, this.ray.direction) > 0) {
            return;
        }
        switch (this.mode) {
            case RayMode.ALL:
                result.set(normal, shape, body, fraction, faceIndex);
                this.callback && this.callback(result);
                break;
            case RayMode.CLOSEST:
                if (fraction < result.fraction || !result.hasHit()) {
                    result.set(normal, shape, body, fraction, faceIndex);
                }
                break;
            case RayMode.ANY:
                result.set(normal, shape, body, fraction, faceIndex);
                break;
        }
    }
}
//# sourceMappingURL=ray-2d.js.map