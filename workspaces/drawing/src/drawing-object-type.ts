export const DrawingObjectType = {
    RECTANGLE: "RECTANGLE",
    TEXT: "TEXT",
    ARC: "ARC",
    CIRCLE: "CIRCLE",
    ELLIPSE: "ELLIPSE",
    POLYLINE: "POLYLINE",
    POLYGON: "POLYGON",
    PATH: "PATH",
};
export type DrawingObjectType = (typeof DrawingObjectType)[keyof typeof DrawingObjectType];
