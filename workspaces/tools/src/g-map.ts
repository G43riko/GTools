import { getValueFromProvider, type ValueProvider } from "@g43/core";

/**
 * An extended Map class with additional utility methods for common operations.
 *
 * @template T - The type of keys in the map
 * @template S - The type of values in the map
 * @extends {Map<T, S>}
 */
export class GMap<Key, Value> extends Map<Key, Value> {
    /**
     * Retrieves the value associated with the specified key from the map.
     * If the key doesn't exist, returns either undefined or the provided default value.
     *
     * @param {T} key - The key to look up in the map
     * @returns {S | undefined} The value associated with the key, or undefined if the key doesn't exist
     */
    public override get(key: Key): Value | undefined;
    /**
     * Retrieves the value associated with the specified key from the map.
     * If the key doesn't exist, returns the provided default value.
     *
     * @param {T} key - The key to look up in the map
     * @param {S} defaultValue - The value to return if the key doesn't exist
     * @returns {S} The value associated with the key, or the default value if the key doesn't exist
     */
    public override get(key: Key, defaultValue: Value): Value;
    public override get(key: Key, defaultValue?: Value): Value | undefined {
        return super.get(key) ?? defaultValue;
    }

    /**
     * Retrieves the value associated with the specified key from the map.
     * Throws an error if the key doesn't exist.
     *
     * @param {T} key - The key to look up in the map
     * @returns {S} The value associated with the key
     * @throws {Error} If the key doesn't exist in the map
     */
    public require(key: Key): Value {
        const result = super.get(key);
        if (typeof result === "undefined") {
            throw new Error(`Required key ${String(key)} not found in map`);
        }

        return result;
    }

    /**
     * Executes the provided callback function once for each value in the map.
     *
     * @param {(value: S) => void} callback - Function to execute for each value
     */
    public forEachValue(callback: (value: Value) => void): void {
        const keys = this.values();
        let curr = keys.next();
        while (!curr.done) {
            callback(curr.value);
            curr = keys.next();
        }
    }

    /**
     * Executes the provided callback function once for each key in the map.
     *
     * @param {(key: T) => void} callback - Function to execute for each key
     */
    public forEachKey(callback: (key: Key) => void): void {
        const keys = this.keys();
        let curr = keys.next();
        while (!curr.done) {
            callback(curr.value);
            curr = keys.next();
        }
    }

    /**
     * Adds a key-value pair to the map only if the key doesn't already exist.
     * The value can be provided directly or via a function.
     *
     * @param {T} key - The key to add to the map
     * @param {ValueProvider<S>} value - The value to associate with the key, or a function that returns the value
     */
    public addIfMissing(key: Key, value: ValueProvider<Value>): void {
        if (!this.has(key)) {
            this.set(key, getValueFromProvider(value));
        }
    }

    /**
     * Retrieves the value for the specified key if it exists.
     * If the key doesn't exist, creates a new entry with the provided default value and returns it.
     *
     * @param {T} key - The key to look up or create in the map
     * @param {ValueProvider<S>} defaultValue - The default value to use if the key doesn't exist,
     *                                         or a function that returns the default value
     * @returns {S} The existing value or the newly created value
     */
    public getOrCreate(key: Key, defaultValue: ValueProvider<Value>): Value {
        const result = super.get(key);
        if (result) {
            return result;
        }

        const newValue = getValueFromProvider(defaultValue);
        this.set(key, newValue);

        return newValue;
    }

    /**
     * Updates an existing item or inserts a new one if the key doesn't exist.
     * If the key exists, the update callback is used to modify the existing value.
     * If the key doesn't exist, the createCallback is used to generate a new value.
     *
     * @param {T} key - The key to update or insert in the map
     * @param {(item: S) => S} updateCallback - Function to transform the existing value if the key exists
     * @param {ValueProvider<S>} createCallback - Function that returns a new value, or a direct value to use if the key doesn't exist
     * @returns {S} The updated or newly created value
     */
    public upsert(key: Key, updateCallback: (item: Value) => Value, createCallback: ValueProvider<Value>): Value {
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
    /**
     * Sets multiple key-value pairs on the instance using either a `Map` or a plain object (`Record`).
     *
     * If a `Map` is provided, all entries from the map are added using the `set` method.
     * If a `Record` is provided, its entries are iterated and added similarly.
     *
     * @remarks
     * This method allows chaining by returning `this`.
     * Keys are type-constrained to `Key & keyof unknown` to allow both strings and other key types.
     *
     * @param map - A `Map` or a `Record` containing key-value pairs to set on the instance.
     *
     * @returns The current instance to allow method chaining.
     */
    public setAll(map: Map<Key, Value> | Record<Key & keyof unknown, Value>): this {
        if (map instanceof Map) {
            map.forEach((value, key) => this.set(key, value));
        } else {
            Object.entries(map).forEach(([key, value]) => this.set(key as Key, value as Value));
        }

        return this;
    }
}
