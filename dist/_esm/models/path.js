export class Path {
    constructor(points) {
        this.points = points;
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
    }
    get length() {
        return this.points.length;
    }
    get first() {
        return this.points[0];
    }
    get last() {
        return this.points[this.points.length - 1];
    }
    getPoint(index) {
        return this.points[index];
    }
}
//# sourceMappingURL=path.js.map