import { JSX } from "preact";

export interface LabeledSelectInputProps extends JSX.HTMLAttributes<HTMLSelectElement> {
    readonly label: string;
    readonly options: readonly (string | {readonly value: string; readonly label: string})[]
    readonly id: string;
}

export default function LabeledSelectInput({ label, id, options, ...props }: LabeledSelectInputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                {...props}
            >
                {
                    options.map((option) => {
                        const value = typeof option === "string" ? option : option.value;
                        const label = typeof option === "string" ? option : option.label;

                        return <option key={`option-${value}`} value={value}>{label}</option>
                    })
                }
            </select>
        </>
    );
}
