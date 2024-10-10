let array: any[]          = [];
let tempMergeArray: any[] = [];

export function mergeSort<T>(arr: T[], comparator: (a: T, b: T) => number): void {
    array          = arr;
    tempMergeArray = new Array<T>(arr.length);
    doMergeSort(0, arr.length - 1, comparator);
}

function doMergeSort<T>(lowerIndex: number, higherIndex: number, comparator: (a: T, b: T) => number): void {
    if (lowerIndex >= higherIndex) {
        return;
    }
    const middle = Math.floor(lowerIndex + (higherIndex - lowerIndex) / 2);
    doMergeSort(lowerIndex, middle, comparator);
    doMergeSort(middle + 1, higherIndex, comparator);
    mergeParts(lowerIndex, middle, higherIndex, comparator);
}

function mergeParts<T>(lowerIndex: number, middle: number, higherIndex: number, comparator: (a: T, b: T) => number): void {
    for (let index = lowerIndex; index <= higherIndex; index++) {
        tempMergeArray[index] = array[index];
    }

    let i = lowerIndex;
    let j = middle + 1;
    let k = lowerIndex;
    while (i <= middle && j <= higherIndex) {
        if (comparator(tempMergeArray[i], tempMergeArray[j]) <= 0) {
            array[k] = tempMergeArray[i++];
        } else {
            array[k] = tempMergeArray[j++];
        }
        k++;
    }
    while (i <= middle) {
        array[k++] = tempMergeArray[i++];
    }

}