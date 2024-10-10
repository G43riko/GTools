export enum CardinalDirection {
    EAST       = "EAST",
    WEST       = "WEST",
    NORTH      = "NORTH",
    SOUTH      = "SOUTH",
    NORTH_WEST = "NORTH_WEST",
    NORTH_EAST = "NORTH_EAST",
    SOUTH_WEST = "SOUTH_WEST",
    SOUTH_EAST = "SOUTH_EAST",
}

export const CardinalDirections = Object.values(CardinalDirection);

const pi2 = Math.PI / 2;
const pi4 = Math.PI / 4;

export function UnitCoordinatesToDirection(x: 0 | 1, z: 0 | 1, eight = false): CardinalDirection {
    if (eight) {
        if (x === 0 && z === 0) {
            return CardinalDirection.SOUTH_WEST;
        }
        if (x === 1 && z === 0) {
            return CardinalDirection.NORTH_WEST;
        }
        if (x === 0 && z === 1) {
            return CardinalDirection.SOUTH_EAST;
        }
        if (x === 1 && z === 1) {
            return CardinalDirection.NORTH_EAST;
        }
    }
    if (x === 0) {
        return CardinalDirection.WEST;
    }
    if (x === 1) {
        return CardinalDirection.EAST;
    }
    if (z === 0) {
        return CardinalDirection.SOUTH;
    }
    if (z === 1) {
        return CardinalDirection.NORTH;
    }

    throw new Error(`Invalid parameters [${x}, ${z}]`);
}

export function CardinalDirectionToAngle(direction: CardinalDirection): number {
    switch (direction) {
        case CardinalDirection.NORTH:
            return 0;
        case CardinalDirection.NORTH_EAST:
            return pi4;
        case CardinalDirection.NORTH_WEST:
            return -pi4;
        case CardinalDirection.EAST:
            return pi2;
        case CardinalDirection.SOUTH:
            return Math.PI;
        case CardinalDirection.SOUTH_WEST:
            return Math.PI + pi4;
        case CardinalDirection.SOUTH_EAST:
            return Math.PI - pi4;
        default:
            return -pi2;
    }
}

export function LatitudeToCardinalDirection4(lat: number): CardinalDirection {
    const latModule = (lat + 45) % 360;
    const realLat   = latModule < 0 ? latModule + 360 : latModule;
    if (realLat < 90) {
        return CardinalDirection.SOUTH;
    }
    if (realLat < 180) {
        return CardinalDirection.EAST;
    }
    if (realLat < 270) {
        return CardinalDirection.NORTH;
    }

    return CardinalDirection.WEST;
}
