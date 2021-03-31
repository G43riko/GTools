export function where(array, condition) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (!condition || typeof condition !== "object") {
        return [];
    }
    const result = [];
    const conditionEntries = Object.entries(condition);
    array.forEach((e) => {
        const add = conditionEntries.some((conditionEntry) => e[conditionEntry[0]] === conditionEntry[1]);
        if (add) {
            result[result.length] = e;
        }
    });
    return result;
}
export function compareArrays(prev, act, comparator = (a, b) => a === b) {
    if (prev.length !== act.length) {
        return false;
    }
    for (let i = 0; i < prev.length; i++) {
        if (!comparator(prev[i], act[i])) {
            return false;
        }
    }
    return true;
}
export function groupByLast(arr, key) {
    return arr.reduce((acc, curr) => Object.assign({}, acc, { [curr[key]]: curr }), {});
}
export function analyzeArrayChanges(prev, act, comparator = (a, b) => a === b) {
    const existingPrevIndices = {};
    const toRemove = [];
    const toAdd = [];
    act.forEach((e) => {
        const prevIndex = prev.findIndex((item) => comparator(e, item));
        if (prevIndex < 0) {
            toAdd.push(e);
        }
        else {
            existingPrevIndices[prevIndex] = true;
        }
    });
    prev.forEach((e, i) => {
        if (i in existingPrevIndices) {
            return;
        }
        toRemove.push(e);
    });
    return { toAdd, toRemove };
}
export function subArray(array, minIndex = 0, maxIndex = array.length - 1) {
    if (!Array.isArray(array)) {
        return array;
    }
    const result = [];
    const final = array.length < maxIndex ? array.length - 1 : maxIndex;
    for (let i = minIndex; i <= final; i++) {
        result[result.length] = array[i];
    }
    return result;
}
export function max(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => a > b ? a : b);
}
export function min(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => a < b ? a : b);
}
export function sum(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => a + b);
}
export function avg(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => a + b) / array.length;
}
export function join(array, delimiter, prefix = "", postfix = "") {
    if (!Array.isArray(array)) {
        return prefix + array + postfix;
    }
    return prefix + array.join(delimiter) + postfix;
}
export function getLast(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return array[array.length - 1];
}
export function getRandomItem(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (array.length === 0) {
        return null;
    }
    return array[Math.floor(Math.random() * array.length)];
}
export function getNRandom(args, count) {
    if (!Array.isArray(args)) {
        return args;
    }
    if (args.length === 0 || count === 0) {
        return [];
    }
    if (args.length <= count) {
        return args;
    }
    const result = new Set();
    while (result.size <= count) {
        const randomItem = getRandomItem(args);
        if (randomItem) {
            result.add(randomItem);
        }
    }
    return Array.from(result);
}
export function makeUnique(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return Array.from(new Set(array));
}
export function createFilledArray(length, provider) {
    if (typeof provider === "function") {
        return new Array(length).fill(null).map(() => provider());
    }
    return new Array(length).fill(provider);
}
export function eachOther(arr, callback) {
    arr.forEach((e, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            callback(e, arr[j]);
        }
    });
}
export function mergeArrays2(arr1, arr2, callback) {
    const result = [];
    arr1.forEach((item1) => {
        arr2.forEach((item2) => {
            result.push(callback(item1, item2));
        });
    });
    return result;
}
export function mergeArrays3(arr1, arr2, arr3, callback) {
    const result = [];
    arr1.forEach((item1) => {
        arr2.forEach((item2) => {
            arr3.forEach((item3) => {
                result.push(callback(item1, item2, item3));
            });
        });
    });
    return result;
}
//# sourceMappingURL=array-utils.js.map