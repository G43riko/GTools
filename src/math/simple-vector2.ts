export interface SimpleVector2 {
    x: number;
    y: number;
}

export type ReadonlySimpleVector2 = Readonly<SimpleVector2>;

export const SimpleVector2 = Object.freeze({
    UP   : Object.freeze({x: 0, y: 1}) as ReadonlySimpleVector2,
    RIGHT: Object.freeze({x: 1, y: 0}) as ReadonlySimpleVector2,
    ONE  : Object.freeze({x: 1, y: 1}) as ReadonlySimpleVector2,
    ZERO : Object.freeze({x: 0, y: 0}) as ReadonlySimpleVector2,
});
