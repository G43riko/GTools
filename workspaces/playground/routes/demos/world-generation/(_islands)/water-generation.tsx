import { MapLandGenerator } from "@g43/world-generation";
import { FormBuilder } from "../../../../components/hooks/form-builder.tsx";
import { randomIntBetween } from "@g43/utils";
import { useDemoRow } from "../../../../components/hooks/use-demo-row.tsx";

const formData = {
    seed: FormBuilder.range({
        minValue: 0,
        maxValue: 1000,
        defaultValue: randomIntBetween(0, 1000),
        reactOn: "change",
    }),
    islandFactor: FormBuilder.range({ minValue: 1, maxValue: 2, defaultValue: 1.07, step: 0.01, reactOn: "change" }),
};
export default function WaterGeneration() {
    return useDemoRow({
        formData,
        canvasSize: 300,
        renderCallback: (drawer, { islandFactor, seed }) => {
            drawer.clear();
            const factory = MapLandGenerator.makeRadial(seed, islandFactor);
            for (let x = 0; x <= drawer.context.canvas.width; x++) {
                for (let y = 0; y <= drawer.context.canvas.height; y++) {
                    const coordX = x / drawer.context.canvas.width * 2 - 1;
                    const coordY = y / drawer.context.canvas.height * 2 - 1;
                    const color = factory(coordX, coordY) ? "green" : "blue";
                    drawer.fillRect(x, y, 1, 1, color);
                }
            }
        },
    });
}
