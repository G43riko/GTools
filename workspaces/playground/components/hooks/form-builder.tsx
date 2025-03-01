import { useSignal, Signal } from "@preact/signals";
import {LabeledRangeInput, LabeledColorInput, LabeledSelectInput} from "@g43/fresh-components";
import { VNode } from "preact";
import { JSX } from "preact";

export enum PropertyType {
    RANGE = "RANGE",
    COLOR = "COLOR",
    SELECT = "SELECT",
}
interface BaseProperty<NativeType extends number | string | boolean = number | string | boolean> {
    readonly type: PropertyType;
    readonly nativeType: NativeType;
    readonly label?: string;
    readonly hidden?: boolean;
    readonly showWhen?: (data: any) => boolean;
    readonly disabled?: boolean;
    readonly reactOn?: "input" | "change";
    readonly defaultValue?: NativeType;
}

interface RangeProperty extends BaseProperty<number> {
    readonly type: PropertyType.RANGE;
    readonly minValue: number;
    readonly maxValue: number;
    readonly step?: number;
}

interface SelectProperty extends BaseProperty<string> {
    readonly type: PropertyType.SELECT;
    readonly options: readonly (string | {readonly value: string; readonly label: string})[];
}
interface ColorProperty extends BaseProperty<string> {
    readonly type: PropertyType.COLOR;
}
export type Property = RangeProperty | ColorProperty | SelectProperty;

export type EmitValue<T extends Record<string, Property>> = {
    [P in keyof T]: T[P]["nativeType"];
};

export interface FormBuilderResult<T extends Record<string, Property>> {
    readonly result: Signal<EmitValue<T>>;
    readonly Form: VNode<HTMLDivElement>;
}

function createInput<T extends Property>(
    key: string,
    property: T,
    value: any,
    onChange: (value: Property["nativeType"]) => void,
): JSX.Element | null {
    if(property.hidden) {
        return null;
    }
    switch (property.type) {
        case PropertyType.RANGE:
            return (
                <LabeledRangeInput
                    label={property.label ?? key}
                    id={key}
                    value={value}
                    min={property.minValue}
                    step={property.step}
                    max={property.maxValue}
                    onInput={(e) => property.reactOn !== "change" && onChange(+(e.target as HTMLInputElement).value)}
                    onChange={(e) => property.reactOn === "change" && onChange(+(e.target as HTMLInputElement).value)}
                />
            );
        case PropertyType.SELECT:
            return (
                <LabeledSelectInput
                    label={property.label ?? key}
                    id={key}
                    options={property.options}
                    value={value}
                    onInput={(e) => property.reactOn !== "change" && onChange((e.target as HTMLInputElement).value)}
                    onChange={(e) => property.reactOn === "change" && onChange((e.target as HTMLInputElement).value)}
                />
            );
        case PropertyType.COLOR:
            return (
                <LabeledColorInput
                    label={property.label ?? key}
                    id={key}
                    value={value}
                    onInput={(e) => property.reactOn !== "change" && onChange((e.target as HTMLInputElement).value)}
                    onChange={(e) => property.reactOn === "change" && onChange((e.target as HTMLInputElement).value)}
                />
            );
        default:
            throw new Error(`Unsupported property type '${(property as any).type}'`)
    }
}
export class FormBuilder {
    public static range(params: Omit<RangeProperty, "nativeType" | "type">): RangeProperty {
        return {
            ...params,
            type: PropertyType.RANGE,
        } as RangeProperty
    }
    public static color(params: Omit<ColorProperty, "nativeType" | "type">): ColorProperty {
        return {
            ...params,
            type: PropertyType.COLOR,
        } as ColorProperty
    }
}

export function useFormBuilder<T extends Record<string, Property>>(data: T): FormBuilderResult<T> {
    const result = useSignal<EmitValue<T>>(Object.fromEntries(
        Object.entries(data).map(([key, property]) => [key, property.defaultValue])
    ) as EmitValue<T>);

    const formInputs = Object.keys(data).map((key) => {
        const e = data[key]
        if(typeof e.showWhen === "function") {
            const canShow = e.showWhen(result.value);
            if(!canShow) {
                return null;
            }
        }
        return createInput(key, e, result.value[key], (value: unknown) => {
            if(JSON.stringify(result.value[key]) === JSON.stringify(value)) {
                return;
            }
            result.value = {...result.value, [key]: value};
        });
    })

    return {
        result,
        Form: <div style="align-content: flex-start; justify-items: flex-end;" class="grid grid-cols-2 gap-2">{formInputs}</div>
    };
}
