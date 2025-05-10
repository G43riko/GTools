import { Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2, SimpleVector2 } from "@g43/types";

/**
 * Represents a 2D ray with an origin point, direction vector, and length
 */
export class Ray2D {
    /**
     * Creates a new Ray2D instance
     * @param origin The starting point of the ray
     * @param direction The normalized direction vector of the ray
     * @param length The length of the ray (defaults to Infinity)
     */
    public constructor(
        public readonly origin: ReadonlySimpleVector2,
        public readonly direction: ReadonlySimpleVector2,
        public readonly length: number = Infinity,
    ) {
    }

    public get end(): SimpleVector2 {
        return Vector2.from(this.direction.x, this.direction.y).mulNum(this.length).add(this.origin);
    }

    public static fromLine(start: ReadonlySimpleVector2, end: ReadonlySimpleVector2): Ray2D {
        const direction = Vector2.sub(end, start);
        const length = direction.length;

        return new Ray2D(start, Vector2.normalize(direction), length);
    }
}

export enum RayMode {
    /**
     * This raycasting mode will make the Ray2D stop when it finds the first intersection point.
     */
    ANY = "ANY",
    /**
     * This raycasting mode will make the Ray2D traverse through all intersection points and only return the closest one.
     */
    CLOSEST = "CLOSEST",
    /**
     * This raycasting mode will traverse all intersection points and executes a callback for each one.
     */
    ALL = "ALL",
}

/**
 * Stores the result of a raycast operation including intersection details
 */
export class RaycastResult {
    /** The normal vector at the point of intersection */
    public readonly normal: Vector2 = new Vector2();
    /** The shape that was hit by the ray */
    public shape?: any;
    /** The body that was hit by the ray */
    public body?: any;
    /** The index of the face that was hit (-1 if no hit) */
    public faceIndex = -1;
    /** The fraction of the ray length where the hit occurred (-1 if no hit) */
    public fraction = -1;
    /** Indicates if the raycast operation was manually stopped */
    public isStopped = false;

    public reset(): void {
        this.normal.setData(0, 0);
        this.shape = null;
        this.body = null;
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
    }

    public getHitDistance(ray: RayCast2D): number {
        return Vector2.dist(ray.from, ray.to) * this.fraction;
    }

    public hasHit(): boolean {
        return this.fraction !== -1;
    }

    public getHitPoint(ray: RayCast2D): SimpleVector2 {
        return Vector2.lerp(ray.from, ray.to, this.fraction);
    }

    public stop(): void {
        this.isStopped = true;
    }

    public shouldStop(ray: RayCast2D): boolean {
        return this.isStopped || (this.fraction !== -1 && ray.mode === RayMode.ANY);
    }

    public set(
        normal: SimpleVector2,
        shape: any,
        body: any,
        fraction: number,
        faceIndex: number,
    ): void {
        this.normal.set(normal);
        this.shape = shape;
        this.body = body;
        this.fraction = fraction;
        this.faceIndex = faceIndex;
    }
}

/**
 * Performs raycast operations in 2D space with configurable collision detection
 */
export class RayCast2D {
    /** Whether to check for collision responses */
    public checkCollisionResponse = true;
    /** Whether to skip intersections where the ray hits the back of a face */
    public skipBackfaces = false;
    /** Bitmask used for collision filtering */
    public collisionMask = -1;
    /** Collision group identifier for filtering */
    public collisionGroup = -1;
    /** The mode determining how intersections are processed */
    public mode: RayMode = RayMode.ANY;
    /** Optional callback function called for each intersection in ALL mode */
    public callback?: (arg: any) => any;

    public get from(): SimpleVector2 {
        return this.ray.origin;
    }

    public get to(): SimpleVector2 {
        return this.ray.end;
    }

    public get direction(): SimpleVector2 {
        return this.ray.direction;
    }

    public constructor(public readonly ray: Ray2D) {
    }

    public reportIntersection(result: RaycastResult, fraction: number, normal: SimpleVector2, faceIndex: number): void {
        const shape = null; // this.currentShape;
        const body = null; // this.currentBody;

        // Skip back faces?
        if (this.skipBackfaces && Vector2.dot(normal, this.ray.direction) > 0) {
            return;
        }

        switch (this.mode) {
            case RayMode.ALL:
                result.set(
                    normal,
                    shape,
                    body,
                    fraction,
                    faceIndex,
                );
                this.callback?.(result);
                break;

            case RayMode.CLOSEST:
                // Store if closer than current closest
                if (fraction < result.fraction || !result.hasHit()) {
                    result.set(
                        normal,
                        shape,
                        body,
                        fraction,
                        faceIndex,
                    );
                }
                break;

            case RayMode.ANY:
                // Report and stop.
                result.set(
                    normal,
                    shape,
                    body,
                    fraction,
                    faceIndex,
                );
                break;
        }
    }
}
