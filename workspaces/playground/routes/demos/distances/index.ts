import FillRotatedRect from "./(_islands)/fill-rotated-rect.tsx";
import StrokeRotatedRect from "./(_islands)/stroke-rotated-rect.tsx";

export default function CanvasDrawer() {
    return (
        <div class="flex flex-col container mx-auto my-2">
            <FillRotatedRect />
            <StrokeRotatedRect />
        </div>
    );
}
