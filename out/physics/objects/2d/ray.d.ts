import { SimpleVector2, Vector2 } from "../../../math";
export declare class Ray {
    readonly origin: SimpleVector2;
    readonly direction: SimpleVector2;
    readonly length: number;
    constructor(origin: SimpleVector2, direction: SimpleVector2, length?: number);
    get end(): SimpleVector2;
    static fromLine(start: SimpleVector2, end: SimpleVector2): Ray;
}
export declare enum RayMode {
    ANY = "ANY",
    CLOSEST = "CLOSEST",
    ALL = "ALL"
}
export declare class RaycastResult {
    readonly normal: Vector2;
    shape?: any;
    body?: any;
    faceIndex: number;
    fraction: number;
    isStopped: boolean;
    reset(): void;
    getHitDistance(ray: RayCast): number;
    hasHit(): boolean;
    getHitPoint(ray: RayCast): SimpleVector2;
    stop(): void;
    shouldStop(ray: RayCast): boolean;
    set(normal: SimpleVector2, shape: any, body: any, fraction: number, faceIndex: number): void;
}
export declare class RayCast {
    readonly ray: Ray;
    checkCollisionResponse: boolean;
    skipBackfaces: boolean;
    collisionMask: number;
    collisionGroup: number;
    mode: RayMode;
    callback?: (arg: any) => any;
    get from(): SimpleVector2;
    get to(): SimpleVector2;
    get direction(): SimpleVector2;
    constructor(ray: Ray);
    reportIntersection(result: RaycastResult, fraction: number, normal: SimpleVector2, faceIndex: number): void;
}
