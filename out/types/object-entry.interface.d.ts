import { KeyValue } from "./key-value.interface";
export interface ObjectEntry<T, E extends keyof T = keyof T, S extends T[E] = T[E]> extends KeyValue<E, S> {
}
