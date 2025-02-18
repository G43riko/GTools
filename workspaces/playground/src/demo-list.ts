import { lazy } from "solid-js";

export const DemoList = [
    ["Terrain generator", lazy(() => import("./demos/terrain.tsx"))],
    ["Test", lazy(() => import("./demos/test.tsx"))],
] as const;
