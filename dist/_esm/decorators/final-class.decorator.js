export function FinalClass(target) {
    return class Final extends target {
        constructor(...args) {
            if (new.target !== Final) {
                throw new Error("Cannot inherit from final class");
            }
            super(...args);
        }
    };
}
//# sourceMappingURL=final-class.decorator.js.map