import { getValueFromProvider, ValueProvider } from "../models";

export class GMap<T, S> extends Map<T, S> {
    public get(key: T, defaultValue?: S): S | undefined {
        return super.get(key) || defaultValue;
    }

    public getOrCreate(key: T, defaultValue: ValueProvider<S>): S | undefined {
        const result = super.get(key);
        if (result) {
            return result;
        }

        const newValue = getValueFromProvider(defaultValue);
        this.set(key, newValue);

        return newValue;
    }
}
