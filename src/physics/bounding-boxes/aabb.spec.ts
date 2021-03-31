import { expect } from "chai";
import "mocha";
import { Ray } from "../objects/2d/ray";
import { AABB } from "./aabb";

// describe("AABB", () => {
//     describe("ray cast", () => {
//         const aabb = new AABB({min: {x: 0, y: 0}, max: {x: 20, y: 20}});
//
//         const ray = Ray.fromLine({x: -1, y: 0}, {x: 1, y: 2});
//
//         it("It should test two point distance", () => {
//
//             aabb.rayCast(ray);
//             expect(0).to.be.equal(0);
//         });
//     });
//
// });
