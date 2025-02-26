import { useEffect } from "preact/hooks";
import { CanvasDrawer } from "@g43/canvas";
import { EmitValue, Property, useFormBuilder } from "./form-builder.tsx";
import { useCanvas } from "./use-canvas.tsx";

export interface UseDemoRowParams<T extends Record<string, Property>> {
    readonly formData: T;
    readonly canvasSize?: number;
    readonly renderCallback?: (drawer: CanvasDrawer, data: EmitValue<T>) => void;
}
export const useDemoRow = <T extends Record<string, Property>>(
    { formData, canvasSize = 200, renderCallback = () => null }: UseDemoRowParams<T>,
) => {
    const { Canvas, drawer } = useCanvas({ size: canvasSize });
    const { Form, result } = useFormBuilder(formData);

    useEffect(() => {
        if (!drawer) {
            return;
        }
        renderCallback(drawer, result.value);
    }, [drawer, result.value]);

    return (
        <div class="flex flex-row">
            {Canvas}
            {Form}
        </div>
    );
};
