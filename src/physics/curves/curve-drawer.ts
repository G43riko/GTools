import { ReadonlySimpleVector2 } from "../../math";
import { Curve2D } from "./curve-2d";

export class CurveDrawer {
    public pointColor = "blue";
    public lineColor  = "green";
    public lineWidth  = 2;
    public pointSize  = 5;

    public constructor(
        private readonly context: CanvasRenderingContext2D,
    ) {
    }

    public renderPoints(curve: Curve2D, context = this.context, color = this.pointColor, size = this.pointSize): void {
        context.fillStyle = color;

        context.beginPath();
        curve.points.forEach((point) => {
            context.arc(point.x, point.y, size, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        });
    }

    public renderLine(curve: Curve2D, context = this.context, color = this.lineColor, width = this.lineWidth): void {
        context.lineWidth   = width;
        context.strokeStyle = color;
        context.beginPath();
        curve.points.forEach((point, i) => {
            if (i) {
                context.lineTo(point.x, point.y);
            } else {
                context.moveTo(point.x, point.y);
            }
        });
        context.stroke();
    }

    public render(curve: Curve2D, context = this.context): void {
        this.renderLine(curve, context);
        this.renderPoints(curve, context);
    }

    private renderDirectPoint(context: CanvasRenderingContext2D, point: ReadonlySimpleVector2 | undefined, color: string, size: number): void {
        if (!point) {
            return;
        }

        context.fillStyle = color;
        context.beginPath();
        context.arc(point.x, point.y, size, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }

    public renderPoint(value: number, curve: Curve2D, context = this.context, color = this.pointColor, size = this.pointSize): void {
        const point = curve.getPoint(value);
        this.renderDirectPoint(context, point, color, size);
    }

    public renderPointAt(value: number, curve: Curve2D, context = this.context, color = this.pointColor, size = this.pointSize): void {
        const point = curve.getLerpPointAt(value);
        this.renderDirectPoint(context, point, color, size);
    }

    public renderPointArcAt(value: number, curve: Curve2D, context = this.context, color = this.pointColor, size = this.pointSize): void {
        const point = curve.getPointAtArc(value);
        this.renderDirectPoint(context, point, color, size);
    }

    public drawCurvePoints(context: CanvasRenderingContext2D, curve: Curve2D, color = this.pointColor, size = this.pointSize): void {

    }
}