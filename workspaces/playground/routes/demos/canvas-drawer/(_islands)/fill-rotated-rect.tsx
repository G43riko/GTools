import { useEffect } from "preact/hooks";
import { useCanvas } from "../../../../components/hooks/use-canvas.tsx";
import { FormBuilder, useFormBuilder } from "../../../../components/form-builder.tsx";

const formData = {
    color: FormBuilder.color({defaultValue: "#ff0000"}),
    rotation: FormBuilder.range({minValue: 0, maxValue: Math.PI * 2, step:0.01, defaultValue: 0}),
    size: FormBuilder.range({minValue: 10, maxValue: 100, defaultValue: 50}),
};
export default function FillRotatedRect() {
    const {Canvas, drawer } = useCanvas({size: 200});
    const {Form, result} = useFormBuilder(formData);

    useEffect(() => {
        if (!drawer) {
            return;
        }
        const {size, color, rotation} = result.value
        drawer.clear();
        drawer.fillRotatedRect(
            (drawer.context.canvas.width - size) / 2,
            (drawer.context.canvas.height - size) / 2,
            size,
            size,
            rotation,
            color,
        );
    }, [drawer, result.value]);

    return (
        <div class="flex flex-row">
            {Canvas}
            {Form}
        </div>
    );
}
