export interface SimpleLatLong {
    /**
     * Value between -90 and 90
     */
    lat: number;
    /**
     * value between -180 and 180
     */
    long: number;
}
export type ReadonlySimpleLatLong = Readonly<SimpleLatLong>;
export type LatLongTuple = [lat: number, lng: number];
export type ReadonlyLatLongTuple = readonly [lat: number, lng: number];

export type LatLongAltTuple = [lat: number, lng: number, alt: number];
export type ReadonlyLatLongAltTuple = readonly [lat: number, lng: number, alt: number];
