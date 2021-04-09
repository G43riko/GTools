import { SimpleVector2 } from "gtools/math";
export interface Transform2D {
    readonly offset: Readonly<SimpleVector2>;
    readonly scale: number;
    readonly rotation: number;
}
export declare function getDefaultTransform2D(): Transform2D;
//# sourceMappingURL=transform-2d.d.ts.map