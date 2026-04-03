import type { ReadonlySimpleLatLong, SimpleLatLong } from "@g43/types";

/**
 * Represents a geographic coordinate as a latitude/longitude pair.
 *
 * @example
 * ```ts ignore
 * const paris = new LatLong(48.8566, 2.3522);
 * const copy = LatLong.createSimple(paris.lat, paris.long);
 * console.log(LatLong.toString(paris, 4)); // "[48.8566, 2.3522]"
 * ```
 */
export class LatLong {
    public lat = 0;
    public long = 0;

    /**
     * Returns `true` when both coordinates are numerically equal.
     * Same-reference objects are considered equal without comparing fields.
     *
     * @param vecA - First coordinate to compare.
     * @param vecB - Second coordinate to compare.
     */
    public static equals(vecA: ReadonlySimpleLatLong, vecB: ReadonlySimpleLatLong): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.lat === vecB.lat && vecA.long === vecB.long;
    }

    /**
     * Returns `true` when `item` has numeric `lat` and `long` properties.
     *
     * @param item - Value to test.
     */
    public static isLatLong<Item extends ReadonlySimpleLatLong>(item: Item | any): item is Item {
        return item && !isNaN(item.lat) && !isNaN(item.long);
    }

    /**
     * Serialises a lat/long value to a human-readable string.
     *
     * @param latLong - Value to serialise. Non-lat-long values are converted via `String()`.
     * @param fixedSize - When provided, coordinates are formatted with this many decimal places.
     * @returns Formatted string representation.
     */
    public static toString(latLong?: unknown, fixedSize?: number): string {
        if (this.isLatLong(latLong)) {
            if (fixedSize) {
                return `[${latLong.lat.toFixed(fixedSize)}, ${latLong.long.toFixed(fixedSize)}]`;
            }

            return `[${latLong.lat}, ${latLong.long}}]`;
        }

        return String(latLong);
    }

    /**
     * Creates a mutable {@link SimpleLatLong} plain object.
     *
     * @param lat - Latitude value.
     * @param long - Longitude value.
     */
    public static createSimple(lat: number, long: number): SimpleLatLong {
        return { lat, long };
    }

    /**
     * Creates a readonly {@link ReadonlySimpleLatLong} plain object.
     *
     * @param lat - Latitude value.
     * @param long - Longitude value.
     */
    public static createReadonlySimple(lat: number, long: number): ReadonlySimpleLatLong {
        return { lat, long };
    }

    /**
     * Returns a shallow mutable copy of the given lat/long.
     *
     * @param latLong - The coordinate to clone.
     */
    public static cloneSimple(latLong: ReadonlySimpleLatLong): SimpleLatLong {
        return { lat: latLong.lat, long: latLong.long };
    }

    /**
     * Returns a shallow readonly copy of the given lat/long.
     *
     * @param latLong - The coordinate to clone.
     */
    public static cloneReadonlySimple(latLong: ReadonlySimpleLatLong): ReadonlySimpleLatLong {
        return { lat: latLong.lat, long: latLong.long };
    }

    /**
     * @param lat - Initial latitude. Defaults to `0`.
     * @param long - Initial longitude. Defaults to `0`.
     */
    public constructor(
        lat = 0,
        long = 0,
    ) {
        this.lat = lat;
        this.long = long;
    }

    /**
     * Copies coordinates from the given lat/long object into this instance.
     *
     * @param latLong - Source coordinate.
     */
    public set(latLong: ReadonlySimpleLatLong): void {
        this.setData(latLong.lat, latLong.long);
    }

    /**
     * Sets the latitude and longitude directly.
     *
     * @param lat - New latitude value.
     * @param long - New longitude value.
     */
    public setData(lat: number, long: number): void {
        this.lat = lat;
        this.long = long;
    }
}
