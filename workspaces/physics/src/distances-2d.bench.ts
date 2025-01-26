/// <reference lib="deno.ns" />

import { distance2dPointLine, distance2dPointLineNew } from "./distances-2d.ts";

const a = { x: 2, y: 3 };
const b = { x: 4, y: 5 };
const p = { x: 23, y: 15 };
Deno.bench("distance2dPointLine new ", { group: "distances2d.point-line" }, () => {
    distance2dPointLineNew(a.x, a.y, b.x, b.y, p.x, p.y);
});
Deno.bench("distance2dPointLine old ", { group: "distances2d.point-line" }, () => {
    distance2dPointLine(a.x, a.y, b.x, b.y, p.x, p.y);
});
