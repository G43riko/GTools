import { expect } from "chai";
import "mocha";
import { BidirectionalGraph } from "./bidirectional-graph";

describe("BidirectionalGraph", () => {

    it("Test empty object", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        expect(graph.numberOfVertices).to.be.equal(0);

        expect(graph.hasVertex("a")).to.be.false;
        expect(graph.hasVertex("b")).to.be.false;
        expect(graph.hasVertex("c")).to.be.false;
        expect(graph.hasVertex("d")).to.be.false;
    });

    it("Remove empty vertices", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        graph.addVertex("a", "b", "c", "d");

        expect(graph.numberOfVertices).to.be.equal(4);

        graph.connect("a", "b", "c");
        graph.connect("b", "c");

        expect(graph.numberOfVertices).to.be.equal(4);

        graph.removeDisconnectedVertices();

        expect(graph.numberOfVertices).to.be.equal(3);

        graph.disconnect("a", "c");
        graph.removeDisconnectedVertices();

        expect(graph.numberOfVertices).to.be.equal(3);

        graph.removeVertex("a", true);

        expect(graph.numberOfVertices).to.be.equal(2);

        graph.removeDisconnectedVertices();

        expect(graph.numberOfVertices).to.be.equal(2);

        graph.disconnect("b", "c");

        graph.removeDisconnectedVertices();

        expect(graph.numberOfVertices).to.be.equal(0);
    });
    it("Test getEdges", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        graph.addVertex("a", "b", "c", "d");
        graph.connect("a", "b", "c");
        graph.connect("b", "c");

        expect(graph.getEdges()).to.deep.equal([
            ["a", "b"],
            ["a", "c"],
            ["b", "c"],
        ]);

        graph.removeVertex("a", true);

        expect(graph.getEdges()).to.deep.equal([
            ["b", "c"],
        ]);

    });
    it("Test removing vertices", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        graph.addVertex("a", "b", "c", "d");
        graph.connect("a", "b", "c");
        graph.connect("b", "c");

        graph.removeVertex("z");

        expect(graph.areConnected("a", "b")).to.be.true;
        expect(graph.areConnected("a", "c")).to.be.true;
        expect(graph.areConnected("b", "c")).to.be.true;
        expect(graph.numberOfVertices).to.be.equal(4);

        graph.removeVertex("a");

        expect(graph.hasVertex("a")).to.be.true;
        expect(graph.areConnected("a", "b")).to.be.true;
        expect(graph.areConnected("a", "c")).to.be.true;
        expect(graph.areConnected("b", "c")).to.be.true;
        expect(graph.numberOfVertices).to.be.equal(4);

        graph.removeVertex("a", true);

        expect(graph.hasVertex("a")).to.be.false;
        expect(graph.areConnected("a", "b")).to.be.false;
        expect(graph.areConnected("a", "c")).to.be.false;
        expect(graph.areConnected("b", "c")).to.be.true;
        expect(graph.numberOfVertices).to.be.equal(3);

    });

    it("Connect and disconnect existing vertices", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        graph.addVertex("a", "b", "c", "d");

        expect(graph.numberOfVertices).to.be.equal(4);

        expect(graph.hasVertex("a")).to.be.true;
        expect(graph.hasVertex("b")).to.be.true;
        expect(graph.hasVertex("c")).to.be.true;
        expect(graph.hasVertex("d")).to.be.true;

        expect(graph.areConnected("a", "b")).to.be.false;
        expect(graph.areConnected("a", "c")).to.be.false;
        expect(graph.areConnected("a", "d")).to.be.false;

        graph.connect("a", "b", "c", "d");

        expect(graph.areConnected("a", "b")).to.be.true;
        expect(graph.areConnected("a", "c")).to.be.true;
        expect(graph.areConnected("a", "d")).to.be.true;

        expect(graph.areConnected("b", "a")).to.be.true;
        expect(graph.areConnected("c", "a")).to.be.true;
        expect(graph.areConnected("d", "a")).to.be.true;

        graph.disconnect("a", "b");
        graph.disconnect("a", "c");
        graph.disconnect("a", "d");

        expect(graph.areConnected("a", "b")).to.be.false;
        expect(graph.areConnected("a", "c")).to.be.false;
        expect(graph.areConnected("a", "d")).to.be.false;

        expect(graph.numberOfVertices).to.be.equal(4);
        graph.cleanUp();
        expect(graph.numberOfVertices).to.be.equal(0);
    });
    it("Connect and disconnect not existing vertices", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        graph.disconnect("m", "n");
        graph.connect("m");
        graph.connect("m", "n");
    });
    it("Add same vertex multiple times", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        graph.addVertex("g", "g");
        graph.addVertex("g");
    });
    it("Connect and disconnect not existing vertices", () => {
        const graph = new BidirectionalGraph<string>((a, b) => a.localeCompare(b) === 0);
        expect(graph.areConnected("x", "y")).to.be.false;
        expect(graph.areConnected("y", "x")).to.be.false;
        graph.connect("x", "y");
        expect(graph.areConnected("x", "y")).to.be.true;
        expect(graph.areConnected("y", "x")).to.be.true;
        graph.disconnect("y", "x");
        expect(graph.areConnected("x", "y")).to.be.false;
        expect(graph.areConnected("y", "x")).to.be.false;
    });

});
