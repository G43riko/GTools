interface Entity {
    x: number;
    y: number;
    r: number;
}

export class Bucket {
    /**
     * Keep entities sorted by ID
     */
    private entities = new Array<Entity>();
    private readonly index: number;
    public get length(): number {
        return this.entities.length;
    }

    public constructor(index: number) {
        this.index = index;
    }

    public forEachEntity(
        callback: (entity: Entity, index: number) => unknown,
    ): void {
        this.entities.forEach(callback);
    }

    public addEntity(entity: Entity): void {
        this.entities.push(entity);
    }
    public removeEntity(entity: Entity): boolean {
        const index = this.entities.indexOf(entity);
        if (index < 0) {
            return false;
        }
        this.entities.splice(index, 0);

        return true;
    }
}

export class StaticSpatialHash {
    private readonly width: number;
    private readonly height: number;
    protected readonly tileSize: number;
    protected readonly buckets: Bucket[];

    public constructor(width: number, height: number, tileSize: number) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.buckets = Array.from(
            { length: this.width * this.height },
            (_, index) => new Bucket(index),
        );
        console.log(this.getIdForPosition(tileSize * 21, tileSize * 0));
    }

    public addEntity(entity: Entity): void {
        this.getIdsForEntity(entity).forEach((id) => {
            this.buckets[id].addEntity(entity);
        });
    }
    protected getIdForPosition(x: number, y: number): number {
        return (
            Math.floor(x / this.tileSize) + Math.floor(y / this.tileSize) * this.width
        );
    }

    public renderTilesFor(
        context: CanvasRenderingContext2D,
        entity: Entity,
    ): void {
        const offset = 2;
        this.getIdsForEntity(entity).forEach((i) => {
            const x = i % this.width;
            const y = Math.floor(i / this.width);
            context.strokeRect(
                x * this.tileSize + offset,
                y * this.tileSize + offset,
                this.tileSize - offset * 2,
                this.tileSize - offset * 2,
            );
        });
        const centerX = Math.floor(entity.x / this.tileSize);
        const centerY = Math.floor(entity.y / this.tileSize);
        context.strokeRect(
            centerX * this.tileSize + offset * 2,
            centerY * this.tileSize + offset * 2,
            this.tileSize - offset * 4,
            this.tileSize - offset * 4,
        );
    }
    public renderMap(context: CanvasRenderingContext2D): void {
        context.strokeStyle = "#ff0000";
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                context.strokeRect(
                    x * this.tileSize,
                    y * this.tileSize,
                    this.tileSize,
                    this.tileSize,
                );
            }
        }
    }

    private getIdsForEntity(entity: Entity): Set<number> {
        const result = new Set<number>();

        let minX = Math.floor((entity.x - entity.r) / this.tileSize);
        let maxX = Math.floor((entity.x + entity.r) / this.tileSize);
        let minY = Math.floor((entity.y - entity.r) / this.tileSize);
        let maxY = Math.floor((entity.y + entity.r) / this.tileSize);

        if (minX < 0) {
            minX = 0;
        }
        if (minY < 0) {
            minY = 0;
        }
        if (maxX >= this.width) {
            maxX = this.width - 1;
        }
        if (maxY >= this.height) {
            maxY = this.height - 1;
        }
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                result.add(x + y * this.width);
            }
        }
        return result;
    }

    public getNearby(entity: Entity): Set<Entity> {
        const nearbyEntities = new Set<Entity>();

        this.getIdsForEntity(entity).forEach((id) => {
            this.buckets[id].forEachEntity((e) => nearbyEntities.add(e));
        });

        return nearbyEntities;
    }
}

export class StaticSpatialHashWithSmallObjects extends StaticSpatialHash {
    public override addEntity(entity: Entity): void {
        if (entity.r > this.tileSize) {
            throw new Error("Entity's radius must be lower than tileSize");
        }
        this.buckets[this.getIdForPosition(entity.x, entity.y)].addEntity(entity);
    }
}
