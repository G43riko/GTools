import { useEffect } from "preact/hooks";
import { PointSelectorFactory } from "@g43/world-generation";
import { useCanvas } from "../../../../components/hooks/use-canvas.tsx";
import { FormBuilder, useFormBuilder } from "../../canvas-drawer/form-builder.tsx";
import { randomInt, randomIntBetween } from "@g43/utils";

const formData = {
    numberOfDosts: FormBuilder.range({minValue: 0, maxValue: 1000, defaultValue: 200}),
    seed: FormBuilder.range({minValue: 0, maxValue: 1000, defaultValue: randomIntBetween(0, 1000)}),
    dotSize: FormBuilder.range({minValue: 1, maxValue: 6, defaultValue: 5}),
    offset: FormBuilder.range({minValue: 0, maxValue: 20, defaultValue: 20}),
    dotColor: FormBuilder.color({defaultValue: "#ff0000"}),
};
export default function PointsGeneration() {
    const {Canvas, drawer } = useCanvas({size: 302});
    const {Form, result} = useFormBuilder(formData)

    useEffect(() => {
        if (!drawer) {
            return;
        }
        const {numberOfDosts, dotColor, dotSize, seed, offset} = result.value;
        drawer.clear();
        const factory = PointSelectorFactory.generateRandom(Math.min(drawer.context.canvas.width, drawer.context.canvas.height), seed, offset);
        const dots = factory(numberOfDosts).map(({ x, y }) => [x, y] as const);
        drawer.fillDots(dots, dotColor, dotSize);
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
