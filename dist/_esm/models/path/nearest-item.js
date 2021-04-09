import { PriorityQueue } from "../data-structures/priority-queue";
export class NearestVertex {
    constructor(name, type, nodes) {
        this.name = name;
        this.type = type;
        this.nodes = nodes;
    }
}
export class NearestItem {
    constructor() {
        this.vertices = {};
    }
    addVertex(vertex) {
        this.vertices[vertex.name] = vertex;
    }
    getVertex(vertex) {
        return this.vertices[vertex.name];
    }
    removeVertex(vertex) {
        delete this.vertices[vertex.name];
    }
    requireVertex(name, type) {
        const result = this.vertices[name];
        if (result) {
            return result;
        }
        const newVertex = new NearestVertex(name, type, []);
        this.addVertex(newVertex);
        return newVertex;
    }
    getNearestItem(name, searchedType) {
        const resultVertices = [];
        const queue = PriorityQueue.createMinQueue((value) => value.weight);
        const visitedVertices = {};
        queue.add({
            weight: 0,
            vertices: [this.vertices[name]],
        });
        while (queue.length) {
            const currentItem = queue.pop();
            const currentVertex = currentItem.vertices[currentItem.vertices.length - 1];
            if (currentVertex.type === searchedType) {
                return {
                    distance: currentItem.weight,
                    nodes: currentItem.vertices.map((e) => e.name),
                };
            }
            visitedVertices[currentVertex.name] = true;
            currentVertex.nodes.forEach((path) => {
                if (visitedVertices[path.name]) {
                    return;
                }
                queue.add({
                    weight: currentItem.weight + path.weight,
                    vertices: [...currentItem.vertices, this.vertices[path.name]],
                });
            });
            resultVertices.push(currentVertex);
        }
        return null;
    }
}
//# sourceMappingURL=nearest-item.js.map