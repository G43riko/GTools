import { JSX } from "preact";

export interface LabeledColorInputProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, "type"> {
    readonly label: string;
    readonly id: string;
}

export default function LabeledColorInput({ label, id, ...props }: LabeledColorInputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="color"
                id={id}
                {...props}
            />
        </>
    );
}
