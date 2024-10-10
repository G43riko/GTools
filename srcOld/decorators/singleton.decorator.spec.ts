import { expect } from "chai";
import "mocha";
import { Singleton } from "./singleton.decorator";

describe("Singleton decorator", () => {
    describe("test 1", () => {
        @Singleton
        class SingletonClass1 {
        }

        it("Should create first instance", () => {
            expect(new SingletonClass1()).to.be.an("object");
        });
    });

    describe("test 2", () => {
        @Singleton
        class SingletonClass2 {
        }

        it("Should throw error while creating second instance", () => {
            expect(new SingletonClass2()).to.be.an("object");
            expect(() => new SingletonClass2()).to.throw(Error);
        });
    });
});
