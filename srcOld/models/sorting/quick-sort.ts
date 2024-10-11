/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GQuickSort.java
 */
export class QuickSort<T> {
    private array: T[] = [];
    private tmpValue: T | null = null;

    public constructor(private readonly comparator: (a: T, b: T) => number) {
    }

    public sort(array: T[]): void {
        if (!array?.length) {
            return;
        }

        this.array = array;

        this.quickSort(0, array.length - 1);
    }

    private quickSort(lowerIndex: number, higherIndex: number): void {
        let i = lowerIndex;
        let j = higherIndex;

        const pivot = this.array[~~(lowerIndex + (higherIndex - lowerIndex) / 2)];
        while (i <= j) {
            while (this.comparator(this.array[i], pivot) < 0) {
                i++;
            }
            while (this.comparator(this.array[j], pivot) > 0) {
                j--;
            }

            if (i <= j) {
                this.exchangeNumbers(i++, j--);
            }
        }

        if (lowerIndex < j) {
            this.quickSort(lowerIndex, j);
        }
        if (i < higherIndex) {
            this.quickSort(i, higherIndex);
        }
    }

    private exchangeNumbers(i: number, j: number): void {
        this.tmpValue = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = this.tmpValue;
    }
}
