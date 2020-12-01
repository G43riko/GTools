export class KeyValueCounter {
    constructor() {
        this.data = {};
        this.results = [];
        this.processed = false;
    }
    add(item) {
        if (item in this.data) {
            this.data[item]++;
        }
        else {
            this.data[item] = 1;
        }
        if (this.processed) {
            this.processed = false;
        }
    }
    addAll(items) {
        items.forEach(this.add, this);
    }
    getAll() {
        if (!this.processed) {
            this.process();
        }
        return this.results;
    }
    getTopN(count) {
        if (!this.processed) {
            this.process();
        }
        return this.results.slice(0, count);
    }
    getCount() {
        return this.getAll().length;
    }
    process() {
        for (const key in this.data) {
            if (!this.data.hasOwnProperty(key)) {
                continue;
            }
            this.results.push({
                key,
                count: this.data[key],
            });
        }
        this.results.sort((a, b) => b.count - a.count);
        this.processed = true;
    }
}
//# sourceMappingURL=key-value-counter.js.map