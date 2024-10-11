/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GMergeSort.java
 */
export class MergeSort<T> {
    private array: T[] = [];
    private tempMergeArray: T[] = [];

    public constructor(private readonly comparator: (a: T, b: T) => number) {
    }

    public sort(array: T[]): void {
        this.array = array;
        this.tempMergeArray = new Array<T>(array.length);
        this.doMergeSort(0, array.length - 1);
    }

    private doMergeSort(lowerIndex: number, higherIndex: number): void {
        if (lowerIndex >= higherIndex) {
            return;
        }
        const middle = Math.floor(lowerIndex + (higherIndex - lowerIndex) / 2);
        this.doMergeSort(lowerIndex, middle);
        this.doMergeSort(middle + 1, higherIndex);
        this.mergeParts(lowerIndex, middle, higherIndex);
    }

    private mergeParts(lowerIndex: number, middle: number, higherIndex: number): void {
        for (let index = lowerIndex; index <= higherIndex; index++) {
            this.tempMergeArray[index] = this.array[index];
        }

        let i = lowerIndex;
        let j = middle + 1;
        let k = lowerIndex;
        while (i <= middle && j <= higherIndex) {
            if (this.comparator(this.tempMergeArray[i], this.tempMergeArray[j]) <= 0) {
                this.array[k] = this.tempMergeArray[i++];
            } else {
                this.array[k] = this.tempMergeArray[j++];
            }
            k++;
        }
        while (i <= middle) {
            this.array[k++] = this.tempMergeArray[i++];
        }
    }
}
