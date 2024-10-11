export interface DjikstraResult {
    readonly distance: number;
    readonly nodes: readonly string[];
}

export class DjikstraVertex {
    public constructor(
        public readonly name: string,
        public readonly nodes: {
            readonly nameOfVertex: string;
            readonly weight: number;
        }[],
        public weight: number,
    ) {
    }
}

export class Dijkstra {
    public vertices: { [key: string]: DjikstraVertex };

    public constructor() {
        this.vertices = {};
    }

    public addVertex(vertex: DjikstraVertex): void {
        this.vertices[vertex.name] = vertex;
    }

    public removeVertex(vertexName: string): void {
        delete this.vertices[vertexName];
    }

    public getVertex(vertexName: string): DjikstraVertex {
        return this.vertices[vertexName];
    }

    public requireVertex(name: string, vertexWeight = 0): DjikstraVertex {
        const result = this.getVertex(name);
        if (result) {
            return result;
        }

        const newVertex = new DjikstraVertex(name, [], 0);
        this.addVertex(newVertex);

        return newVertex;
    }

    public findPointsOfShortestWay(start: string, finish: string, weight: number): string[] {
        let nextVertex: string = finish;
        const arrayWithVertex: string[] = [];
        while (nextVertex !== start) {
            let minWeight: number = Number.MAX_VALUE;
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

    public findShortestWay(start: string, finish: string): DjikstraResult {
        const nodes: { [key: string]: number } = {};

        Object.values(this.vertices).forEach((vertex) => {
            if (vertex.name === start) {
                vertex.weight = 0;
            } else {
                vertex.weight = Number.MAX_VALUE;
            }
            nodes[vertex.name] = vertex.weight;
        });

        while (Object.keys(nodes).length !== 0) {
            const sortedVisitedByWeight: string[] = Object.keys(nodes).sort((a, b) =>
                this.vertices[a].weight - this.vertices[b].weight
            );
            const currentVertex: DjikstraVertex = this.vertices[sortedVisitedByWeight[0]];
            for (const j of currentVertex.nodes) {
                const calculateWeight: number = currentVertex.weight + j.weight;
                if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                    this.vertices[j.nameOfVertex].weight = calculateWeight;
                }
            }
            delete nodes[sortedVisitedByWeight[0]];
        }
        const finishWeight: number = this.vertices[finish].weight;
        const arrayWithVertex: string[] = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();

        return {
            distance: finishWeight,
            nodes: [...arrayWithVertex, finish],
        };
    }
}
