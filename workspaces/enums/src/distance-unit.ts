export const DistanceUnit = {
    MM: "MM", // millimeter
    CM: "CM", // centimeter
    M: "M", // meter
    KM: "KM", // kilometer
    IN: "IN", // inch
    FT: "FT", // foot
    YD: "YD", // yard
    MI: "MI", // mile
    NM: "NM", // nautical mile
    FL: "FL", // furlong
    LY: "LY", // light-year
    AU: "AU", // astronomical unit
    PC: "PC", // parsec
};

export type DistanceUnit = (typeof DistanceUnit)[keyof typeof DistanceUnit];

export const DistanceUnitGroups = {
    metric: [DistanceUnit.MM, DistanceUnit.CM, DistanceUnit.M, DistanceUnit.KM],
    imperial: [
        DistanceUnit.IN,
        DistanceUnit.FT,
        DistanceUnit.YD,
        DistanceUnit.MI,
        DistanceUnit.FL,
    ],
    nautical: [DistanceUnit.NM],
    astronomical: [DistanceUnit.LY, DistanceUnit.AU, DistanceUnit.PC],
};
