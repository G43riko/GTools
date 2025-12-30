
export interface Observer<T> {
    notify(message: T): void;
}
export type Listener<T> = (message: T) => void;
