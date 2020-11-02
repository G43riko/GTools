export interface SimpleWrapper {
    key: string;
    count: number;
}

export class KeyValueCounter {
    private readonly data: { [key: string]: number } = {};
    private readonly results: SimpleWrapper[]        = [];
    private processed                                = false;

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

    public addAll(items: string[]): void {
        items.forEach(this.add, this);
    }

    public getAll(): SimpleWrapper[] {
        if (!this.processed) {
            this.process();
        }

        return this.results;
    }

    public getTopN(count: number): SimpleWrapper[] {
        if (!this.processed) {
            this.process();
        }

        return this.results.slice(0, count);
    }

    public getCount(): number {
        return this.getAll().length;
    }

    private process(): void {
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.results.push({
                    key,
                    count: this.data[key]
                });
            }
        }
        this.results.sort((a, b) => b.count - a.count);
        this.processed = true;
    }
}
