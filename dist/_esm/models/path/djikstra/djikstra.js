export class DjikstraVertex {
    constructor(name, nodes, weight) {
        this.name = name;
        this.nodes = nodes;
        this.weight = weight;
    }
}
export class Dijkstra {
    constructor() {
        this.vertices = {};
    }
    addVertex(vertex) {
        this.vertices[vertex.name] = vertex;
    }
    removeVertex(vertexName) {
        delete this.vertices[vertexName];
    }
    getVertex(vertexName) {
        return this.vertices[vertexName];
    }
    requireVertex(name, vertexWeight = 0) {
        const result = this.getVertex(name);
        if (result) {
            return result;
        }
        const newVertex = new DjikstraVertex(name, [], 0);
        this.addVertex(newVertex);
        return newVertex;
    }
    findPointsOfShortestWay(start, finish, weight) {
        let nextVertex = finish;
        const arrayWithVertex = [];
        while (nextVertex !== start) {
            let minWeight = Number.MAX_VALUE;
            let minVertex = "";
            this.vertices[nextVertex].nodes.forEach((node) => {
                if (node.weight + this.vertices[node.nameOfVertex].weight < minWeight) {
                    minWeight = this.vertices[node.nameOfVertex].weight;
                    minVertex = node.nameOfVertex;
                }
            });
            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        }
        return arrayWithVertex;
    }
    findShortestWay(start, finish) {
        const nodes = {};
        Object.values(this.vertices).forEach((vertex) => {
            if (vertex.name === start) {
                vertex.weight = 0;
            }
            else {
                vertex.weight = Number.MAX_VALUE;
            }
            nodes[vertex.name] = vertex.weight;
        });
        while (Object.keys(nodes).length !== 0) {
            const sortedVisitedByWeight = Object.keys(nodes).sort((a, b) => this.vertices[a].weight - this.vertices[b].weight);
            const currentVertex = this.vertices[sortedVisitedByWeight[0]];
            for (const j of currentVertex.nodes) {
                const calculateWeight = currentVertex.weight + j.weight;
                if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                    this.vertices[j.nameOfVertex].weight = calculateWeight;
                }
            }
            delete nodes[sortedVisitedByWeight[0]];
        }
        const finishWeight = this.vertices[finish].weight;
        const arrayWithVertex = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();
        return {
            distance: finishWeight,
            nodes: [...arrayWithVertex, finish],
        };
    }
}
//# sourceMappingURL=djikstra.js.map