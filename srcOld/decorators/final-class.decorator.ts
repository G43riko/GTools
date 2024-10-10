export function FinalClass<T extends new(...args: any[]) => Record<string, unknown>>(target: T): T {
    return class Final extends target {
        public constructor(...args: any[]) {
            if (new.target !== Final) {
                throw new Error("Cannot inherit from final class");
            }
            super(...args);
        }
    };
}
