import { useEffect, useRef } from "preact/hooks";
import { CanvasDrawer } from "@g43/canvas";
import { useSignal } from "@preact/signals";
import LabeledColorInput from "../../../../components/LabeledColorInput.tsx";
import LabeledRangeInput from "../../../../components/LabeledRangeInput.tsx";
import { useCanvas } from "../../../../components/hooks/use-canvas.tsx";

export default function FillRotatedRect() {
    const {Canvas, drawer } = useCanvas();
    const color = useSignal<string>("#ff0000");
    const rotation = useSignal<number>(0);
    const size = useSignal<number>(50);

    useEffect(() => {
        if (!drawer) {
            return;
        }
        drawer.clear();
        drawer.fillRotatedRect(
            (drawer.context.canvas.width - size.value) / 2,
            (drawer.context.canvas.height - size.value) / 2,
            size.value,
            size.value,
            rotation.value,
            color.value,
        );
    }, [drawer, color.value, rotation.value, size.value]);

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
            </div>
        </div>
    );
}
