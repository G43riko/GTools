import { PriorityQueue } from "../data-structures/priority-queue";

export class NearestVertex {
    public constructor(
        public readonly name: string,
        public readonly type: string,
        public readonly nodes: {
            readonly weight: number;
            readonly name: string;
        }[],
    ) {
    }
}

export interface NearestResult {
    readonly distance: number;
    readonly nodes: readonly string[];
}

export class NearestItem {
    private vertices: { [key: string]: NearestVertex } = {};

    public addVertex(vertex: NearestVertex): void {
        this.vertices[vertex.name] = vertex;
    }

    public getVertex(vertex: NearestVertex): NearestVertex {
        return this.vertices[vertex.name];
    }

    public removeVertex(vertex: NearestVertex): void {
        delete this.vertices[vertex.name];
    }

    public requireVertex(name: string, type: string): NearestVertex {
        const result = this.vertices[name];
        if (result) {
            return result;
        }

        const newVertex = new NearestVertex(name, type, []);
        this.addVertex(newVertex);

        return newVertex;
    }

    public getNearestItem(name: string, searchedType: string): NearestResult {
        const resultVertices: any[] = [];


        const queue = PriorityQueue.createMinQueue((value: { weight: number, vertices: NearestVertex[] }) => value.weight);
        const visitedVertices: {[key: string]: true} = {};
        queue.add({
            weight: 0,
            vertices: [this.vertices[name]],
        });

        while (queue.length) {
            const currentItem = queue.pop()!;
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

        return null as any;
    }
}
