import { Color } from "@g43/tools";
import { SvgArcElementFactory } from "../factories/svg-arc-element-factory.ts";
import { SvgElementProxy } from "../proxy/svg-element-proxy.ts";
import { SvgDiagram } from "./svg-diagram.ts";
import { randomIntBetween } from "@g43/utils";
import type { SimpleVector2 } from "@g43/types";

export class SvgPieDiagram extends SvgDiagram {
    public constructor(
        public readonly data: (
            | number
            | { value: number; label: string; color?: Color | string }
        )[],
        public readonly center: SimpleVector2 = { x: 0, y: 0 },
        public readonly outerRadius: number = 50,
        public readonly innerRadius: number = NaN,
        public readonly padAngle = 0,
    ) {
        super();
    }

    public getWrapperProxy(): SvgElementProxy {
        const result = SvgElementProxy.create("g");

        const sum = this.data.reduce<number>((acc, curr) => {
            if (typeof curr === "number") {
                return acc + curr;
            }

            return acc + curr.value;
        }, 0);

        const padCount = this.data.length <= 1 ? 0 : this.data.length;

        const padSum = padCount * this.padAngle;

        const availableAngle = Math.PI * 2 - padSum;
        const sumFraction = 1 / sum;
        let currentAngle = 0;
        this.data.forEach((item, i) => {
            const label = typeof item === "number" ? `Item ${i}` : item.label;

            const rawColor = (item as { color: Color | string })?.color;
            const factory = new SvgArcElementFactory();
            factory.setStrokeColor(this._strokeColor)
                .setStrokeWidth(this._strokeWidth);

            if (!rawColor) {
                factory.setFillColor(
                    new Color(
                        randomIntBetween(0, 255),
                        randomIntBetween(0, 255),
                        randomIntBetween(0, 255),
                    ),
                );
            } else {
                factory.setFillColor(rawColor);
            }
            const value = typeof item === "number" ? item : item.value;
            const ratio = sumFraction * value;
            const angle = ratio * availableAngle;

            factory
                .setOuterRadius(this.outerRadius)
                .setStartAngle(currentAngle + angle)
                .setCenter(this.center)
                .setStyles(
                    `
                        transition: fill .3s;
                   `,
                )
                .setHoverStyles(
                    `
                        fill: black;
                        cursor: pointer;
                   `,
                )
                .setEndAngle(currentAngle)
                .setInnerRadius(this.innerRadius);

            const styles = factory.getStyleString();
            if (styles) {
                result.addChild(styles);
            }
            factory.element.setAttribute("title", label);
            result.addChild(factory.element);
            currentAngle += angle + this.padAngle;
        });

        return result;
    }
}
