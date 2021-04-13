import { SimpleVector2, Vector2 } from "../../../math";
import { MinMax2D } from "../../../types";
import { MassAble2D } from "./object2-d";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Capsule.js
 */
export class Capsule implements MassAble2D {
    public constructor(
        private readonly start: SimpleVector2,
        private readonly end: SimpleVector2,
        private readonly radius: number,
    ) {
    }

    public get boundingRadius(): number {
        return this.radius + this.length / 2;
    }

    public get area(): number {
        return Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
    }

    public get circuit(): number {
        return 2 * Math.PI * this.radius + 2 * Vector2.dist(this.start, this.end);
    }

    public toMinMax(): MinMax2D {
        throw new Error("Not implemented");
    }

    public get momentOfInertia(): number {
        // http://www.efunda.com/math/areas/rectangle.cfm
        const boxI = (w: number, h: number): number => w * h * (Math.pow(w, 2) + Math.pow(h, 2)) / 12;

        const semiA = (r: number): number => Math.PI * Math.pow(r, 2) / 2;

        // http://www.efunda.com/math/areas/CircleHalf.cfm
        const semiI = (r: number): number => ((Math.PI / 4) - (8 / (9 * Math.PI))) * Math.pow(r, 4);

        const semiC = (r: number): number => (4 * r) / (3 * Math.PI);

        // https://en.wikipedia.org/wiki/Second_moment_of_area#Parallel_axis_theorem
        const capsuleA = (l: number, r: number): number => l * 2 * r + Math.PI * Math.pow(r, 2);

        const capsuleI = (l: number, r: number): number => {
            const d = l / 2 + semiC(r);

            return boxI(l, 2 * r) + 2 * (semiI(r) + semiA(r) * Math.pow(d, 2));
        };

        const length = this.length;
        const area   = capsuleA(length, this.radius);

        return (area > 0) ? capsuleI(length, this.radius) / area : 0;
    }

    public get length(): number {
        return Vector2.dist(this.start, this.end);
    }
}
