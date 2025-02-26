import { PointSelectorFactory } from "@g43/world-generation";
import { FormBuilder } from "../../../../components/hooks/form-builder.tsx";
import { randomIntBetween } from "@g43/utils";
import { useDemoRow } from "../../../../components/hooks/use-demo-row.tsx";

const formData = {
    numberOfDosts: FormBuilder.range({ minValue: 0, maxValue: 1000, defaultValue: 200 }),
    seed: FormBuilder.range({ minValue: 0, maxValue: 1000, defaultValue: randomIntBetween(0, 1000) }),
    dotSize: FormBuilder.range({ minValue: 1, maxValue: 6, defaultValue: 5 }),
    offset: FormBuilder.range({ minValue: 0, maxValue: 20, defaultValue: 20 }),
    dotColor: FormBuilder.color({ defaultValue: "#ff0000" }),
};
export default function PointsGeneration() {
    return useDemoRow({
        formData,
        canvasSize: 300,
        renderCallback: (drawer, { numberOfDosts, seed, dotSize, offset, dotColor }) => {
            drawer.clear();
            const factory = PointSelectorFactory.generateRandom(
                Math.min(drawer.context.canvas.width, drawer.context.canvas.height),
                seed,
                offset,
            );
            const dots = factory(numberOfDosts).map(({ x, y }) => [x, y] as const);
            drawer.fillDots(dots, dotColor, dotSize);
        },
    });
}
