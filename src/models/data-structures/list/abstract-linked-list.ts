export abstract class AbstractLinkedList<T, S extends { next: S | null, item: T }> implements Iterable<T> {
    protected first: S | null = null;
    protected localLength     = 0;

    public get length(): number {
        return this.localLength;
    }

    public [Symbol.iterator](): IterableIterator<T> {
        let current = this.first;

        return {
            [Symbol.iterator](): IterableIterator<T> {
                return this;
            },
            next(): IteratorResult<T> {
                if (current) {
                    const value = current.item;
                    current     = current.next;

                    return {
                        value,
                        done: false,
                    };
                }

                return {
                    value: null,
                    done : true,
                };
            },
        };
    }

    public get empty(): boolean {
        return this.localLength === 0;
    }

    public contains(item: T): boolean {
        for (let current = this.first; current; current = current.next) {
            if (current.item === item) {
                return true;
            }
        }

        return false;
    }

    public toArray(): T[] {
        const newArray = new Array<T>(this.localLength);

        let i = 0;
        for (let current = this.first; current; current = current.next) {
            newArray[i++] = current.item;
        }

        return newArray;
    }
}
