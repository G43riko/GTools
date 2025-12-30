import { Observable } from "./observable.ts";
import type { Listener, Observer } from "./observable-types.ts";

export class ObservableNonReentrant<T> extends Observable<T> {
    #locked = false;

    #assertUnlocked(): void {
        if (this.#locked) {
            throw new Error(`[ObservableNonReentrant] Cannot modify during notify`);
        }
    }
    public override register(observer: Observer<T>): () => void {
        this.#assertUnlocked();
        return super.register(observer);
    }

    public override subscribe(func: Listener<T>): () => void {
        this.#assertUnlocked();
        return super.subscribe(func);
    }

    public override unregister(observer: Observer<T>): void {
        this.#assertUnlocked();
        return super.unregister(observer);
    }

    public override unsubscribe(func: Listener<T>): void {
        this.#assertUnlocked();
        return super.unsubscribe(func);
    }

    public override clear(): void {
        this.#assertUnlocked();
        super.clear();
    }
    public override notifyAll(message: T): void {
        if (this.#locked) {
            throw new Error(`[ObservableNonReentrant] Cannot call notifyAll in notifyAll`);
        }
        this.#locked = true;
        try {
            super.notifyAll(message);
        } finally {
            this.#locked = false;
        }
    }
}
