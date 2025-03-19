import { CanvasDrawer } from "@g43/canvas";
import { ReadonlySimpleVector2 } from "@g43/types";
import { useSignal } from "@preact/signals";
import { VNode } from "preact";
import { useEffect, useRef } from "preact/hooks";

export interface UseCanvasParams {
    readonly size?: ReadonlySimpleVector2 | number;
    readonly onPointerMove?: (event: PointerEvent) => void;
    readonly onPointerDown?: (event: PointerEvent) => void;
    readonly onWheel?: (event: WheelEvent) => void;
}
export interface UseCanvasResult {
    readonly Canvas: VNode<HTMLCanvasElement>;
    readonly drawer?: CanvasDrawer;
}
export const useCanvas = (
    { size = 200, onPointerMove = () => null, onPointerDown = () => null, onWheel = () => null }: UseCanvasParams = {},
): UseCanvasResult => {
    const canvas = useRef<HTMLCanvasElement>(null);
    const drawer = useSignal<undefined | CanvasDrawer>(undefined);

    useEffect(() => {
        if (!canvas.current) {
            return;
        }

        drawer.value = CanvasDrawer.fromCanvas(canvas.current);
    }, [canvas]);
    const width = size ? (typeof size === "number" ? size : size.x) : undefined;
    const height = size ? (typeof size === "number" ? size : size.y) : undefined;

    return {
        drawer: drawer.value,
        Canvas: (
            <canvas
                width={width}
                height={height}
                class="border border-black"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onWheel={onWheel}
                ref={canvas}
            >
            </canvas>
        ),
    };
};
