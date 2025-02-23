import { useRef } from "preact/hooks";
import { JSX } from "preact";

export interface LabeledRangeInputProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, "type"> {
    readonly label: string;
    readonly id: string;
}

export default function LabeledRangeInput({ label, id, className, ...props }: LabeledRangeInputProps) {
    const ref = useRef<HTMLInputElement>(null);
    const value = ref.current?.value ?? props.value;
    return (
        <>
            <label for={id}>{label}</label>
            <span class="flex flex-row items-center gap-2">
                {Number(props.step ?? 1) < 1 ? Number(value).toFixed(2) : value }
                <input
                    ref={ref}
                    id={id}
                    type="range"
                    className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ${className}`}
                    {...props}
                />
            </span>
        </>
    );
}
