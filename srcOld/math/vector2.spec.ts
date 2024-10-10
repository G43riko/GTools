import { expect } from "chai";
import "mocha";
import { Vector2 } from "./vector2";

describe("Vector2", () => {
    describe("lerp", () => {
        it("It should lerp", () => {
            expect({...Vector2.lerp({x: 0, y: 0}, {x: 10, y: 10}, 0)}).to.deep.equal({x: 0, y: 0});
            expect({...Vector2.lerp({x: 0, y: 0}, {x: 10, y: 10}, 0.25)}).to.deep.equal({x: 2.5, y: 2.5});
            expect({...Vector2.lerp({x: 0, y: 0}, {x: 10, y: 10}, 0.5)}).to.deep.equal({x: 5, y: 5});
            expect({...Vector2.lerp({x: 0, y: 0}, {x: 10, y: 10}, 0.75)}).to.deep.equal({x: 7.5, y: 7.5});
            expect({...Vector2.lerp({x: 0, y: 0}, {x: 10, y: 10}, 1)}).to.deep.equal({x: 10, y: 10});
        });
    });
});
