import { useEffect, useRef } from "preact/hooks";
import { CanvasDrawer } from "@g43/canvas";
import { useSignal } from "@preact/signals";
import LabeledColorInput from "../../../../components/LabeledColorInput.tsx";
import LabeledRangeInput from "../../../../components/LabeledRangeInput.tsx";
import { useCanvas } from "../../../../hooks/use-canvas.tsx";

export default function StrokeRotatedRect() {
    const {Canvas, drawer } = useCanvas();
    const color = useSignal<string>("#0000ff");
    const rotation = useSignal<number>(0);
    const width = useSignal<number>(1);
    const size = useSignal<number>(50);

    useEffect(() => {
        if (!drawer) {
            return;
        }
        drawer.clear();
        drawer.strokeRotatedRect(
            (drawer.context.canvas.width - size.value) / 2,
            (drawer.context.canvas.height - size.value) / 2,
            size.value,
            size.value,
            rotation.value,
            color.value,
            width.value,
        );
    }, [drawer, color.value, rotation.value, size.value, width.value]);

    return (
            <div class="flex flex-row">
                {Canvas}
                <div class="grid grid-cols-2 gap-2 flex-1">
                    <LabeledColorInput
                        label="Fill color"
                        id="fillColor"
                        value={color.value}
                        onInput={(e) => color.value = (e.target as HTMLInputElement).value}
                    />
                    <LabeledRangeInput
                        label="Rotation"
                        id="rotation"
                        value={rotation.value}
                        min="0"
                        step="0.01"
                        max={Math.PI * 2}
                        onInput={(e) => rotation.value = +(e.target as HTMLInputElement).value}
                    />
                    <LabeledRangeInput
                        label="Size"
                        id="size"
                        value={size.value}
                        min="10"
                        max="100"
                        onInput={(e) => size.value = +(e.target as HTMLInputElement).value}
                    />
                    <LabeledRangeInput
                        label="Width"
                        id="width"
                        value={width.value}
                        min="0"
                        max={size.value}
                        onInput={(e) => width.value = +(e.target as HTMLInputElement).value}
                    />
                </div>
            </div>
    );
}
