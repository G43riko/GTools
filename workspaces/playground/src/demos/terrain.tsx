import { A } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import { CanvasDrawer } from "@g43/canvas";

export default () => {
    let canvas!: HTMLCanvasElement;
    const [drawer, setDrawer] = createSignal<CanvasDrawer | undefined>(undefined);

    console.log(1, canvas);
    // when the component is mounted, the button will be disabled
    onMount(() => {
        setDrawer(CanvasDrawer.fromCanvas(canvas));
    });
    return (
        <>
            <h1>
                Terrain generator demo <A href="/">back</A>
            </h1>
            <canvas ref={canvas} />
        </>
    );
};
