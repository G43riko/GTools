/**
 * https://github.com/G43riko/JavaUtils/blob/master/GLib/src/glib/sorts/GHeapSort.java
 */
export class HeapSort<T> {
    private n = 0;
    private left = 0;
    private right = 0;
    private largest = 0;
    private tmp: T | null = null;

    public constructor(private readonly comparator: (a: T, b: T) => number) {
    }

    public sort(array: T[]): void {
        this.buildHeap(array);

        for (let i = this.n; i > 0; i--) {
            this.exchange(array, 0, i);
            this.n--;
            this.maxHeap(array, 0);
        }
    }

    private buildHeap(a: T[]): void {
        this.n = a.length - 1;

        for (let i = this.n / 2; i >= 0; i--) {
            this.maxHeap(a, i);
        }
    }

    private maxHeap(a: T[], i: number): void {
        this.left = 2 * i;
        this.right = 2 * i + 1;
        if (this.left <= this.n && this.comparator(a[this.left], a[i]) > 0) {
            this.largest = this.left;
        } else {
            this.largest = i;
        }

        if (this.right <= this.n && this.comparator(a[this.right], a[this.largest]) > 0) {
            this.largest = this.right;
        }

        if (this.largest !== i) {
            this.exchange(a, i, this.largest);
            this.maxHeap(a, this.largest);
        }
    }

    private exchange(a: T[], i: number, j: number): void {
        this.tmp = a[i];
        a[i] = a[j];
        a[j] = this.tmp;
    }
}
