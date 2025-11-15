import { getNestedProperty } from "@g43/utils";
import { getNestedPropertyArray } from "./object-utils.ts";

const VALID_OPERATORS = ["EQ", "==", "<", "LT", "GT", ">", "TO", "TYPEOF"];
const NUMERIC_OPERATORS = ["GT", "LT", "GET", "LET", "<", ">"];
// & - every
// ~ - none
// * - some
const MatchCharacter = {
    EVERY: "&",
    NONE: "!",
    SOME: "*",
};
const DEFAULT_MATCH_CHARACTER = MatchCharacter.EVERY;
export type MatchCharacter = (typeof MatchCharacter)[keyof typeof MatchCharacter];
const MatchCharacters = Object.values(MatchCharacter);

const STARTING_MATCH_CHARACTER = new RegExp(`^[${MatchCharacters.join("")}]`);
type typeofValue =
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "symbol"
    | "undefined"
    | "object"
    | "function";
const TYPEOF_VALUES = [
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
    "object",
    "function",
];
interface Condition {
    readonly operator: string;
    readonly key: string;
    readonly value?: unknown;
    /**
     * @default os "ALL" (DEFAULT_MATCH_CHARACTER)
     */
    readonly match: MatchCharacter;
}
function testCondition(condition: Condition, rawValue: string): boolean {
    if (condition.operator === "EQ" || condition.operator === "==") {
        const value = rawValue;
        if (String(value ?? "").toLowerCase() !== condition.value) {
            return false;
        }
        return true;
    }

    if (condition.operator === "LT" || condition.operator === "<") {
        // TODO: value is probable number
        const value = +rawValue;
        if (isNaN(value)) {
            return false;
        }
        if ((condition.value as number) <= value) {
            return false;
        }
        return true;
    }
    if (condition.operator === "GT" || condition.operator === ">") {
        // TODO: value is probable number
        const value = +rawValue;
        if (isNaN(value)) {
            return false;
        }
        if ((condition.value as number) >= value) {
            return false;
        }
        return true;
    }
    if (condition.operator === "TO" || condition.operator === "TYPEOF") {
        // deno-lint-ignore valid-typeof
        return typeof rawValue !== (condition.value as typeofValue);
    }

    throw new Error(`Unhandled operator '${condition.operator}'`);
}

function parseCondition<ITEM>(
    filter: string,
    customFilters: Record<string, (item: ITEM) => boolean>,
    customFilterValueMappers: Record<string, (key: string) => unknown>,
): Condition {
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
    const splitFilter = filter.split(":");
    const key = splitFilter[0];
    if (splitFilter.length === 1) {
        if (!customFilters[key]) {
            throw new Error(`'${key}' is not a custom filter`);
        }
        return {
            key,
            operator: "ENUM",
            match: DEFAULT_MATCH_CHARACTER,
        };
    } else if (splitFilter.length === 2) {
        return {
            key,
            operator: "EQ",
            match: DEFAULT_MATCH_CHARACTER,
            value: mapValue(key, "EQ", splitFilter[1]),
        };
    } else if (splitFilter.length === 3) {
        const extractOperator = (
            rawOperator: string,
        ): Pick<Required<Condition>, "operator" | "match"> => {
            if (STARTING_MATCH_CHARACTER.test(rawOperator)) {
                const [matchOperator, ...operator] = rawOperator;

                return {
                    match: matchOperator,
                    operator: operator.join(""),
                };
            }

            return { operator: rawOperator, match: MatchCharacter.EVERY };
        };
        const { operator, match } = extractOperator(splitFilter[1].toUpperCase());
        if (!VALID_OPERATORS.includes(operator)) {
            throw new Error(`Invalid operator '${operator}'`);
        }
        const value = splitFilter[2];
        if (operator === "TO" || operator === "TYPEOF") {
            if (!TYPEOF_VALUES.includes(value)) {
                throw new Error(
                    `Invalid value, available values: ${TYPEOF_VALUES.join(", ")}`,
                );
            }
        }

        return {
            operator,
            key,
            match,
            value: mapValue(key, operator, value),
        };
    }

    throw new Error(`Invalid filter: '${filter}'`);
}
/**
 * @param items
 * @param search
 * @param customFilters
 * @param customFilterValueMappers
 * @returns
 *
 * @example
 * ```ts ignore
 *
 * createFilter("persons.*.age:>:23")
 * ```
 */
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
    const conditions = search
        .split(",")
        .map((rawCondition) => parseCondition(rawCondition, customFilters, customFilterValueMappers));
    return (item) => {
        for (const condition of conditions) {
            if (condition.operator === "ENUM") {
                const customFilter = customFilters[condition.key];
                if (!customFilter(item)) {
                    return false;
                }
                return true;
            }

            if (condition.key.includes(".*.")) {
                const rawValues = getNestedPropertyArray(item, condition.key);
                if (Array.isArray(rawValues)) {
                    const matches = rawValues.map((rawValue) => testCondition(condition, rawValue)).filter(Boolean);

                    switch (condition.match) {
                        case MatchCharacter.NONE:
                            return matches.length === 0;
                        case MatchCharacter.SOME:
                            return matches.length > 0;
                        case MatchCharacter.EVERY:
                            return matches.length === rawValues.length;
                        default:
                            throw new Error(`Invalid match character '${condition.match}'`);
                    }
                }
            }
            const rawValue = getNestedProperty(item, condition.key);
            return testCondition(condition, rawValue);
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
    const filter = createFilter<
        ITEM,
        CUSTOM_FILTERS,
        CUSTOM_FILTER_VALUE_MAPPERS
    >(search, customFilters, customFilterValueMappers);

    return items.filter(filter);
}
