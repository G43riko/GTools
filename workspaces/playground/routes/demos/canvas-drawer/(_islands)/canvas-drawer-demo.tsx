import { useEffect, useRef } from "preact/hooks";
import { CanvasDrawer } from "@g43/canvas";
import { useSignal } from "@preact/signals";

export default function CanvasDrawerDemo() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const color = useSignal<string>("#0000ff");
    const rotation = useSignal<number>(0);

    useEffect(() => {
        if (!canvas.current) {
            return;
        }
        const drawer = CanvasDrawer.fromCanvas(canvas.current);
        drawer.clear();
        drawer.fillRotatedRect(10, 10, 50, 50, rotation.value, color.value);
    }, [canvas, color.value, rotation.value]);

    return (
        <div class="flex flex-col">
            <div class="flex flex-row">
                <canvas ref={canvas}></canvas>
                <div>
                    <div class="grid grid-cols-2 gap-2">
                        <label htmlFor="fillColor">Fill color</label>
                        <input
                            type="color"
                            id="fillColor"
                            value={color.value}
                            onInput={(e) => color.value = (e.target as HTMLInputElement).value}
                        />
                        <label for="default-range" class="block mb-2 text-sm font-medium">Default range</label>
                        <input
                            id="default-range"
                            type="range"
                            value={rotation.value}
                            min="0"
                            step="0.01"
                            max={Math.PI * 2}
                            onInput={(e) => rotation.value = +(e.target as HTMLInputElement).value}
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
