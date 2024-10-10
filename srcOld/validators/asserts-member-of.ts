import { ValueOf } from "../types";

export function assertMemberOf<T>(item: any, items: T, name: string): asserts item is ValueOf<T> {
    if (item in items) {
        return;
    }

    console.warn(`invalid ${name} '${item}'`);
}
