import { expect } from "chai";
import { BinarySearchTree } from "./binary-tree";

describe("Binary tree", () => {
    it("Should find minimum", () => {
        function findMin(rootNode: any): any {
            if (!rootNode) {
                return null;
            }
            if (!rootNode.leftChild) {
                return rootNode.val;
            }

            return findMin(rootNode.leftChild);
        }

        function findMax(rootNode: any): any {
            if (!rootNode) {
                return null;
            }
            if (!rootNode.rightChild) {
                return rootNode.val;
            }

            return findMax(rootNode.rightChild);
        }

        const BST = new BinarySearchTree<number>(6);
        BST.add(0);
        BST.add(8);
        BST.add(-1);
        BST.add(19);
        BST.add(15);
        BST.add(20);
        BST.add(4);

        const minResult = findMin(BST.root);
        const maxResult = findMax(BST.root);
        expect(minResult).to.be.equal(-1);
        expect(maxResult).to.be.equal(20);
    });
});
