import { ReadonlySimpleVector3 } from "../../../../math/simple-vector3";
import { Grid3MapHolder } from "./grid3-map-holder";

export class AdvancedGrid3Holder<T extends (string | number | Record<string, unknown>)> {
    private readonly _data = Grid3MapHolder.initEmpty<T>(this.x, this.y, this.z);

    public constructor(
        private readonly x: number,
        private readonly y: number,
        private readonly z: number,
        private _origin = { x: 0, y: 0, z: 0 },
    ) {
    }

    public forEach(callback: (block: T, x: number, y: number, z: number) => void | boolean): void {
        this._data.forEach(callback);
    }

    public get(x: number, y: number, z: number): T {
        return this._data.get(x, y, z);
    }

    public set(x: number, y: number, z: number, item: T): void {
        return this._data.set(x, y, z, item);
    }

    public get origin(): ReadonlySimpleVector3 {
        return this._origin;
    }

    public setOrigin(x: number, y: number, z: number): void {
        this._origin = { x, y, z };
    }

    public fill(value: T | ((x: number, y: number, z: number) => T)): void {
        if (typeof value === "function") {
            for (let i = 0; i < this.x; i++) {
                for (let j = 0; j < this.y; j++) {
                    for (let k = 0; k < this.z; k++) {
                        this._data.set(i, j, k, value(i, j, k));
                    }
                }
            }

            return;
        }
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
                for (let k = 0; k < this.z; k++) {
                    this._data.set(i, j, k, value);
                }
            }
        }
    }

    private setRelativeBlock(x: number, y: number, z: number, block: T): boolean {
        if (!this.isRelativePointInside(x, y, z)) {
            return false;
        }

        this._data.set(x, y, z, block);

        return true;
    }

    public swap(
        relX1: number,
        relY1: number,
        relZ1: number,
        relX2: number,
        relY2: number,
        relZ2: number,
    ): boolean {
        if (!this.isRelativePointInside(relX1, relY1, relZ1)) {
            return false;
        }
        if (!this.isRelativePointInside(relX2, relY2, relZ2)) {
            return false;
        }

        // TODO: use this._data.transform;
        const block1 = this._data.get(relX1, relY1, relZ1);
        const block2 = this._data.get(relX2, relY2, relZ2);

        this._data.set(relX1, relY1, relZ1, block2);
        this._data.set(relX2, relY2, relZ2, block1);

        return true;
    }

    public mirrorYZ(): void {
        const halfX = Math.floor(this.x / 2);

        for (let x = 0; x < halfX; x++) {
            for (let y = 0; y < this.y; y++) {
                for (let z = 0; z < this.z; z++) {
                    this.swap(x, y, z, this.x - x - 1, y, z);
                }
            }
        }
    }

    // TODO: optimize this
    public rotateCCW(): void {
        const newData = Grid3MapHolder.initEmpty<T>(this.x, this.y, this.z);
        for (let x = 0; x < this.x; x++) {
            const newZ = this.x - x - 1;
            for (let z = 0; z < this.z; z++) {
                const newX = z;
                for (let y = 0; y < this.y; y++) {
                    newData.set(newX, y, newZ, this._data.get(x, y, z));
                }
            }
        }

        this._data.setHolder(newData);
    }

    // TODO: optimize this
    public rotateCW(): void {
        const newData = Grid3MapHolder.initEmpty<T>(this.x, this.y, this.z);
        for (let x = 0; x < this.x; x++) {
            const newZ = x;
            for (let z = 0; z < this.z; z++) {
                const newX = this.z - z - 1;
                for (let y = 0; y < this.y; y++) {
                    newData.set(newX, y, newZ, this._data.get(x, y, z));
                }
            }
        }

        this._data.setHolder(newData);
    }

    public mirrorXZ(): void {
        const halfY = Math.floor(this.y / 2);

        for (let x = 0; x < this.x; x++) {
            for (let y = 0; y < halfY; y++) {
                for (let z = 0; z < this.z; z++) {
                    this.swap(x, y, z, x, this.y - y - 1, z);
                }
            }
        }
    }

    public mirrorXY(): void {
        const halfZ = Math.floor(this.z / 2);

        for (let x = 0; x < this.x; x++) {
            for (let y = 0; y < this.y; y++) {
                for (let z = 0; z < halfZ; z++) {
                    this.swap(x, y, z, x, y, this.z - z - 1);
                }
            }
        }
    }

    public drawLine(
        relX1: number,
        relY1: number,
        relZ1: number,
        relX2: number,
        relY2: number,
        relZ2: number,
        provider: (x: number, y: number, z: number) => T,
    ): void {
        // Bresenham-3D algorithm for drawing lines:
        const dx = Math.abs(relX2 - relX1);
        const dy = Math.abs(relY2 - relY1);
        const dz = Math.abs(relZ2 - relZ1);
        const sx = (relX1 < relX2) ? 1 : -1;
        const sy = (relY1 < relY2) ? 1 : -1;
        const sz = (relZ1 < relZ2) ? 1 : -1;

        if (dx >= Math.max(dy, dz)) {
            let yd = dy - dx / 2;
            let zd = dz - dx / 2;

            for (;;) {
                this.setRelativeBlock(relX1, relY1, relZ1, provider(relX1, relY1, relZ1));

                if (relX1 === relX2) {
                    break;
                }

                if (yd >= 0) {
                    relY1 += sy;
                    yd -= dx;
                }

                if (zd >= 0) {
                    relZ1 += sz;
                    zd -= dx;
                }

                // move along x
                relX1 += sx;
                yd += dy;
                zd += dz;
            }
        } else if (dy >= Math.max(dx, dz)) {
            let xd = dx - dy / 2;
            let zd = dz - dy / 2;

            for (;;) {
                this.setRelativeBlock(relX1, relY1, relZ1, provider(relX1, relY1, relZ1));

                if (relY1 === relY2) {
                    break;
                }

                if (xd >= 0) {
                    relX1 += sx;
                    xd -= dy;
                }

                if (zd >= 0) {
                    relZ1 += sz;
                    zd -= dy;
                }

                // move along y
                relY1 += sy;
                xd += dx;
                zd += dz;
            }
        } else {
            // z dominant
            console.assert(dz >= Math.max(dx, dy));
            let xd = dx - dz / 2;
            let yd = dy - dz / 2;

            for (;;) {
                this.setRelativeBlock(relX1, relY1, relZ1, provider(relX1, relY1, relZ1));

                if (relZ1 === relZ2) {
                    break;
                }

                if (xd >= 0) {
                    relX1 += sx;
                    xd -= dz;
                }

                if (yd >= 0) {
                    relY1 += sy;
                    yd -= dz;
                }

                // move along z
                relZ1 += sz;
                xd += dx;
                yd += dy;
            }
        } // if (which dimension is dominant)
    }

    public isRelativePointInside(x: number, y: number, z: number): boolean {
        return x >= 0 && x < this.x &&
            y >= 0 && y < this.y &&
            z >= 0 && z < this.z;
    }

    public isPointInside(x: number, y: number, z: number): boolean {
        return x >= this._origin.x && x < this._origin.x + this.x &&
            y >= this._origin.y && y < this._origin.y + this.y &&
            z >= this._origin.z && z < this._origin.z + this.z;
    }
}
