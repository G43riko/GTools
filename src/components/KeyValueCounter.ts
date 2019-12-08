import { ArrayUtils } from "../utils/ArrayUtils";

export interface SimpleWrapper {
    key: string;
    count: number;
}

export class KeyValueCounter {
    private readonly data: any = {};
    private readonly results: SimpleWrapper[] = [];
    private processed = false;

    public add(item: any): void {
        if (this.data[item]) {
            this.data[item]++;
        }
        else {
            this.data[item] = 1;
        }
        if (this.processed) {
            this.processed = false;
        }
    }

    public addAll(items: any[]): void {
        items.forEach(this.add, this);
    }

    public getAll(): SimpleWrapper[] {
        return this.results;
    }

    public getTopN(count: number): SimpleWrapper[] {
        if (!this.processed) {
            this.process();
        }

        return ArrayUtils.subArray(this.results, 0, count);
    }

    public getCount(): number {
        return this.results.length;
    }

    private process(): void {
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.results.push({key, count: this.data[key]});
            }
        }
        this.results.sort((a, b) => b.count - a.count);
        this.processed = true;
    }
}
