import { getNestedProperty } from "@g43/utils";

export function createFilter<
    ITEM,
    CUSTOM_FILTERS extends Record<string, (item: ITEM) => boolean>,
    CUSTOM_FILTER_VALUE_MAPPERS extends Record<string, (key: string) => unknown>,
>(
    search?: string,
    customFilters = {} as CUSTOM_FILTERS,
    customFilterValueMappers = {} as CUSTOM_FILTER_VALUE_MAPPERS,
): (item: ITEM) => boolean {
    if (!search) {
        return () => true;
    }
    const VALID_OPERATORS = ["EQ", "==", "<", "LT", "GT", ">"];
    const NUMERIC_OPERATORS = ["GT", "LT", "GET", "LET", "<", ">"];
    const mapValue = (key: string, operator: string, value: string): unknown => {
        const customMapper = customFilterValueMappers[key];
        if (customMapper) {
            return customMapper(value);
        }
        if (NUMERIC_OPERATORS.includes(operator)) {
            const numberValue = +value;
            if (isNaN(numberValue)) {
                throw new Error(`Invalid value for '${key}': ${value}`);
            }
            return numberValue;
        }
        return value;
    };
    const filters = search.split(",").map((filter) => {
        const splitFilter = filter.split(":");
        if (splitFilter.length === 1) {
            const key = splitFilter[0];
            if (!customFilters[key]) {
                throw new Error(`'${key}' is not a custom filter`);
            }
            return {
                key,
                operator: "ENUM",
            };
        } else if (splitFilter.length === 2) {
            return {
                key: splitFilter[0],
                operator: "EQ",
                value: mapValue(splitFilter[0], "EQ", splitFilter[1]),
            };
        } else if (splitFilter.length === 3) {
            const operator = splitFilter[1].toUpperCase();
            if (!VALID_OPERATORS.includes(operator)) {
                throw new Error(`Invalid operator '${operator}'`);
            }
            return {
                operator,
                key: splitFilter[0],
                value: mapValue(splitFilter[0], operator, splitFilter[2]),
            };
        }

        throw new Error(`Invalid filter: '${filter}'`);
    });
    return (item) => {
        for (const filter of filters) {
            if (filter.operator === "ENUM") {
                const customFilter = customFilters[filter.key];
                if (!customFilter(item)) {
                    return false;
                }
                return true;
            }
            const rawValue = getNestedProperty(item, filter.key);
            if (filter.operator === "EQ" || filter.operator === "==") {
                const value = rawValue;
                if (String(value ?? "").toLowerCase() !== filter.value) {
                    return false;
                }
                return true;
            }

            if (filter.operator === "LT" || filter.operator === "<") {
                // TODO: value is probable number
                const value = +rawValue;
                if (isNaN(value)) {
                    return false;
                }
                if (filter.value as number <= value) {
                    return false;
                }
                return true;
            }
            if (filter.operator === "GT" || filter.operator === ">") {
                // TODO: value is probable number
                const value = +rawValue;
                if (isNaN(value)) {
                    return false;
                }
                if (filter.value as number >= value) {
                    return false;
                }
                return true;
            }
            throw new Error(`Unhandled operator '${filter.operator}'`);
        }

        return true;
    };
}

export function filterItemsString<
    ITEM,
    CUSTOM_FILTERS extends Record<string, (item: ITEM) => boolean>,
    CUSTOM_FILTER_VALUE_MAPPERS extends Record<string, (key: string) => unknown>,
>(
    items: readonly ITEM[],
    search?: string,
    customFilters = {} as CUSTOM_FILTERS,
    customFilterValueMappers = {} as CUSTOM_FILTER_VALUE_MAPPERS,
): ITEM[] {
    if (!search) {
        return [...items];
    }
    const filter = createFilter<ITEM, CUSTOM_FILTERS, CUSTOM_FILTER_VALUE_MAPPERS>(
        search,
        customFilters,
        customFilterValueMappers,
    );

    return items.filter(filter);
}
