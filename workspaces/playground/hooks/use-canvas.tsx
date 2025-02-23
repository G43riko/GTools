import { CanvasDrawer } from "@g43/canvas";
import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { VNode } from "preact";

export interface UseCanvasResult {
    readonly Canvas: VNode<HTMLCanvasElement>
    readonly drawer?: CanvasDrawer;
}
export const useCanvas = (): UseCanvasResult => {
        const canvas = useRef<HTMLCanvasElement>(null);
        const drawer = useSignal<undefined | CanvasDrawer>(undefined);

        useEffect(() => {
            if (!canvas.current) {
                return;
            }
            drawer.value = CanvasDrawer.fromCanvas(canvas.current);
          
        }, [canvas]);
    
        return {
            drawer: drawer.value,
            Canvas: <canvas class="border border-black" ref={canvas}></canvas>
        }
}