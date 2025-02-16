export type PartiallyOptional<T, U extends keyof T> = Partial<Pick<T, U>> & Required<Omit<T, U>>;
export type PartiallyRequired<T, U extends keyof T> = Partial<Omit<T, U>> & Required<Pick<T, U>>;
