import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { ObservableNonReentrant } from "./observable-non-reentrant.ts";
import type { Listener, Observer } from "./observable-types.ts";

describe("ObservableNonReentrant", () => {
    let observable: ObservableNonReentrant<number>;

    beforeEach(() => {
        observable = new ObservableNonReentrant<number>();
    });

    it("behaves like Observable for normal usage", () => {
        let observerCalled = 0;
        let listenerCalled = 0;

        const observer: Observer<number> = {
            notify() {
                observerCalled++;
            },
        };

        const listener: Listener<number> = () => {
            listenerCalled++;
        };

        observable.register(observer);
        observable.subscribe(listener);

        observable.notifyAll(1);

        expect(observerCalled).toBe(1);
        expect(listenerCalled).toBe(1);
    });

    describe("non-reentrancy: notifyAll", () => {
        it("throws when notifyAll is called recursively", () => {
            const observer: Observer<number> = {
                notify() {
                    observable.notifyAll(2);
                },
            };

            observable.register(observer);

            expect(() => observable.notifyAll(1)).toThrow(
                "[ObservableNonReentrant] Cannot call notifyAll in notifyAll",
            );
        });

        it("releases lock after notifyAll throws", () => {
            let called = false;

            const observer: Observer<number> = {
                notify() {
                    throw new Error("boom");
                },
            };

            const off = observable.register(observer);

            expect(() => observable.notifyAll(1)).toThrow("boom");

            off();
            // Must not remain locked
            observable.subscribe(() => {
                called = true;
            });

            observable.notifyAll(2);
            expect(called).toBe(true);
        });
    });

    describe("mutation during notify", () => {
        it("throws when register is called during notify", () => {
            const observer: Observer<number> = {
                notify() {
                    observable.register({ notify() {} });
                },
            };

            observable.register(observer);

            expect(() => observable.notifyAll(1)).toThrow(
                "[ObservableNonReentrant] Cannot modify during notify",
            );
        });

        it("throws when subscribe is called during notify", () => {
            const observer: Observer<number> = {
                notify() {
                    observable.subscribe(() => {});
                },
            };

            observable.register(observer);

            expect(() => observable.notifyAll(1)).toThrow(
                "[ObservableNonReentrant] Cannot modify during notify",
            );
        });

        it("throws when unregister is called during notify", () => {
            // deno-lint-ignore prefer-const
            let unregister!: () => void;

            const observer: Observer<number> = {
                notify() {
                    unregister();
                },
            };

            unregister = observable.register(observer);

            expect(() => observable.notifyAll(1)).toThrow(
                "[ObservableNonReentrant] Cannot modify during notify",
            );
        });

        it("throws when unsubscribe is called during notify", () => {
            // deno-lint-ignore prefer-const
            let unsubscribe!: () => void;

            const listener: Listener<number> = () => {
                unsubscribe();
            };

            unsubscribe = observable.subscribe(listener);

            expect(() => observable.notifyAll(1)).toThrow(
                "[ObservableNonReentrant] Cannot modify during notify",
            );
        });

        it("throws when clear is called during notify", () => {
            const observer: Observer<number> = {
                notify() {
                    observable.clear();
                },
            };

            observable.register(observer);

            expect(() => observable.notifyAll(1)).toThrow(
                "[ObservableNonReentrant] Cannot modify during notify",
            );
        });
    });

    describe("lock correctness", () => {
        it("allows modifications again after notifyAll completes", () => {
            const observer: Observer<number> = {
                notify() {},
            };

            observable.register(observer);
            observable.notifyAll(1);

            expect(() => {
                observable.unregister(observer);
                observable.subscribe(() => {});
                observable.clear();
            }).not.toThrow();
        });

        it("does not throw when modifying before notifyAll", () => {
            expect(() => {
                observable.register({ notify() {} });
                observable.subscribe(() => {});
                observable.clear();
            }).not.toThrow();
        });
    });
});
