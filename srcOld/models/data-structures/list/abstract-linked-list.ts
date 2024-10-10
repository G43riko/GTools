export abstract class AbstractLinkedList<T, S extends { next?: S; item: T }> implements Iterable<T> {
    protected first?: S;
    protected localLength = 0;

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
                    value: undefined,
                    done : true,
                };
            },
        };
    }

    protected getHolderAtNotChecked(index: number): S | undefined {
        let curr: S | undefined = this.first;
        while (curr && index--) {
            curr = curr?.next;
        }

        return curr;
    }

    public getItemAt(index: number): T | undefined {
        if (index < 0 || index >= this.length || this.empty) {
            return;
        }

        return this.getHolderAtNotChecked(index)?.item;
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
