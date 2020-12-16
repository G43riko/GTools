import { SimpleVector2 } from "gtools/math";

export class Ray {
    public constructor(
        public readonly origin: SimpleVector2,
        public readonly direction: SimpleVector2,
        public readonly length = Infinity,
    ) {
    }

}
