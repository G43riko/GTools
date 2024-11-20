import { getValueFromProvider, type ValueProvider } from "@g43/core";

export class GMap<T, S> extends Map<T, S> {
    public override get(key: T): S | undefined;
    public override get(key: T, defaultValue: S): S;
    public override get(key: T, defaultValue?: S): S | undefined {
        return super.get(key) ?? defaultValue;
    }

    public require(key: T): S {
        const result = super.get(key);
        if (typeof result === "undefined") {
            throw new Error(`Required key ${String(key)} not found in map`);
        }

        return result;
    }

    public forEachValue(callback: (key: S) => void): void {
        const keys = this.values();
        let curr = keys.next();
        while (!curr.done) {
            callback(curr.value);
            curr = keys.next();
        }
    }

    public forEachKey(callback: (key: T) => void): void {
        const keys = this.keys();
        let curr = keys.next();
        while (!curr.done) {
            callback(curr.value);
            curr = keys.next();
        }
    }

    public addIfMissing(key: T, value: ValueProvider<S>): void {
        if (!this.has(key)) {
            this.set(key, getValueFromProvider(value));
        }
    }

    public getOrCreate(key: T, defaultValue: ValueProvider<S>): S {
        const result = super.get(key);
        if (result) {
            return result;
        }

        const newValue = getValueFromProvider(defaultValue);
        this.set(key, newValue);

        return newValue;
    }

    public upsert(key: T, updateCallback: (item: S) => S, createCallback: ValueProvider<S>): S {
        const existingItem = this.get(key);

        if (existingItem) {
            const updatedItem = updateCallback(existingItem);
            this.set(key, updatedItem);

            return updatedItem;
        }

        const newItem = getValueFromProvider(createCallback);
        this.set(key, newItem);

        return newItem;
    }
}
