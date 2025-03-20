import type { ReadonlySimpleVector2 } from "@g43/types";
import { DrawingObjectType, type Ellipse, PositionAble, SizeAble } from "@g43/drawing";
import { SvgPathElementFactory } from "./svg-path-element-factory.ts";

export class SvgArcElementFactory extends SvgPathElementFactory {
    public override readonly type = DrawingObjectType.ARC;
    private _innerRadius = NaN;
    private _outerRadius = 50;
    private _startAngle = 0;
    private _endAngle = Math.PI * 2;
    private readonly _center = { x: 0, y: 0 };

    public static fromEllipse(
        ellipse: Ellipse,
        factory: SvgArcElementFactory = new SvgArcElementFactory(),
    ): SvgArcElementFactory {
        return factory.setFrom(ellipse);
    }

    public override patchFrom(ellipse: Ellipse): this {
        try {
            const position = PositionAble.extractPosition(ellipse);
            const size = SizeAble.extractSize(ellipse);
            const center = {
                x: position.x + size.x,
                y: position.y + size.y,
            };

            this.setCenter(center);

            if (ellipse.innerWidth !== ellipse.innerHeight) {
                console.warn("Ellipse with not equal sizes are not supported yet");
            }
            if (size.x !== size.y) {
                console.warn("Ellipse with not equal sizes are not supported yet");
            }
            const innerRadius = (ellipse.innerWidth + ellipse.innerHeight) / 2 || 0;
            const outerRadius = (size.x + size.y) / 2;

            this.setInnerRadius(innerRadius ?? this._innerRadius)
                .setOuterRadius(outerRadius ?? this._outerRadius);
        } finally {
            if (ellipse.fillColor) {
                this.setFillColor(ellipse.fillColor);
            }

            if (ellipse.strokeColor) {
                this.setStrokeColor(ellipse.strokeColor);
            }
            if (ellipse.strokeWidth) {
                this.setStrokeWidth(ellipse.strokeWidth);
            }
            if (ellipse.startAngle) {
                this.setStrokeWidth(ellipse.startAngle);
            }
            if (ellipse.endAngle) {
                this.setStrokeWidth(ellipse.endAngle);
            }
        }

        return this;
    }

    public override setFrom(ellipse: Ellipse): this {
        const position = PositionAble.extractPosition(ellipse);
        const size = SizeAble.extractSize(ellipse);
        const center = {
            x: position.x + size.x,
            y: position.y + size.y,
        };
        if (ellipse.innerWidth !== ellipse.innerHeight) {
            console.warn("Ellipse with not equal sizes are not supported yet");
        }
        if (size.x !== size.y) {
            console.warn("Ellipse with not equal sizes are not supported yet");
        }
        const innerRadius = (ellipse.innerWidth + ellipse.innerHeight) / 2 || 0;
        const outerRadius = (size.x + size.y) / 2;

        return this.setCenter(center)
            .setInnerRadius(innerRadius ?? this._innerRadius)
            .setOuterRadius(outerRadius ?? this._outerRadius)
            .setFillColor(ellipse.fillColor)
            .setStrokeColor(ellipse.strokeColor)
            .setStrokeWidth(ellipse.strokeWidth ?? this.strokeWidth)
            .setStartAngle(ellipse.startAngle ?? this._startAngle)
            .setEndAngle(ellipse.endAngle ?? this._endAngle);
    }

    public setCenter(center: ReadonlySimpleVector2): this;
    public setCenter(x: number, y: number): this;
    public setCenter(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        if (typeof valueA === "number") {
            this._center.x = valueA;
            this._center.y = valueB as number;
        } else {
            this._center.x = valueA.x;
            this._center.y = valueA.y;
        }

        return this.onPathChange();
    }

    public setStartAngle(r: number): this {
        this._startAngle = r;

        return this.onPathChange();
    }

    public get startAngle(): number {
        return this._startAngle;
    }

    public setEndAngle(r: number): this {
        this._endAngle = r;

        return this.onPathChange();
    }

    public get endAngle(): number {
        return this._endAngle;
    }

    public setInnerRadius(r: number): this {
        this._innerRadius = r;

        return this.onPathChange();
    }

    public get innerRadius(): number {
        return this._innerRadius;
    }

    public setOuterRadius(r: number): this {
        this._outerRadius = r;

        return this.onPathChange();
    }

    public get outerRadius(): number {
        return this._outerRadius;
    }

    public setRadius(r: number): this {
        return this.setOuterRadius(r);
    }

    public setCx(x: number): this {
        this._center.x = x;

        return this.onPathChange();
    }

    public get cx(): number {
        return this._center.x;
    }

    public setCy(y: number): this {
        this._center.y = y;

        return this.onPathChange();
    }

    public get cy(): number {
        return this._center.y;
    }

    private onPathChange(): this {
        this._element.setAttribute("d", this.getPath());

        return this;
    }

    public isFullArc(): boolean {
        return this._startAngle === 0 && this._endAngle === Math.PI * 2;
    }

    private getPath(): string {
        if (this.isFullArc()) {
            if (!this._innerRadius) {
                return [
                    `M ${this._center.x} ${this._center.y}`,
                    `m -${this._outerRadius}, 0`,
                    `a ${this._outerRadius},${this._outerRadius} 0 1,0 ${this._outerRadius * 2},0`,
                    `a ${this._outerRadius},${this._outerRadius} 0 1,0 -${this._outerRadius * 2},0`,
                ].join(" ");
            }

            return [
                `M ${this._center.x} ${this._center.y - this._outerRadius}`,
                `A ${this._outerRadius} ${this._outerRadius} 0 1 0 ${this._center.x} ${
                    this._center.y + this._outerRadius
                }`,
                `A ${this._outerRadius} ${this._outerRadius} 0 1 0 ${this._center.x} ${
                    this._center.y - this._outerRadius
                }`,
                `Z`,
                `M ${this._center.x} ${this._center.y - this._innerRadius}`,
                `A ${this._innerRadius} ${this._innerRadius} 0 1 1 ${this._center.x} ${
                    this._center.y + this._innerRadius
                }`,
                `A ${this._innerRadius} ${this._innerRadius} 0 1 1 ${this._center.x} ${
                    this._center.y - this._innerRadius
                }`,
                `Z`,
            ].join(" ");
        }

        const startOuterPoint = {
            x: this._center.x + Math.cos(this._startAngle) * this._outerRadius,
            y: this._center.y + Math.sin(this._startAngle) * this._outerRadius,
        };
        const endOuterPoint = {
            x: this._center.x + Math.cos(this._endAngle) * this._outerRadius,
            y: this._center.y + Math.sin(this._endAngle) * this._outerRadius,
        };

        if (!this._innerRadius) {
            return [
                `M ${this._center.x} ${this._center.y}`,
                `L ${startOuterPoint.x}, ${startOuterPoint.y}`,
                `A ${this._outerRadius},${this._outerRadius} 0 0,0 ${endOuterPoint.x},${endOuterPoint.y}`,
                `Z`,
            ].join(" ");
        }

        const endInnerPoint = {
            x: this._center.x + Math.cos(this._startAngle) * this._innerRadius,
            y: this._center.y + Math.sin(this._startAngle) * this._innerRadius,
        };
        const startInnerPoint = {
            x: this._center.x + Math.cos(this._endAngle) * this._innerRadius,
            y: this._center.y + Math.sin(this._endAngle) * this._innerRadius,
        };

        return [
            `M ${this._center.x} ${this._center.y}`,
            `M ${startOuterPoint.x}, ${startOuterPoint.y}`,
            `A ${this._outerRadius},${this._outerRadius} 0 0,0 ${endOuterPoint.x},${endOuterPoint.y}`,
            `L ${startInnerPoint.x}, ${startInnerPoint.y}`,
            `A ${this._innerRadius},${this._innerRadius} 0 0,1 ${endInnerPoint.x},${endInnerPoint.y}`,
            `Z`,
        ].join(" ");
    }
}
