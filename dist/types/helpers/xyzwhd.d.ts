import { ReadonlySimpleVector3, SimpleVector3 } from "gtools/math";
export interface XYZWHD extends SimpleVector3 {
    w: number;
    h: number;
    d: number;
}
export interface ReadonlyXYZWHD extends ReadonlySimpleVector3 {
    readonly w: number;
    readonly h: number;
    readonly d: number;
}
//# sourceMappingURL=xyzwhd.d.ts.map