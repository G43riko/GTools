export const HexDirection = {
    R_N: "R_N",
    S_P: "S_P",
    Q_N: "Q_N",
    R_P: "R_P",
    S_N: "S_N",
    Q_P: "Q_P",
};
type HexDirection = (typeof HexDirection)[keyof typeof HexDirection];

export const HexDirections = Object.freeze(Object.values(HexDirection));
export const HexDirectionsReverse = Object.freeze(HexDirections.toReversed());
