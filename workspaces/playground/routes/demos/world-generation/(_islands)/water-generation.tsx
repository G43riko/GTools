import { useEffect } from "preact/hooks";
import { MapLandGenerator } from "@g43/world-generation";
import { useCanvas } from "../../../../components/hooks/use-canvas.tsx";
import { FormBuilder, useFormBuilder } from "../../../../components/form-builder.tsx";
import { randomIntBetween } from "@g43/utils";

const formData = {
    seed: FormBuilder.range({minValue: 0, maxValue: 1000, defaultValue: randomIntBetween(0, 1000), reactOn: "change"}),
    islandFactor: FormBuilder.range({minValue: 1, maxValue: 2, defaultValue: 1.07, step: 0.01, reactOn: "change"})
};
export default function WaterGeneration() {
    const {Canvas, drawer } = useCanvas({size: 302});
    const {Form, result} = useFormBuilder(formData);
    useEffect(() => {
        if (!drawer) {
            return;
        }
        const {seed, islandFactor } = result.value;
        drawer.clear();
        const factory = MapLandGenerator.makeRadial(seed, islandFactor);
        for(let x = 0 ; x <= drawer.context.canvas.width; x++) {
            for(let y = 0 ; y <= drawer.context.canvas.height; y++) {
                const coordX = x / drawer.context.canvas.width  * 2 - 1;
                const coordY = y / drawer.context.canvas.height * 2 - 1;
                const color = factory(coordX, coordY) ? "green" : "blue";
                drawer.fillRect(x, y, 1, 1, color);
            }
        }
    }, [drawer, result.value]);

    return (
        <div class="flex flex-row">
            {Canvas}
            {Form}
        </div>
    );
}
