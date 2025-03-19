import { CanvasDrawer } from "@g43/canvas";
import { SimpleVector } from "@g43/math";
import { distance2dCircleCircle, distance2dCircleMinMax } from "@g43/physics";
import { ReadonlySimpleVector2 } from "@g43/types";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { EmitValue, FormBuilder, useFormBuilder } from "../../../../components/hooks/form-builder.tsx";
import { useCanvas } from "../../../../components/hooks/use-canvas.tsx";

enum ShapeType {
    CIRCLE = "circle",
    RECT = "rectangle",
}
const cursorShapes = [
    ShapeType.CIRCLE,
    ShapeType.RECT,
];
const targetShapes = [
    ShapeType.CIRCLE,
];
const formData = {
    cursorShape: FormBuilder.select({ options: cursorShapes, defaultValue: cursorShapes[0] }),
    targetShape: FormBuilder.select({ options: targetShapes, defaultValue: targetShapes[0] }),
};

const drawShape = (
    center: ReadonlySimpleVector2,
    drawer: CanvasDrawer,
    shape: ShapeType,
    color: string,
    radius: number,
    rotation = 0,
) => {
    switch (shape) {
        case ShapeType.CIRCLE:
            drawer.fillArcByCenterAndRadius(center.x, center.y, radius, color);
            drawer.strokeArcByCenterAndRadius(center.x, center.y, radius, "black", 1);
            break;
        case ShapeType.RECT:
            drawer.fillRotatedRect(center.x - radius, center.y - radius, radius * 2, radius * 2, rotation, color);
            drawer.strokeRotatedRect(
                center.x - radius,
                center.y - radius,
                radius * 2,
                radius * 2,
                rotation,
                "black",
                1,
            );
            break;
    }
};

const ROTATION_SPEED = 0.2;
export default function Distances() {
    const canvasSize = SimpleVector.create2(320, 240);
    const mousePosition = useSignal(SimpleVector.create2(canvasSize.x / 2, canvasSize.y / 2));
    const targetPosition = useSignal(SimpleVector.create2(canvasSize.x / 2, canvasSize.y / 2));
    const rotation = useSignal(0);
    const { Canvas, drawer } = useCanvas({
        size: canvasSize,
        onPointerMove: (e) => mousePosition.value = SimpleVector.create2(e.offsetX, e.offsetY),
        onPointerDown: (e) => targetPosition.value = SimpleVector.create2(e.offsetX, e.offsetY),
        onWheel: (e) => rotation.value += e.deltaY > 0 ? ROTATION_SPEED : -ROTATION_SPEED,
    });

    const { Form, result } = useFormBuilder(formData);

    const getDistance = (
        mouseCenter: ReadonlySimpleVector2,
        targetCenter: ReadonlySimpleVector2,
        params: EmitValue<typeof formData>,
        radius: number,
    ) => {
        if (params.cursorShape === ShapeType.CIRCLE) {
            if (params.targetShape === ShapeType.CIRCLE) {
                return distance2dCircleCircle(
                    mouseCenter.x,
                    mouseCenter.y,
                    radius,
                    targetCenter.x,
                    targetCenter.y,
                    radius,
                );
            }
        }
        if (params.cursorShape === ShapeType.RECT) {
            if (params.targetShape === ShapeType.CIRCLE) {
                return distance2dCircleMinMax(
                    targetCenter.x,
                    targetCenter.y,
                    radius,
                    mouseCenter.x - radius * 2,
                    mouseCenter.y - radius * 2,
                    mouseCenter.x + radius * 2,
                    mouseCenter.y + radius * 2,
                );
            }
        }
        throw new Error(`Unsupported combination ${JSON.stringify(params)}`);
    };
    const render = (
        drawer: CanvasDrawer,
        mouseCenter: ReadonlySimpleVector2,
        targetCenter: ReadonlySimpleVector2,
        options: EmitValue<typeof formData>,
        rotation: number,
        radius = 20,
    ) => {
        drawer.clear();
        drawer.strokeLine([mouseCenter, targetCenter], "black", 1);
        const center = SimpleVector.create2(
            (mouseCenter.x + targetCenter.x) / 2,
            (mouseCenter.y + targetCenter.y) / 2 + 20,
        );
        drawer.context.textAlign = "center";

        drawShape(mouseCenter, drawer, options.cursorShape, "red", radius, rotation);
        drawShape(targetCenter, drawer, options.targetShape, "blue", radius);

        const distance = getDistance(mouseCenter, targetCenter, options, radius);

        drawer.context.translate(center.x, center.y);
        drawer.drawTextSimple(distance.toFixed(0), 0, 0, { font: "arial", fontColor: "black", fontSize: 10 });
        drawer.context.translate(-center.x, -center.y);
    };
    useEffect(() => {
        if (!drawer) {
            return;
        }
        render(drawer, mousePosition.value, targetPosition.value, result.value, rotation.value);
    }, [drawer, result.value, mousePosition.value, targetPosition.value, rotation.value]);

    return (
        <div class="flex flex-row">
            {Canvas}
            {Form}
        </div>
    );
}
