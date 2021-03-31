import { Vector2 } from "../../../../math";
function getMapIndex(x, y, width) {
    return y * width + x;
}
function getCoordinates(index, width) {
    return {
        x: index % width,
        y: Math.floor(index / width),
    };
}
export class Grid2ArrayHolder {
    constructor(size, data) {
        this.size = size;
        this.data = data;
    }
    static initEmpty(x, y, defaultValue = null) {
        const size = x * y;
        const result = new Array(size);
        for (let i = 0; i < size; i++) {
            result[i] = defaultValue;
        }
        return new Grid2ArrayHolder({ x, y }, result);
    }
    get(x, y) {
        return this.data[this.getIndex(x, y)];
    }
    set(x, y, value) {
        this.data[this.getIndex(x, y)] = value;
    }
    getIndex(x, y) {
        return getMapIndex(x, y, this.size.x);
    }
    getCoordinates(index) {
        return getCoordinates(index, this.size.x);
    }
    getAroundData(x, y, size = 1) {
        const center = { x, y };
        const minPosition = {
            x: Math.max(0, x - size),
            y: Math.max(0, y - size),
        };
        const maxPosition = {
            x: Math.min(this.size.x - 1, size + x),
            y: Math.min(this.size.y - 1, size + y),
        };
        return this.getAreaInternally(minPosition, {
            x: maxPosition.x - minPosition.x + 1,
            y: maxPosition.y - minPosition.y + 1,
        }, "block").filter((e) => Vector2.dist(e.coordinates, center) <= size);
    }
    getAround(x, y, size = 1) {
        return this.getAroundData(x, y, size).map((e) => e.item);
    }
    getAroundSQ(x, y, size = 1) {
        const minPosition = {
            x: Math.max(0, x - size),
            y: Math.max(0, y - size),
        };
        const maxPosition = {
            x: Math.min(this.size.x - 1, size + x),
            y: Math.min(this.size.y - 1, size + y),
        };
        return this.getAreaInternally(minPosition, {
            x: maxPosition.x - minPosition.x + 1,
            y: maxPosition.y - minPosition.y + 1,
        }, "data");
    }
    getBetween(pointA, pointB) {
        const min = {
            x: Math.min(pointA.x, pointB.x),
            y: Math.min(pointA.y, pointB.y),
        };
        const max = {
            x: Math.max(pointA.x, pointB.x),
            y: Math.max(pointA.y, pointB.y),
        };
        return this.getAreaInternally(min, {
            x: max.x - min.x + 1,
            y: max.y - min.y + 1,
        }, "data");
    }
    getNearest(x, y, condition) {
        let Statuses;
        (function (Statuses) {
            Statuses[Statuses["ADDED"] = 0] = "ADDED";
            Statuses[Statuses["FALSE"] = 1] = "FALSE";
        })(Statuses || (Statuses = {}));
        const data = {};
        const result = [];
        const current = [[this.getIndex(x, y)]];
        while (!result.length) {
            const actualLevel = current.shift();
            const nextLevel = [];
            actualLevel.forEach((actual) => {
                if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                    return;
                }
                const coordinates = this.getCoordinates(actual);
                if (condition(this.data[actual])) {
                    data[actual] = Statuses.ADDED;
                    result.push({ coordinates, item: this.data[actual] });
                }
                else {
                    data[actual] = Statuses.FALSE;
                    nextLevel.push(...this.getAround4(coordinates.x, coordinates.y));
                }
            });
            current.push(nextLevel);
        }
        return result;
    }
    expandConditionally(x, y, condition) {
        let Statuses;
        (function (Statuses) {
            Statuses[Statuses["ADDED"] = 0] = "ADDED";
            Statuses[Statuses["FALSE"] = 1] = "FALSE";
        })(Statuses || (Statuses = {}));
        const data = {};
        const current = [this.getIndex(x, y)];
        const result = [];
        while (current.length) {
            const actual = current.shift();
            if (data[actual] === Statuses.ADDED || data[actual] === Statuses.FALSE) {
                continue;
            }
            if (condition(this.data[actual])) {
                data[actual] = Statuses.ADDED;
                const coordinates = this.getCoordinates(actual);
                result.push({ coordinates, item: this.data[actual] });
                current.push(...this.getAround4(coordinates.x, coordinates.y));
            }
            else {
                data[actual] = Statuses.FALSE;
            }
        }
        return result;
    }
    getAround4(x, y) {
        const centerIndex = this.getIndex(x, y);
        const result = [];
        if (x > 0) {
            result.push(centerIndex - 1);
        }
        if (y > 0) {
            result.push(centerIndex - this.size.x);
        }
        if (x + 1 < this.size.x) {
            result.push(centerIndex + 1);
        }
        if (y + 1 < this.size.y) {
            result.push(centerIndex + this.size.x);
        }
        return result;
    }
    getAround4Index(centerIndex) {
        const { x, y } = this.getCoordinates(centerIndex);
        const result = [];
        if (x > 0) {
            result.push(centerIndex - 1);
        }
        if (y > 0) {
            result.push(centerIndex - this.size.x);
        }
        if (x + 1 < this.size.x) {
            result.push(centerIndex + 1);
        }
        if (y + 1 < this.size.y) {
            result.push(centerIndex + this.size.x);
        }
        return result;
    }
    getArea(position, size) {
        return this.getAreaInternally(position, size, "data");
    }
    getAreaInternally(position, size, select) {
        const result = new Array(size.x * size.y);
        let counter = 0;
        let y = position.y;
        if (select === "block") {
            for (let i = 0; i < size.y; i++) {
                let currentIndex = this.getIndex(position.x, y);
                for (let j = 0; j < size.x; j++) {
                    result[counter++] = {
                        index: currentIndex,
                        item: this.data[currentIndex++],
                        coordinates: { y, x: position.x + j },
                    };
                }
                y++;
            }
            return result;
        }
        for (let i = 0; i < size.y; i++) {
            let currentIndex = this.getIndex(position.x, y);
            for (let j = 0; j < size.x; j++) {
                result[counter++] = currentIndex++;
            }
            y++;
        }
        if (select === "indices") {
            return result;
        }
        return result.map((index) => this.data[index]);
    }
    forEach(callback) {
        for (let i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i % this.size.x, Math.floor(i / this.size.x)) === false) {
                return;
            }
        }
    }
    getRandomBlockOfSize(size, filter) {
        while (true) {
            const randomIndex = Math.floor(Math.random() * this.data.length);
            const blocks = this.getArea(this.getCoordinates(randomIndex), size);
            if (blocks.every((item) => filter(item))) {
                return {
                    item: this.data[randomIndex],
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    }
    getRandomBlock(filter) {
        while (true) {
            const randomIndex = Math.floor(Math.random() * this.data.length);
            const item = this.data[randomIndex];
            if (!filter || filter(item)) {
                return {
                    item,
                    coordinates: this.getCoordinates(randomIndex),
                };
            }
        }
    }
    getRandomBlock2(filter) {
        if (!filter) {
            const randomIndex = Math.floor(Math.random() * this.data.length);
            return {
                item: this.data[randomIndex],
                coordinates: this.getCoordinates(randomIndex),
            };
        }
        const sortedArray = this.data.map((item, index) => ({ item, index })).sort(() => Math.random() - 0.5);
        const result = sortedArray.find((e) => filter(e.item));
        if (!result) {
            return null;
        }
        return {
            item: result.item,
            coordinates: this.getCoordinates(result.index),
        };
    }
}
//# sourceMappingURL=grid2-array-holder.js.map