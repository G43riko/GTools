import { SimpleVector2, Vector2 } from "../../../math";

export class Ray2D {
    public constructor(
        public readonly origin: SimpleVector2,
        public readonly direction: SimpleVector2,
        public readonly length = Infinity,
    ) {
    }

    public get end(): SimpleVector2 {
        return Vector2.from(this.direction.x, this.direction.y).mul(this.length).add(this.origin);
    }

    public static fromLine(start: SimpleVector2, end: SimpleVector2): Ray2D {
        const direction = Vector2.sub(end, start);
        const length    = direction.length;

        return new Ray2D(start, Vector2.normalize(direction), length);
    }

}

export enum RayMode {

    /**
     * This raycasting mode will make the Ray2D stop when it finds the first intersection point.
     */
    ANY     = "ANY",
    /**
     * This raycasting mode will make the Ray2D traverse through all intersection points and only return the closest one.
     */
    CLOSEST = "CLOSEST",
    /**
     * This raycasting mode will traverse all intersection points and executes a callback for each one.
     */
    ALL     = "ALL",
}

export class RaycastResult {
    public readonly normal = new Vector2();
    public shape?: any;
    public body?: any;
    public faceIndex       = -1;
    public fraction        = -1;
    public isStopped       = false;

    public reset(): void {
        this.normal.setData(0, 0);
        this.shape     = null;
        this.body      = null;
        this.faceIndex = -1;
        this.fraction  = -1;
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
        this.shape     = shape;
        this.body      = body;
        this.fraction  = fraction;
        this.faceIndex = faceIndex;
    }
}

export class RayCast2D {
    public checkCollisionResponse = true;
    public skipBackfaces          = false;
    public collisionMask          = -1;
    public collisionGroup         = -1;
    public mode: RayMode          = RayMode.ANY;
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
        const body  = null; // this.currentBody;

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
                this.callback && this.callback(result);
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
