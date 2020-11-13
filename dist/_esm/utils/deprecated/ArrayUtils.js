import * as Arrays from "../array-utils";
export class ArrayUtils {
    static where(array, condition) {
        return Arrays.where(array, condition);
    }
    static subArray(array, minIndex = 0, maxIndex = array.length - 1) {
        return Arrays.subArray(array, minIndex, maxIndex);
    }
    static max(array) {
        return Arrays.max(array);
    }
    static min(array) {
        return Arrays.min(array);
    }
    static sum(array) {
        return Arrays.sum(array);
    }
    static avg(array) {
        return Arrays.avg(array);
    }
    static join(array, delimiter, prefix = "", postfix = "") {
        return Arrays.join(array, delimiter, prefix, postfix);
    }
    static getLast(array) {
        return Arrays.getLast(array);
    }
    static getRandom(array) {
        return Arrays.getRandomItem(array);
    }
    static getNRandom(array, count) {
        return Arrays.getNRandom(array, count);
    }
    static makeUnique(array) {
        return Arrays.makeUnique(array);
    }
}
//# sourceMappingURL=ArrayUtils.js.map