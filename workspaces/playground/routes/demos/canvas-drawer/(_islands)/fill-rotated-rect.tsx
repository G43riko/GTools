import { FormBuilder } from "../../../../components/hooks/form-builder.tsx";
import { useDemoRow } from "../../../../components/hooks/use-demo-row.tsx";

const formData = {
    color: FormBuilder.color({defaultValue: "#ff0000"}),
    rotation: FormBuilder.range({minValue: 0, maxValue: Math.PI * 2, step:0.01, defaultValue: 0}),
    size: FormBuilder.range({minValue: 10, maxValue: 100, defaultValue: 50}),
};

export default function FillRotatedRect() {
    return useDemoRow({formData, renderCallback: (drawer, {size, color, rotation}) => {
        drawer.clear();
        drawer.fillRotatedRect(
            (drawer.context.canvas.width - size) / 2,
            (drawer.context.canvas.height - size) / 2,
            size,
            size,
            rotation,
            color,
        );
    }});
}
