import { PriorityQueue } from "./priority-queue";

describe("PriorityQueue", () => {
    it("Test max queue", () => {
        const queue = PriorityQueue.createMaxQueue((key: number) => key);

        queue.peek();
    });
});
