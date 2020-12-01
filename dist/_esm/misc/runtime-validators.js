export const getAsString = (key) => {
    if (typeof key !== "string") {
        throw new Error(`Variable with value ${key} is not a string`);
    }
    return key;
};
export const getAsNumber = (key) => {
    if (typeof key !== "number") {
        throw new Error(`Variable with value ${key} is not a number`);
    }
    return key;
};
//# sourceMappingURL=runtime-validators.js.map