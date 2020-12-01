import { SimpleVector2 } from "gtools/math";
import { MinMax, PosSize } from "gtools/types";
import { convertPosSizeToMinMax } from "../object-convertors";

export class Sphere {
    public constructor(
        public readonly radius: number,
        public readonly center: SimpleVector2,
    ) {
    }

    public get circuit(): number {
        return 2 * Math.PI * this.radius;
    }

    public get area(): number {
        return Math.PI * this.radius * this.radius;
    }

    public static fromMinMax({min, max}: MinMax, chooseSize: "min" | "max" = "max"): Sphere {
        const center = {
            x: (min.x + max.x) / 2,
            y: (min.y + max.y) / 2,
        };

        const sizeX = max.x - min.x;
        const sizeY = max.y - min.y;

        const radius = chooseSize === "min" ? Math.min(sizeX, sizeY) : Math.max(sizeX, sizeY);

        return new Sphere(radius, center);
    }

    public static fromPosSize(posSize: PosSize, chooseSize: "min" | "max" = "max"): Sphere {
        return Sphere.fromMinMax(convertPosSizeToMinMax(posSize), chooseSize);
    }
}
