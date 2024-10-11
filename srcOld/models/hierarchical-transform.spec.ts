import { expect } from "chai";
import "mocha";
import { HierarchicalTransform } from "./hierarchical-transform";

describe("HierarchicalTransform", () => {
    it("It should test rotation", () => {
        const parentTransform = new HierarchicalTransform();

        const childTransform = new HierarchicalTransform();
        childTransform.setPosition(5, 0, 0);
        childTransform.setParent(parentTransform);

        expect(parentTransform.position).to.include({ x: 0, y: 0, z: 0 });
        expect(childTransform.position).to.include({ x: 5, y: 0, z: 0 });
        expect(childTransform.transformedPos).to.include({ x: 5, y: 0, z: 0 });

        parentTransform.move({ x: 1, y: 2, z: 3 });

        expect(parentTransform.position).to.include({ x: 1, y: 2, z: 3 });
        expect(childTransform.position).to.include({ x: 5, y: 0, z: 0 });
        expect(childTransform.transformedPos).to.include({ x: 6, y: 2, z: 3 });

        parentTransform.setScale(2, 1, 3);

        expect(parentTransform.scale).to.include({ x: 2, y: 1, z: 3 });
        expect(childTransform.scale).to.include({ x: 1, y: 1, z: 1 });
        expect(childTransform.transformedPos).to.include({ x: 11, y: 2, z: 3 });
    });
});
