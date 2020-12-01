export class NumberCounter {
    constructor() {
        this.min = Infinity;
        this.max = -Infinity;
        this.sum = 0;
        this.numbers = [];
    }
    add(value) {
        this.numbers.push(value);
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
        this.sum += value;
    }
    getMin() {
        return this.min;
    }
    getMax() {
        return this.max;
    }
    getCount() {
        return this.numbers.length;
    }
    getAverage() {
        return this.sum / this.numbers.length;
    }
    addAll(items) {
        items.forEach(this.add, this);
    }
}
//# sourceMappingURL=number-counter.js.map