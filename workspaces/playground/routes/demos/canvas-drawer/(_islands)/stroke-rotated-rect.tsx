import { FormBuilder } from "../../../../components/hooks/form-builder.tsx";
import { useDemoRow } from "../../../../components/hooks/use-demo-row.tsx";

const formData = {
    color: FormBuilder.color({ defaultValue: "#0000ff" }),
    rotation: FormBuilder.range({ minValue: 0, maxValue: Math.PI * 2, step: 0.01, defaultValue: 0 }),
    size: FormBuilder.range({ minValue: 10, maxValue: 100, defaultValue: 50 }),
    width: FormBuilder.range({ minValue: 0, maxValue: 50, defaultValue: 1 }),
};

export default function StrokeRotatedRect() {
    return useDemoRow({
        formData,
        renderCallback: (drawer, { size, color, width, rotation }) => {
            drawer.clear();
            drawer.strokeRotatedRect(
                (drawer.context.canvas.width - size) / 2,
                (drawer.context.canvas.height - size) / 2,
                size,
                size,
                rotation,
                color,
                width,
            );
        },
    });
}
