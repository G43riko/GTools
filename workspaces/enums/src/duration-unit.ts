export const DurationUnit = {
    MS: "MS", // Millisecond
    S: "S", // Second
    M: "M", // Minute
    H: "H", // Hour
    D: "D", // Day
    W: "W", // Week
    Y: "Y", // Year (365 days, no leap year handling)
};
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit];
