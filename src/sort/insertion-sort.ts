export function insertionSort<T>(list: readonly T[], comparator: (a: T, b: T) => number): void {
    const listCopy = [...list];
    for (let i = 1; i < listCopy.length; i++) {
        const item = listCopy[i];
        if (comparator(item, listCopy[i - 1]) < 0) {
            sortUpLowToHigh(listCopy, i, comparator);
        }
    }
}

function sortUpLowToHigh<T>(list: T[], i: number, comparator: (a: T, b: T) => number): void {
    const item     = list[i];
    let attemptPos = i - 1;
    while (attemptPos !== 0 && comparator(list[attemptPos - 1], item, ) > 0) {
        attemptPos--;
    }
    list.splice(i, 1);
    list.splice(attemptPos, 0, item);
}