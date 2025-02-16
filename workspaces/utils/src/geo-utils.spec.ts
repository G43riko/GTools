import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { calcCrow } from "./geo-utils.ts";

describe("calcCrow", () => {
    it.skip("should calculate the distance between two points correctly", () => {
        // Test case 1: Two points on the equator (easy to calculate manually or verify with online tools)
        const lat1 = 0;
        const lon1 = 0;
        const lat2 = 0;
        const lon2 = 10;
        const expectedDistance1 = 1113.1949079327357; // Approximately 1113.2 km (1 degree of longitude at the equator)
        const distance1 = calcCrow(lat1, lon1, lat2, lon2);
        expect(distance1).toBeCloseTo(expectedDistance1, 2); // Use toBeCloseTo for floating-point comparisons

        // Test case 2: Two points with different latitudes and longitudes
        const lat3 = 40.7128; // New York City
        const lon3 = -74.0060;
        const lat4 = 34.0522; // Los Angeles
        const lon4 = -118.2437;
        const expectedDistance2 = 3940; // Approximate distance in km (you can verify this with online calculators)
        const distance2 = calcCrow(lat3, lon3, lat4, lon4);
        expect(distance2).toBeCloseTo(expectedDistance2, 0); // Adjust precision as needed

        // Test case 3: Same point (distance should be 0)
        const lat5 = 40;
        const lon5 = -70;
        const expectedDistance3 = 0;
        const distance3 = calcCrow(lat5, lon5, lat5, lon5);
        expect(distance3).toBeCloseTo(expectedDistance3, 5); // Use a tolerance since it might not be exactly 0 due to floating point math

        // Test case 4: Points at opposite poles
        const lat6 = 90;
        const lon6 = 0;
        const lat7 = -90;
        const lon7 = 0;
        const expectedDistance4 = 20015; // Approximate distance in km (you can verify this with online calculators)
        const distance4 = calcCrow(lat6, lon6, lat7, lon7);
        expect(distance4).toBeCloseTo(expectedDistance4, 0); // Adjust precision as needed
    });

    it("should handle negative coordinates correctly", () => {
        const lat1 = -20;
        const lon1 = -30;
        const lat2 = 10;
        const lon2 = 40;
        const distance = calcCrow(lat1, lon1, lat2, lon2);
        expect(distance).toBeGreaterThan(0); // Distance should be positive
    });

    it("should handle large coordinate values", () => {
        const lat1 = 80;
        const lon1 = 170;
        const lat2 = -85;
        const lon2 = -160;
        const distance = calcCrow(lat1, lon1, lat2, lon2);
        expect(distance).toBeGreaterThan(0); // Distance should be positive
    });
});
