export class Grid2BlockAccessor {
    constructor(holder, position) {
        this.holder = holder;
        this.position = position;
    }
    check(filter) {
        return filter(this.holder.get(this.position.x, this.position.y));
    }
    getByOffset(x = 0, y = 0) {
        return new Grid2BlockAccessor(this.holder, { x: this.position.x + x, y: this.position.y - y });
    }
    get top() {
        return this.getByOffset(0, -1);
    }
    get bottom() {
        return this.getByOffset(0, 1);
    }
    get left() {
        return this.getByOffset(-1, 0);
    }
    get right() {
        return this.getByOffset(1, 0);
    }
}
//# sourceMappingURL=grid2-block-accessor.js.map