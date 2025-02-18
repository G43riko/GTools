import { Random } from "@g43/tools";
import { makeNoise2D } from "./noise/make-noise-2d.ts";
import { PerlinNoise } from "./noise/perlin-noise.ts";

/**
 * @see https://github.com/amitp/mapgen2/blob/4394df0e04101dbbdc36ee1e61ad7d62446bb3f1/Map.as#L787
 * The factory returns a function that takes a
 * normalized point (x and y are -1 to +1) and returns true if the
 * point should be on the island, and false if it should be water
 */
export class MapLandGenerator {
    /**
     * @param seed
     * @param islandFactor 1.0 means no small islands; 2.0 leads to a lot
     * @returns
     */
    public static makeRadial(seed: number, islandFactor = 1.07): (x: number, y: number) => boolean {
        const random = new Random(seed);
        const bumps = random.nextIntBetween(1, 6);
        const startAngle = random.nextFloatBetween(0, Math.PI * 2);
        const dipAngle = random.nextFloatBetween(0, Math.PI * 2);
        const dipWidth = 0; // ?? random.nextFloatBetween(0.2, 0.7);

        return (x: number, y: number): boolean => {
            const pointLength = Math.sqrt(x * x + y * y);
            const angle = Math.atan2(y, x);
            const length = 0.5 * (Math.max(Math.abs(x), Math.abs(y)) + pointLength);

            let r1 = 0.5 + 0.4 * Math.sin(startAngle + bumps * angle + Math.cos((bumps + 3) * angle));
            let r2 = 0.7 - 0.2 * Math.sin(startAngle + bumps * angle - Math.sin((bumps + 2) * angle));

            if (
                Math.abs(angle - dipAngle) < dipWidth ||
                Math.abs(angle - dipAngle + 2 * Math.PI) < dipWidth ||
                Math.abs(angle - dipAngle - 2 * Math.PI) < dipWidth
            ) {
                r1 = r2 = 0.2;
            }

            return (length < r1 || (length > r1 * islandFactor && length < r2));
        };
    }

    public static makeEmpty(): (x: number, y: number) => boolean {
        return () => false;
    }

    public static makeFull(): (x: number, y: number) => boolean {
        return () => true;
    }

    public static makePerlin(seed = 1, frequency = 1, octaves = 10): (x: number, y: number) => boolean {
        const noise = PerlinNoise.createDynamicProvider2(makeNoise2D(seed + 13874), { frequency, octaves });

        return (x, y) => {
            const normalizedValue = noise(x, y) / 2 + 0.5;
            const pointLength = Math.sqrt(x * x + y * y);

            return normalizedValue > 0.3 + 0.4 * pointLength * pointLength;
        };
    }
}
