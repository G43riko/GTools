export interface SimpleVector2 {
    x: number;
    y: number;
}

export type ReadonlySimpleVector2 = Readonly<SimpleVector2>;

export const SimpleVector2 = Object.freeze({
    UP            : Object.freeze<ReadonlySimpleVector2>({x: 0, y: 1}),
    RIGHT         : Object.freeze<ReadonlySimpleVector2>({x: 1, y: 0}),
    ONE           : Object.freeze<ReadonlySimpleVector2>({x: 1, y: 1}),
    ZERO          : Object.freeze<ReadonlySimpleVector2>({x: 0, y: 0}),
    from          : (vector: ReadonlySimpleVector2): SimpleVector2 => ({x: vector.x, y: vector.y}),
    fromReadonly  : (vector: ReadonlySimpleVector2): ReadonlySimpleVector2 => ({x: vector.x, y: vector.y}),
    create        : (x: number, y: number): SimpleVector2 => ({x, y}),
    createReadonly: (x: number, y: number): ReadonlySimpleVector2 => ({x, y}),
    assign(dest: SimpleVector2, source: ReadonlySimpleVector2): void {
        dest.x = source.x;
        dest.y = source.y;
    },
});
