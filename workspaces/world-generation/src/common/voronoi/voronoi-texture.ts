import { Random } from "@g43/tools";
import type { ReadonlySimpleVector2 } from "@g43/types";
import type { VoronoiData } from "./voronoi-data.ts";

export class VoronoiTexture {
    /**
     * 
     * @param width 
     * @param height 
     * @param numPoints 
     * @param seed 
     * @returns 
     */
    public static generateVoronoiData(
        width = 512,
        height = 256,
        numPoints = 25,
        seed = Math.random(),
    ): VoronoiData {
        const points = new Array<{ dist: number, index: number }>(width * height);

        // create random points
        const random = new Random(seed);
        const centers = Array.from({ length: numPoints }, () => ({
            x: Math.round(random.nextFloat() * width),
            y: Math.round(random.nextFloat() * height),
            angle: random.nextFloat() * 360,
        }));

        let maxDist = 0;


        // Check distance with all other points
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                let dist = 0;
                let dist2 = 0;
                let firstPoint = 0;
                let curMinDist = width * height;
                let index = -1;
                for (let i = 0; i < centers.length; i++) {
                    let xDist = Math.abs(centers[i].x - x);
                    let yDist = Math.abs(centers[i].y - y);

                    // for seamless tiling
                    if (xDist > width / 2) {
                        xDist = width - xDist;
                    }
                    if (yDist > height / 2) {
                        yDist = height - yDist;
                    }
                    dist = Math.sqrt(xDist * xDist + yDist * yDist);

                    if (dist < curMinDist) {
                        firstPoint = i;
                        index = i;
                        curMinDist = dist;
                    }
                }
                let curMinDist2 = width * height;

                for (let i = 0; i < centers.length; i++) {
                    if (i !== firstPoint) {
                        let xDist = Math.abs(centers[i].x - x);
                        let yDist = Math.abs(centers[i].y - y);

                        // for seamless tiling
                        if (xDist > width / 2) {
                            xDist = width - xDist;
                        }
                        if (yDist > height / 2) {
                            yDist = height - yDist;
                        }

                        dist2 = Math.sqrt(xDist * xDist + yDist * yDist);

                        if (dist2 < curMinDist2) {
                            curMinDist2 = dist2;
                        }
                    }
                }

                const result = Math.sqrt(curMinDist2 - curMinDist);
                points[y * width + x] = {
                    index,
                    dist: result,
                };

                if (result > maxDist) {
                    maxDist = result;
                }
            }
        }

        return { maxDist, points, numPoints, centers, size: { x: width, y: height } };
    }

    public static createIndexDataFromVoronoiData(
        data: VoronoiData,
    ): number[][] {
        const result = new Array<number[]>(data.size.x);
        for (let x = 0; x < data.size.x; x++) {
            const row = new Array<number>(data.size.y);
            for (let y = 0; y < data.size.y; y++) {
                const point = data.points[y * data.size.x + x];
                row[y] = point.index;
            }
            result[x] = row;
        }

        return result;
    }

    public static getCellVertices(data: VoronoiData, vertices: [center: ReadonlySimpleVector2, indices: number[]][]): Map<number, ReadonlySimpleVector2[]> {
        const vertexData = new Map<number, [position: ReadonlySimpleVector2, angle: number][]>();

        vertices.forEach(([vertex, indices]) => {
            indices.forEach((index) => {
                const item = vertexData.get(index);

                const center = data.centers[index];
                const angle = Math.atan2(center.y - vertex.y, center.x - vertex.x);
                if (item) {
                    return item.push([vertex, angle]);
                }
                vertexData.set(index, [[vertex, angle]]);
            });
        });

        const result = new Map<number, ReadonlySimpleVector2[]>();

        vertexData.forEach((v, index) => {
            const array = v.sort(([_a, a], [_b, b]) => a - b)
                .map(([p, _]) => p);

            result.set(index, array);
        });

        return result;
    }

    public static determineVerticesFromIndexData(data: number[][]): [center: ReadonlySimpleVector2, indices: number[]][] {
        const vertices: [ReadonlySimpleVector2, number[]][] = [];
        const set = new Set<number>();
        for (let x = 1; x < data.length; x++) {
            for (let y = 1; y < data[0].length; y++) {
                set.add(data[x][y]);
                set.add(data[x - 1][y]);
                set.add(data[x][y - 1]);
                set.add(data[x - 1][y - 1]);
                if (set.size > 2) {
                    vertices.push([{ x, y }, Array.from(set)]);
                }
                if (x === 1 || y === 1 || x + 1 === data.length || y + 1 === data[0].length) {
                    if (set.size > 1) {
                        vertices.push([{ x, y }, Array.from(set)]);
                    }
                }
                set.clear();
            }
        }

        return vertices;
    }
}
