let array: any[]         = [];
let tmpValue: any | null = null;


export function quickSort<T>(arr: T[], comparator: (a: T, b: T) => number): void {
    if (!arr?.length) {
        return;
    }

    array = arr;

    doQuickSort(0, array.length - 1, comparator);
}

function doQuickSort<T>(lowerIndex: number, higherIndex: number, comparator: (a: T, b: T) => number): void {
    let i = lowerIndex;
    let j = higherIndex;

    const pivot = array[~~(lowerIndex + (higherIndex - lowerIndex) / 2)];
    while (i <= j) {
        while (comparator(array[i], pivot) < 0) {
            i++;
        }
        while (comparator(array[j], pivot) > 0) {
            j--;
        }

        if (i <= j) {
            exchangeNumbers(i++, j--);
        }
    }

    if (lowerIndex < j) {
        doQuickSort(lowerIndex, j, comparator);
    }
    if (i < higherIndex) {
        doQuickSort(i, higherIndex, comparator);
    }
}

function exchangeNumbers(i: number, j: number): void {
    tmpValue = array[i];
    array[i] = array[j];
    array[j] = tmpValue;
}