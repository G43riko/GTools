export interface SimpleWrapper {
    key: string;
    count: number;
}

export class KeyValueCounter {
    private readonly data: { [key: string]: number } = {};
    private results: SimpleWrapper[] = [];
    private processed = false;

    public add(item: string): void {
        if (item in this.data) {
            this.data[item]++;
        } else {
            this.data[item] = 1;
        }
        if (this.processed) {
            this.processed = false;
        }
    }

    public addAll(items: readonly string[]): void {
        items.forEach((item) => {
            if (item in this.data) {
                this.data[item]++;
            } else {
                this.data[item] = 1;
            }
        });
        if (this.processed) {
            this.processed = false;
        }
    }

    public getAll(): readonly SimpleWrapper[] {
        if (!this.processed) {
            this.process();
        }

        return this.results;
    }

    public getTopN(count: number): readonly SimpleWrapper[] {
        if (!this.processed) {
            this.process();
        }

        return this.results.slice(0, count);
    }

    public get length(): number {
        return this.getAll().length;
    }

    /**
     * @deprecated use {@link length} instead
     */
    public getCount(): number {
        return this.getAll().length;
    }

    private process(): void {
        this.results = Object.entries(this.data).map(([key, count]) => ({ key, count }));

        this.results.sort((a, b) => b.count - a.count);
        this.processed = true;
    }
}
