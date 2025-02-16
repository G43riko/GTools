import type { Color } from "@g43/tools";
import { type Gradient, LinearGradient } from "@g43/drawing";

let idCounter = 0;

export class SvgGradientFactory {
    public static createGradient(gradient: Gradient): [id: string, content: string] {
        if (LinearGradient.isLinearGradient(gradient)) {
            const newId = `linear-gradient-${idCounter++}`;

            return [newId, SvgGradientFactory.createLinearGradient(gradient, newId)];
        }

        throw new Error("Not implemented");
    }

    private static getColor(color: string | Color): string {
        if (typeof color === "string") {
            return color;
        }

        return color.hex;
    }

    private static createLinearGradient(gradient: LinearGradient, id: string): string {
        const stops = gradient.steps.map((step) =>
            `<stop offset="${step.value}" stop-color="${SvgGradientFactory.getColor(step.color)}" />`
        );

        const startX = gradient.startPoint.x ?? 0;
        const startY = gradient.startPoint.y ?? 0;
        const endX = gradient.endPoint.x ?? 100;
        const endY = gradient.endPoint.y ?? 0;

        return `<linearGradient id="${id}" x1="${startX}%" y1="${startY}%" x2="${endX}%" y2="${endY}%"
>${stops.join("")}</linearGradient>`;
    }
}
