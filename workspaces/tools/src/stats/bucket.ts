export interface BucketOptions {
    readonly min: number;
    readonly max: number;
    readonly outliers: "ERROR" | "IGNORE";
}
export class Bucket {
    readonly #values = new Array<number>();
    readonly #options: BucketOptions;

    public static createKeyMapper(
        bucket: Bucket,
        valueMapper: (value: number) => string = (value: number) => value.toFixed(2),
    ): (index: unknown) => string {
        const step = bucket.calculateStep();

        return (index) =>
            `${valueMapper(bucket.#options.min + Number(index) * step)}-${
                valueMapper(bucket.#options.min + Number(index) * step + step)
            }`;
    }
    public constructor(
        buckets = 10,
        options: Partial<BucketOptions> = {},
    ) {
        this.#options = {
            outliers: "ERROR",
            min: 0,
            max: 1,
            ...options,
        };
        this.#values.length = buckets;
        this.#values.fill(0);
    }

    private calculateStep(): number {
        const range = this.#options.max - this.#options.min;

        return range / this.#values.length;
    }

    private checkOutlier(value: number): boolean {
        if (value < this.#options.min) {
            if (this.#options.outliers === "IGNORE") {
                return true;
            }
            throw new Error(`Value ${value} is lower than min value ${this.#options.min}`);
        }

        if (value > this.#options.max) {
            if (this.#options.outliers === "IGNORE") {
                return true;
            }
            throw new Error(`Value ${value} is greater than max value ${this.#options.max}`);
        }

        return false;
    }
    private calculateBucketIndexValue(value: number): number {
        const step = this.calculateStep();
        // Clamp max to last bucket
        if (value === this.#options.max) {
            return this.#values.length - 1;
        }
        const index = Math.floor((value - this.#options.min) / step);
        if (index < 0 || index >= this.#values.length) {
            throw new Error(`Invalid bucket index: ${index} for value ${value}`);
        }
        return index;
    }

    public add(value: number): void {
        const isOutlier = this.checkOutlier(value);
        if (isOutlier) {
            return;
        }
        const index = this.calculateBucketIndexValue(value);
        this.#values[index]++;
    }

    public getMap(): Record<string, number> {
        return Object.fromEntries(
            this.#values.map((value, index) => [index, value]),
        );
    }
}
