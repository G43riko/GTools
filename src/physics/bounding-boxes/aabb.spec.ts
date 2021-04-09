import { expect } from "chai";
import "mocha";
import { Ray2D } from "../objects/2d/ray-2d";
import { AABB3 } from "./AABB3";

// describe("AABB3", () => {
//     describe("ray cast", () => {
//         const aabb = new AABB3({min: {x: 0, y: 0}, max: {x: 20, y: 20}});
//
//         const ray = Ray2D.fromLine({x: -1, y: 0}, {x: 1, y: 2});
//
//         it("It should test two point distance", () => {
//
//             aabb.rayCast(ray);
//             expect(0).to.be.equal(0);
//         });
//     });
//
// });
