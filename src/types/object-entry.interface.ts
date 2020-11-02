import { KeyValue } from "./key-value.interface";

export type ObjectEntry<T, E extends keyof T = keyof T, S extends T[E] = T[E]> = KeyValue<E, S>
