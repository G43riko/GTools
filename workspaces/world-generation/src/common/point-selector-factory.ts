import { Random } from "@g43/tools";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { SimpleVector } from "@g43/math";

/**
 * TODO: Add pseudo random function to move point only within its grid (jittered grid)
 */
export class PointSelectorFactory {
    public static generateSquare(size: number, offset = 0): (points: number) => readonly ReadonlySimpleVector2[] {
        return (points: number) => {
            let counter  = 0;
            const result = new Array(points);
            const n      = Math.sqrt(points);
            const realSize = size - offset * 2;

            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    result[counter++] = {
                        x: offset + (0.5 + x) / n * realSize,
                        y: offset + (0.5 + y) / n * realSize,
                    };
                }
            }

            return result;
        };
    }

    // public static generateRelaxed(size: number, seed: number): (points: number) => readonly ReadonlySimpleVector2[] {
    //     const NUM_LLOYD_RELAXATIONS = 2;
    //     return (points) => {
    //         const points = PointSelectorFactory.generateRandom(size, seed)(points);
    //
    //         for (let i = 0; i < NUM_LLOYD_RELAXATIONS; i++) {
    //
    //         }
    //     };
    // }

    public static generateRandom(size: number, seed: number, offset = 10): (points: number) => readonly ReadonlySimpleVector2[] {
        const random = new Random(seed);

        return (points: number) => 
            Array.from({ length: points }, () => SimpleVector.create2(
                random.nextIntBetween(offset, size - offset),
                random.nextIntBetween(offset, size - offset)
            ));
    }

    public static generateHexagon(size: number, offset = 0): (points: number) => readonly ReadonlySimpleVector2[] {
        return (points: number) => {
            let counter  = 0;
            const result = new Array(points);
            const n      = Math.sqrt(points);
            const realSize = size - offset * 2;

            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    result[counter++] = {
                        x: offset + (0.5 + x) / n * realSize,
                        y: offset + (0.25 + 0.5 * x % 2 + y) / n * realSize,
                    };
                }
            }

            return result;
        };
    }
}
