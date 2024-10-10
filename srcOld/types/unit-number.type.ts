export type UnitNumber<T extends string = string> = { unit: T; value: number } | string | null;

export function parseUnitNumberModel(rawData?: string): UnitNumber | null {
    if (!rawData) {
        return null;
    }
    const price = rawData.replace(/ /g, "").replace(/,/g, ".");
    const value = parseFloat(price);
    if (isNaN(value)) {
        return rawData;
    }

    return {
        value,
        unit: price.replace(/^[\d .]*/g, ""),
    };
}
