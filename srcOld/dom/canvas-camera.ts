import { SimpleVector2 } from "../math";

export interface CanvasCameraSettings {
    readonly fieldOfView?: number;
}

export interface CanvasCameraViewport {

    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    scale: [number, number];
}

const defaultCameraViewport: CanvasCameraViewport = {
    left  : 0,
    right : 0,
    top   : 0,
    bottom: 0,
    width : 0,
    height: 0,
    scale : [1, 1],
};

export class CanvasCamera {
    private distance             = 1000;
    private readonly lookAt      = [0, 0];
    private readonly viewport    = Object.assign({}, defaultCameraViewport);
    private readonly fieldOfView = this.settings.fieldOfView ?? Math.PI / 4;
    private readonly aspectRatio = this.context.canvas.width / this.context.canvas.height;

    public constructor(private readonly context: CanvasRenderingContext2D, private readonly settings: CanvasCameraSettings) {
        this.addListeners();
        this.updateViewport();
    }

    public begin(): void {
        this.context.save();
        this.applyScale();
        this.applyTranslation();
    }

    public end(): void {
        this.context.restore();
    }

    private applyScale(): void {
        this.context.scale(this.viewport.scale[0], this.viewport.scale[1]);
    }

    private applyTranslation(): void {
        this.context.translate(-this.viewport.left, -this.viewport.top);
    }

    private updateViewport(): void {
        this.viewport.width    = this.distance * Math.tan(this.fieldOfView);
        this.viewport.height   = this.viewport.width / this.aspectRatio;
        this.viewport.left     = this.lookAt[0] - (this.viewport.width / 2);
        this.viewport.top      = this.lookAt[1] - (this.viewport.height / 2);
        this.viewport.right    = this.viewport.left + this.viewport.width;
        this.viewport.bottom   = this.viewport.top + this.viewport.height;
        this.viewport.scale[0] = this.context.canvas.width / this.viewport.width;
        this.viewport.scale[1] = this.context.canvas.height / this.viewport.height;
    }

    public zoomTo(zoom: number): void {
        this.distance = zoom;
        this.updateViewport();
    }

    public moveTo(x: number, y: number): void {
        this.lookAt[0] = x;
        this.lookAt[1] = y;
        this.updateViewport();
    }

    public screenToWorld(x: number, y: number, obj: SimpleVector2 = {x: 0, y: 0}): SimpleVector2 {
        obj   = obj || {};
        obj.x = (x / this.viewport.scale[0]) + this.viewport.left;
        obj.y = (y / this.viewport.scale[1]) + this.viewport.top;

        return obj;
    }

    public worldToScreen(x: number, y: number, obj: SimpleVector2 = {x: 0, y: 0}): SimpleVector2 {
        obj.x = (x - this.viewport.left) * (this.viewport.scale[0]);
        obj.y = (y - this.viewport.top) * (this.viewport.scale[1]);

        return obj;
    }

    private addListeners(): void {
        // Zoom and scroll around world
        window.onwheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                // Your zoom/scale factor
                let zoomLevel = this.distance - (e.deltaY * 20);
                if (zoomLevel <= 1) {
                    zoomLevel = 1;
                }

                this.zoomTo(zoomLevel);
            } else {
                // Your track-pad X and Y positions
                const x = this.lookAt[0] + (e.deltaX * 2);
                const y = this.lookAt[1] + (e.deltaY * 2);

                this.moveTo(x, y);
            }
        };

        // Center camera on "R"
        window.addEventListener("keydown", (e) => {
            if (e.key === "r") {
                this.zoomTo(1000);
                this.moveTo(0, 0);
            }
        });
    }
}
