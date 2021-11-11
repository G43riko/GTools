import { Holder } from "../holder";

export type Operator<R, S = R> = (input: Holder<R>) => Holder<S>;
