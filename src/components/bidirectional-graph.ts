export class BidirectionalGraph<T> {
    public readonly map = new Map<T, T[]>();

    public constructor(private readonly comparator: (a: T, b: T) => boolean = (a, b) => a === b) {
    }

    public get numberOfVertices(): number {
        return this.map.size;
    }

    public cleanUp(): void {
        this.map.clear();
    }

    public getEdges(): [T, T][] {
        const result: [T, T][] = [];

        const processedKeys: T[] = [];
        this.map.forEach((value, vertexA) => {
            value.forEach((vertexB) => {
                if (processedKeys.some((v) => this.comparator(v, vertexB))) {
                    return;
                }
                result.push([vertexA, vertexB]);
            });
            processedKeys.push(vertexA);
        });

        return result;
    }

    public hasVertex(item: T): boolean {
        return this.map.has(item);
    }

    public removeVertex(vertex: T, force = false): void{
        const itemValues = this.map.get(vertex);
        if (!itemValues) {
            return;
        }

        if (!force && itemValues.length) {
            console.warn("Vertex contains connections");

            return;
        }

        this.map.delete(vertex);

        itemValues.forEach((point) => {
            this.map.set(point, this.require(point).filter((p) => !this.comparator(p, vertex)));
        });
    }

    public removeDisconnectedVertices(): void {
        this.map.forEach((value, key) => {
            if (!value.length) {
                this.map.delete(key);
            }
        });
    }

    private require(item: T): T[] {
        return this.map.get(item) || [];
    }

    public addVertex(...items: T[]): void {
        items.forEach((item) => {
            if (this.map.has(item)) {
                return;
            }
            this.map.set(item, []);
        });
    }

    public disconnect(itemA: T, itemB: T): void {
        const aValues = this.require(itemA);
        if (!aValues?.length) {
            return;
        }
        this.map.set(itemA, aValues.filter((v) => !this.comparator(itemB, v)));
        this.map.set(itemB, this.require(itemB).filter((v) => !this.comparator(itemA, v)));
    }

    public connect(itemA: T, ...items: T[]): void {
        if (!items.length) {
            return;
        }
        const aValues = this.map.get(itemA) || [];

        const missingPoints = items.filter((p) => !aValues.some((v) => this.comparator(v, p)));

        this.map.set(itemA, [...aValues, ...missingPoints]);

        missingPoints.forEach((itemB) => {
            this.map.set(itemB, [...this.require(itemB), itemA]);
        });
    }

    public areConnected(itemA: T, itemB: T): boolean {
        const aValues = this.map.get(itemA);
        if (!aValues) {
            return false;
        }

        return aValues.some((v) => this.comparator(itemB, v));
    }
}
