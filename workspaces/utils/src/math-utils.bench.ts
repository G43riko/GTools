import { nearestPowerOf2 } from "./math-utils.ts";

function nearestPowerOf2Old(num: number): number {
    return 1 << 31 - Math.clz32(num);
}
Deno.bench("nearestPowerOf2 new ", { group: "math-utils.nearestPowerOf2" }, () => {
    nearestPowerOf2(123456789);
});
Deno.bench("nearestPowerOf2 old ", { group: "math-utils.nearestPowerOf2" }, () => {
    nearestPowerOf2Old(123456789);
});
