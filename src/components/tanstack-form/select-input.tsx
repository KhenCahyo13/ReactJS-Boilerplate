import type { ComponentProps, ReactNode } from "react";

import { Field, FieldError, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface TfSelectInputProps<TForm extends { Field: any; state: { values: Record<string, any> } }>
    extends Omit<ComponentProps<typeof Select>, "form" | "name" | "value" | "onValueChange"> {
    form: TForm;
    name: keyof TForm["state"]["values"];
    label?: string;
    placeholder?: string;
    options: Array<{ label: ReactNode; value: string; disabled?: boolean }>;
    triggerClassName?: string;
}

export function TfSelectInput<TForm extends { Field: any; state: { values: Record<string, any> } }>(
    {
        form,
        name,
        label,
        placeholder,
        options,
        triggerClassName,
        disabled,
        required,
    }: TfSelectInputProps<TForm>
) {
    return (
        <form.Field name={name as string}>
            {(field: any) => {
                const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                    <Field data-invalid={isInvalid}>
                        {label && (
                            <FieldLabel htmlFor={field.name}>
                                {label} {required && <span className="text-destructive">*</span>}
                            </FieldLabel>
                        )}

                        <Select
                            name={field.name}
                            disabled={disabled}
                            value={field.state.value ?? ""}
                            onValueChange={field.handleChange}
                        >
                            <SelectTrigger
                                id={field.name}
                                aria-invalid={isInvalid}
                                className={triggerClassName}
                            >
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.disabled}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                        )}
                    </Field>
                );
            }}
        </form.Field>
    );
}