import type { Listener, Observer } from "./observable-types.ts";

/**
 * Single event Observable
 */
export class Observable<T> {
    readonly #observers: Observer<T>[] = [];
    readonly #subscriptions: Listener<T>[] = [];

    public register(observer: Observer<T>): () => void {
        this.#observers.push(observer);

        return () => this.unregister(observer);
    }

    public subscribe(func: Listener<T>): () => void {
        this.#subscriptions.push(func);

        return () => this.unsubscribe(func);
    }

    public unregister(observer: Observer<T>): void {
        const i = this.#observers.indexOf(observer);
        if (i !== -1) {
            this.#observers.splice(i, 1);
        }
    }

    public unsubscribe(func: Listener<T>): void {
        const i = this.#subscriptions.indexOf(func);
        if (i !== -1) {
            this.#subscriptions.splice(i, 1);
        }
    }

    public notifyAll(message: T): void {
        const observers = this.#observers;
        for (let i = 0; i < observers.length; i++) {
            observers[i].notify(message);
        }
        const subscriptions = this.#subscriptions;
        for (let i = 0; i < subscriptions.length; i++) {
            subscriptions[i](message);
        }
    }

    public clear(): void {
        this.#observers.length = 0;
        this.#subscriptions.length = 0;
    }
}
