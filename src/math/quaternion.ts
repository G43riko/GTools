import { SimpleVector4 } from "./simple-vector4";

export class Quaternion implements SimpleVector4 {
    public constructor(
        public w: number,
        public x: number,
        public y: number,
        public z: number,
    ) {
    }

}