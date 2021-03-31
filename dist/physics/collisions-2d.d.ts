export declare function circleRect2dCollision(cPosX: number, cPosY: number, cRadius: number, rPosX: number, rPosY: number, rSizeX: number, rSizeY: number): boolean;
export declare function lineRectangle2dCollision(aStartX: number, aStartY: number, aEndX: number, aEndY: number, bPosX: number, bPosY: number, bSizeX: number, bSizeY: number): boolean;
export declare function lineLine2dCollision(aStartX: number, aStartY: number, aEndX: number, aEndY: number, bStartX: number, bStartY: number, bEndX: number, bEndY: number): boolean;
/**
 * @returns true if the line from (a,b)->(c,d) lineLine2dIntersect with (p,q)->(r,s)
 */
export declare function lineLine2dCollision2(a: number, b: number, c: number, d: number, p: number, q: number, r: number, s: number): boolean;
export declare function rectRect2dCollision(ax: number, ay: number, aw: number, ah: number, bx: number, by: number, bw: number, bh: number): boolean;
export declare function circleCircle2dCollision(aX: number, aY: number, aRadius: number, bX: number, bY: number, bRadius: number): boolean;
export declare function pointRect2dCollision(pointX: number, pointY: number, rectX: number, rectY: number, rectW: number, rectH: number): boolean;
export declare function pointRectMinMax2dCollision(pointX: number, pointY: number, minX: number, minY: number, maxX: number, maxY: number): boolean;
export declare function pointCircle2dCollision(pointX: number, pointY: number, circleX: number, circleY: number, circleRadius: number): boolean;
export declare function pointPolygon2dCollision2(x: number, y: number, vs: [number, number][]): boolean;
export declare function pointMultiPolygon2dCollision(pointX: number, pointY: number, polys: [number, number][][], ignoreBoundary?: boolean): boolean;
/**
 * pointPolygon2dCollision
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */
export declare function pointPolygon2dCollision(pt: number[], ring: number[][], ignoreBoundary: boolean): boolean;
//# sourceMappingURL=collisions-2d.d.ts.map