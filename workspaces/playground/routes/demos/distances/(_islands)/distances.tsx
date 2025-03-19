import { FormBuilder } from "../../../../components/hooks/form-builder.tsx";

const shapes = ["point"];
const _formData = {
    cursorShape: FormBuilder.select({ options: shapes }),
    targetShape: FormBuilder.select({ options: shapes }),
};

/*

const drawShape = (center: Rea)
export default function Distances() {
    return useDemoRow({formData, renderCallback: (drawer, {cursorShape, targetShape}) => {
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
*/
