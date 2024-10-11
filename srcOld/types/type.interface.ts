export interface Type<T = Record<string, unknown>> {
    name?: string;

    new (...args: any[]): T;
}
