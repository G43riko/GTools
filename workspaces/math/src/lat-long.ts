import type { ReadonlySimpleLatLong, SimpleLatLong } from "@g43/types";

export class LatLong {
    public lat = 0;
    public long = 0;
    public static equals(vecA: ReadonlySimpleLatLong, vecB: ReadonlySimpleLatLong): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.lat === vecB.lat && vecA.long === vecB.long;
    }

    public static isLatLong<Item extends ReadonlySimpleLatLong>(item: Item | any): item is Item {
        return item && !isNaN(item.lat) && !isNaN(item.long);
    }

    public static toString(latLong?: unknown, fixedSize?: number): string {
        if (this.isLatLong(latLong)) {
            if (fixedSize) {
                return `[${latLong.lat.toFixed(fixedSize)}, ${latLong.long.toFixed(fixedSize)}]`;
            }

            return `[${latLong.lat}, ${latLong.long}}]`;
        }

        return String(latLong);
    }

    public static createSimple(lat: number, long: number): SimpleLatLong {
        return { lat, long };
    }

    public static createReadonlySimple(lat: number, long: number): ReadonlySimpleLatLong {
        return { lat, long };
    }

    public static cloneSimple(latLong: ReadonlySimpleLatLong): SimpleLatLong {
        return { lat: latLong.lat, long: latLong.lat };
    }

    public static cloneReadonlySimple(latLong: ReadonlySimpleLatLong): ReadonlySimpleLatLong {
        return { lat: latLong.lat, long: latLong.lat };
    }

    public constructor(
        lat = 0,
        long = 0,
    ) {
        this.lat = lat;
        this.long = long;
    }

    public set(latLong: ReadonlySimpleLatLong): void {
        this.setData(latLong.lat, latLong.long);
    }

    public setData(lat: number, long: number): void {
        this.lat = lat;
        this.long = long;
    }
}
