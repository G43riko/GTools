import { describe, it, beforeEach } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { Observable } from "./observable.ts";
import type { Observer, Listener } from "./observable-types.ts";

describe("Observable", () => {
    let observable: Observable<number>;

    beforeEach(() => {
        observable = new Observable<number>();
    });

    describe("register / unregister (Observer)", () => {
        it("notifies registered observer", () => {
            let received: number | undefined;

            const observer: Observer<number> = {
                notify(message) {
                    received = message;
                },
            };

            observable.register(observer);
            observable.notifyAll(42);

            expect(received).toBe(42);
        });

        it("unregister stops notifications", () => {
            let called = false;

            const observer: Observer<number> = {
                notify() {
                    called = true;
                },
            };

            observable.register(observer);
            observable.unregister(observer);
            observable.notifyAll(42);

            expect(called).toBe(false);
        });

        it("returned unregister function works", () => {
            let called = false;

            const observer: Observer<number> = {
                notify() {
                    called = true;
                },
            };

            const unregister = observable.register(observer);
            unregister();

            observable.notifyAll(42);
            expect(called).toBe(false);
        });

        it("unregistering non-registered observer does nothing", () => {
            const observer: Observer<number> = {
                notify() {},
            };

            expect(() => observable.unregister(observer)).not.toThrow();
        });
    });

    describe("subscribe / unsubscribe (Listener)", () => {
        it("notifies subscribed listener", () => {
            let received: number | undefined;

            const listener: Listener<number> = (message) => {
                received = message;
            };

            observable.subscribe(listener);
            observable.notifyAll(7);

            expect(received).toBe(7);
        });

        it("unsubscribe stops notifications", () => {
            let called = false;

            const listener: Listener<number> = () => {
                called = true;
            };

            observable.subscribe(listener);
            observable.unsubscribe(listener);
            observable.notifyAll(7);

            expect(called).toBe(false);
        });

        it("returned unsubscribe function works", () => {
            let called = false;

            const listener: Listener<number> = () => {
                called = true;
            };

            const unsubscribe = observable.subscribe(listener);
            unsubscribe();

            observable.notifyAll(7);
            expect(called).toBe(false);
        });

        it("unsubscribing non-registered listener does nothing", () => {
            const listener: Listener<number> = () => {};

            expect(() => observable.unsubscribe(listener)).not.toThrow();
        });
    });

    describe("mixed observers and listeners", () => {
        it("notifies observers first, then listeners", () => {
            const calls: string[] = [];

            const observer: Observer<number> = {
                notify(value) {
                    calls.push(`observer:${value}`);
                },
            };

            const listener: Listener<number> = (value) => {
                calls.push(`listener:${value}`);
            };

            observable.register(observer);
            observable.subscribe(listener);

            observable.notifyAll(1);

            expect(calls).toEqual([
                "observer:1",
                "listener:1",
            ]);
        });

        it("notifies all observers and listeners", () => {
            let o1 = 0;
            let o2 = 0;
            let l1 = 0;
            let l2 = 0;

            const observer1: Observer<number> = {
                notify() {
                    o1++;
                },
            };
            const observer2: Observer<number> = {
                notify() {
                    o2++;
                },
            };

            const listener1: Listener<number> = () => {
                l1++;
            };
            const listener2: Listener<number> = () => {
                l2++;
            };

            observable.register(observer1);
            observable.register(observer2);
            observable.subscribe(listener1);
            observable.subscribe(listener2);

            observable.notifyAll(99);

            expect(o1).toBe(1);
            expect(o2).toBe(1);
            expect(l1).toBe(1);
            expect(l2).toBe(1);
        });
    });

    describe("clear()", () => {
        it("removes all observers and listeners", () => {
            let observerCalled = false;
            let listenerCalled = false;

            const observer: Observer<number> = {
                notify() {
                    observerCalled = true;
                },
            };

            const listener: Listener<number> = () => {
                listenerCalled = true;
            };

            observable.register(observer);
            observable.subscribe(listener);

            observable.clear();
            observable.notifyAll(123);

            expect(observerCalled).toBe(false);
            expect(listenerCalled).toBe(false);
        });

        it("clear is idempotent", () => {
            observable.clear();
            observable.clear();

            expect(() => observable.notifyAll(1)).not.toThrow();
        });
    });

    describe("edge cases", () => {
        it("allows duplicate subscriptions", () => {
            let count = 0;

            const listener: Listener<number> = () => {
                count++;
            };

            observable.subscribe(listener);
            observable.subscribe(listener);

            observable.notifyAll(5);

            expect(count).toBe(2);
        });

        it("allows duplicate observers", () => {
            let count = 0;

            const observer: Observer<number> = {
                notify() {
                    count++;
                },
            };

            observable.register(observer);
            observable.register(observer);

            observable.notifyAll(5);

            expect(count).toBe(2);
        });
    });
});
