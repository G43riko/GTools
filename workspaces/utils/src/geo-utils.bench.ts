import { calcCrow } from "./geo-utils.ts";

/**
 * Optimised haversine distance.
 *
 * Problems with the original:
 *   1. `toRadians(deg)` is called 4 times.  Each call does `deg / (180 / Math.PI)`,
 *      which performs a division with a runtime-computed denominator.
 *   2. `2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))` computes two square roots;
 *      the identity `atan2(sqrt(a), sqrt(1-a)) == asin(sqrt(a))` collapses that to one.
 *
 * Fixes applied:
 *   - Pre-compute `RAD = Math.PI / 180` at module level; convert with one multiply.
 *   - Replace `atan2(sqrt(a), sqrt(1-a))` with `asin(sqrt(a))` — identical result,
 *     one fewer `Math.sqrt` call per invocation.
 */
const RADIUS = 6371; // km
const RAD = Math.PI / 180;

function calcCrowFast(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const dLat = (lat2 - lat1) * RAD;
    const dLon = (lon2 - lon1) * RAD;
    const lat1r = lat1 * RAD;
    const lat2r = lat2 * RAD;

    const sinHLat = Math.sin(dLat * 0.5);
    const sinHLon = Math.sin(dLon * 0.5);

    const a = sinHLat * sinHLat +
        sinHLon * sinHLon * Math.cos(lat1r) * Math.cos(lat2r);

    // asin(sqrt(a)) == atan2(sqrt(a), sqrt(1-a)) — saves one sqrt() call
    return RADIUS * 2 * Math.asin(Math.sqrt(a));
}

// ---------------------------------------------------------------------------
// Benchmark pairs (diverse latitudes / longitudes)
// ---------------------------------------------------------------------------

const pairs: [number, number, number, number][] = [
    [48.8566, 2.3522, 51.5074, -0.1278],       // Paris → London
    [40.7128, -74.0060, 34.0522, -118.2437],   // New York → Los Angeles
    [35.6762, 139.6503, 22.3193, 114.1694],    // Tokyo → Hong Kong
    [-33.8688, 151.2093, -37.8136, 144.9631],  // Sydney → Melbourne
    [0.0, 0.0, 0.0, 0.0],                      // edge: identical points
    [90.0, 0.0, -90.0, 0.0],                   // edge: poles
];

for (const [lat1, lon1, lat2, lon2] of pairs) {
    const label = `(${lat1},${lon1})→(${lat2},${lon2})`;

    Deno.bench(`calcCrow     ${label}`, { group: label }, () => {
        calcCrow(lat1, lon1, lat2, lon2);
    });

    Deno.bench(`calcCrowFast ${label}`, { group: label, baseline: true }, () => {
        calcCrowFast(lat1, lon1, lat2, lon2);
    });
}
