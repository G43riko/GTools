import { SimpleVector2 } from "gtools/math";
export interface Transform {
    readonly offset: Readonly<SimpleVector2>;
    readonly scale: number;
    readonly rotation: number;
}
export declare function getDefaultTransform(): Transform;
//# sourceMappingURL=transform.d.ts.map