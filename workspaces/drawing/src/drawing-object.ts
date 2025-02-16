import type { DrawingObjectType } from "./drawing-object-type.ts";

export interface DrawingObject {
    readonly type: DrawingObjectType;
}
