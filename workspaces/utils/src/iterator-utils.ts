/**
 * @see IterateFunction
 */
export class IteratorUtils {
    public static iterateXY(
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        callback: (x: number, y: number) => void,
    ): void {
        for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
                callback(x, y);
            }
        }
    }

    public static iterateXZ(
        startX: number,
        startZ: number,
        endX: number,
        endZ: number,
        callback: (x: number, z: number) => void,
    ): void {
        for (let x = startX; x <= endX; x++) {
            for (let z = startZ; z <= endZ; z++) {
                callback(x, z);
            }
        }
    }

    public static iterateYZ(
        startY: number,
        startZ: number,
        endY: number,
        endZ: number,
        callback: (y: number, z: number) => void,
    ): void {
        for (let y = startY; y <= endY; y++) {
            for (let z = startZ; z <= endZ; z++) {
                callback(y, z);
            }
        }
    }

    public static iterateAroundCircle(steps: number, callback: (angleInRadians: number) => void): void {
        const angleStep = (2 * Math.PI) / steps;
        for (let i = 0; i < steps; i++) {
            const angle = i * angleStep;
            callback(angle);
        }
    }

    public static iterateAround2D(
        centerX: number,
        centerY: number,
        radius: number,
        squared: boolean,
        callback: (x: number, y: number) => unknown,
    ): void {
        const minX = centerX - radius;
        const maxX = centerX + radius;
        const minY = centerY - radius;
        const maxY = centerY + radius;

        if (squared) {
            for (let x = minX; x <= maxX; x++) {
                for (let y = minY; y <= maxY; y++) {
                    callback(x, y);
                }
            }
        } else {
            for (let x = minX; x <= maxX; x++) {
                for (let y = minY; y <= maxY; y++) {
                    const distX = x - centerX;
                    const distY = y - centerY;

                    const distance = Math.sqrt(distX * distX + distY * distY);
                    if (distance <= radius) {
                        callback(x, y);
                    }
                }
            }
        }
    }

    /**
     * 0
     * 111
     * 1X1
     * 111
     * 22222
     * 22222
     * 22X22
     * 22222
     * 22222
     * @param x
     * @param z
     * @param distance
     * @param callback
     * @param finishOnFalse
     */
    public static iterateAround(
        x: number,
        z: number,
        distance: number,
        callback: (x: number, z: number) => unknown,
        finishOnFalse = false,
    ): boolean {
        callback(x, z);

        for (let step = 1; step <= distance; step++) {
            const size = step * 2;
            const topLeft = { x: x - step, y: z - step };
            for (let i = 0; i <= size; i++) {
                // top row;
                if (!callback(topLeft.x + i, topLeft.y) && finishOnFalse) {
                    return false;
                }
                // bottom row;
                if (!callback(topLeft.x + i, topLeft.y + size) && finishOnFalse) {
                    return false;
                }

                if (i > 0 && i < size) {
                    // left column;
                    if (!callback(topLeft.x, topLeft.y + i) && finishOnFalse) {
                        return false;
                    }
                    // right column;
                    if (!callback(topLeft.x + size, topLeft.y + i) && finishOnFalse) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
