import { SimpleVector } from "@g43/math";
import { intersection3dPlaneLineIntersectionAdvanced } from "./intersects-3d.ts";

describe("Intersections3d", () => {
    it("intersection3dPlaneLineIntersectionAdvanced", () => {
        const point = intersection3dPlaneLineIntersectionAdvanced(
            SimpleVector.ZERO_3,
            SimpleVector.UP_3,
            SimpleVector.UP_3,
            SimpleVector.DOWN_3,
        );

        expect(point).toEqual(SimpleVector.empty3());
    });
});
