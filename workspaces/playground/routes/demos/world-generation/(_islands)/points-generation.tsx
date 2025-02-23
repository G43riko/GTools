import { useEffect } from "preact/hooks";
import { PointSelectorFactory } from "@g43/world-generation";
import { useCanvas } from "../../../../hooks/use-canvas.tsx";
import { FormBuilder, useFormBuilder } from "../../canvas-drawer/form-builder.tsx";

const formData = {
    numberOfDosts: FormBuilder.range({minValue: 0, maxValue: 200, defaultValue: 200}),
    // seed: FormBuilder.range({minValue: 1, maxValue: Number.MAX_SAFE_INTEGER, defaultValue: randomInt()}),
    dotSize: FormBuilder.range({minValue: 1, maxValue: 6, defaultValue: 5}),
    dotColor: FormBuilder.color({defaultValue: "#ff0000"}),
};
export default function PointsGeneration() {
    const {Canvas, drawer } = useCanvas();
    const {Form, result} = useFormBuilder(formData)

    useEffect(() => {
        if (!drawer) {
            return;
        }
        drawer.clear();
        const factory = PointSelectorFactory.generateRandom(Math.min(drawer.context.canvas.width, drawer.context.canvas.height), 123464, 0);
        const dots = factory(result.value.numberOfDosts).map(({ x, y }) => [x, y] as const);
        drawer.fillDots(dots, result.value.dotColor, result.value.dotSize);
    }, [drawer, result.value]);

    return (
        <div class="flex flex-row">
            {Canvas}
            <div class="grid grid-cols-2 gap-2 flex-1">
                {Form}
            </div>
        </div>
    );
}
