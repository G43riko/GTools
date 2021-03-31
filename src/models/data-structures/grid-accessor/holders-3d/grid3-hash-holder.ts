import { hash3Numbers } from "../../../../utils/math-utils";
import { Grid3Holder } from "./grid3-holder";

export class Grid3HashHolder<T> implements Grid3Holder<T> {
    private readonly values: { [key: number]: { value: T, x: number, y: number, z: number } } = {};

    public get(x: number, y: number, z: number): T {
        return this.values[hash3Numbers(x, y, z)]?.value;
    }

    public set(x: number, y: number, z: number, value: T): void {
        this.values[hash3Numbers(x, y, z)] = {value, x, y, z};
    }

    public forEach(callback: (value: T, x: number, y: number, z: number) => void): void {
        Object.values(this.values).forEach((item) => (callback(item.value, item.x, item.y, item.z)));
    }
}
