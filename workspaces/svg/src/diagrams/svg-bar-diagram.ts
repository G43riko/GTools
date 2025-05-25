import { Color } from "@g43/tools";
import { SvgRectElementFactory } from "../factories/svg-rect-element-factory.ts";
import { SvgElementProxy } from "../proxy/svg-element-proxy.ts";
import { SvgDiagram } from "./svg-diagram.ts";
import type { SimpleVector2 } from "@g43/types";

type DiagramProvider<PropType, DataType> = PropType | ((data: DataType, index: number) => PropType);
type DiagramColorProvider<DataType> = DiagramProvider<string | Color, DataType>;
type DiagramNumberProvider<DataType> = DiagramProvider<number, DataType>;

function isDiagramProviderFunction<S, T>(item: DiagramProvider<S, T>): item is (data: T, index: number) => S {
    return typeof item === "function";
}

export interface SvgBarDiagramOptions<DataType = unknown> {
    grid: {
        color: string | Color;
        width: number;
        x: boolean;
        y: boolean;
    };

    axis: {
        color: string | Color;
        width: number;
        x: boolean;
        y: boolean;
    };

    width: number;
    height: number;

    gap?: number;
    verticalPadding?: number;
    maxColumnWidth?: number;

    maxColumns?: number;

    column: {
        fillColor: DiagramColorProvider<DataType>;
        strokeColor: DiagramColorProvider<DataType>;
        strokeWidth: DiagramNumberProvider<DataType>;
    };

    // diagram
    fillColor: string | Color;
}

export class SvgBarDiagram<T = unknown> extends SvgDiagram {
    private readonly options: SvgBarDiagramOptions<T> = {
        axis: {
            x: true,
            y: true,
            width: 1,
            color: Color.BLACK,
        },
        grid: {
            x: true,
            y: true,
            width: 1,
            color: Color.BLACK,
        },
        column: {
            fillColor: Color.BLUE,
            strokeColor: Color.RED,
            strokeWidth: 1,
        },
        gap: 5,
        verticalPadding: 5,
        fillColor: Color.GRAY,
        width: 320,
        height: 240,
    };
    public readonly position: SimpleVector2;

    public constructor(
        position: SimpleVector2 = { x: 0, y: 0 },
    ) {
        super();
        this.position = position;
    }

    public getWrapperProxy(): SvgElementProxy {
        const result = SvgElementProxy.create("g");

        result.setAttributeNumber("width", this.options.width);
        result.setAttributeNumber("height", this.options.height);

        // result.setAttribute("x", String(this.position.x));
        // result.setAttribute("y", String(this.position.y));

        result.setAttribute("transform", `translate(${this.position.x} ${this.position.x})`);

        result.addChild(this.getBackgroundRect());

        const data = Array.from({ length: 320 / 10 }, () => Math.random()) as T[];
        const totalGapSize = (data.length + 1) * (this.options.gap ?? 0);
        const width = (this.options.width - totalGapSize) / data.length;
        const maxValue = Math.max(...data.map((e) => this.getValueFor(e)));
        const _minValue = Math.min(...data.map((e) => this.getValueFor(e)));

        const resultDataHolder = SvgElementProxy.create("g");
        data.forEach((item, index) => {
            resultDataHolder.addChild(this.getBarFor(width, item, index, maxValue));
        });

        result.addChild(resultDataHolder);

        return result;
    }

    private getValueFor(item: T): number {
        return item as unknown as number;
    }

    public getPropertyFor<S>(provider: DiagramProvider<S, T>, item: T, index: number): S {
        if (isDiagramProviderFunction(provider)) {
            return provider(item, index);
        }

        return provider;
    }

    private getBarFor(barWidth: number, item: T, index: number, maxValue: number): SvgElementProxy {
        const value = this.getValueFor(item);
        const ratio = value / maxValue;

        const verticalPadding = this.options.verticalPadding ?? 0;
        const barMaxHeight = this.options.height - verticalPadding * 2;
        const gap = this.options.gap ?? 0;
        const positionX = gap + index * (gap + barWidth);
        const barHeight = barMaxHeight * ratio;
        const positionY = this.options.height - barHeight - verticalPadding;

        return new SvgRectElementFactory()
            .setSize(barWidth, barHeight)
            .setPosition(positionX, positionY)
            .setFillColor(this.getPropertyFor(this.options.column.fillColor, item, index))
            .setStrokeColor(this.getPropertyFor(this.options.column.strokeColor, item, index))
            .setStrokeWidth(this.getPropertyFor(this.options.column.strokeWidth, item, index))
            .element;
    }

    public getBackgroundRect(): SvgElementProxy {
        return new SvgRectElementFactory()
            .setSize(this.options.width, this.options.height)
            .setFillColor(this.options.fillColor)
            .setStrokeColor(this._strokeColor)
            .setStrokeWidth(this._strokeWidth)
            .element;
    }
}
