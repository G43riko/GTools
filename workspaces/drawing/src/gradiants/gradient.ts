import type { Color } from "@g43/tools";

export interface Gradient {
    steps: { value: string; color: string | Color }[];
}

export const Gradient = {
    isGradient: (object: any): object is Gradient => Array.isArray(object.steps),
};
