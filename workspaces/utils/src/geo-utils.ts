import { toRadians } from "./math-utils.ts";

const RADIUS = 6371; // km

/**
 * Calculates the great-circle distance between two points on the Earth's surface
 * given their latitude and longitude using the haversine formula.
 * Uses haversine
 *
 * @param {number} lat1 Latitude of the first point in decimal degrees.
 * @param {number} lon1 Longitude of the first point in decimal degrees.
 * @param {number} lat2 Latitude of the second point in decimal degrees.
 * @param {number} lon2 Longitude of the second point in decimal degrees.
 * @return {number} The great-circle distance between the two points in kilometers.
 */
export function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const lat1r = toRadians(lat1);
    const lat2r = toRadians(lat2);

    const sinDLat = Math.sin(dLat * 0.5);
    const sinDLon = Math.sin(dLon * 0.5);

    const a = sinDLat * sinDLat +
        sinDLon * sinDLon * Math.cos(lat1r) * Math.cos(lat2r);

    return RADIUS * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
