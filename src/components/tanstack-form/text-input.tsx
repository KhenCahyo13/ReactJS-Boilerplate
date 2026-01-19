import type { InputHTMLAttributes } from 'react';

import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';

interface TfTextInputProps<
    TForm extends { Field: any; state: { values: Record<string, any> } },
> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'form' | 'name'> {
    form: TForm;
    name: keyof TForm['state']['values'];
    label?: string;
}

export function TfTextInput<
    TForm extends { Field: any; state: { values: Record<string, any> } },
>({ form, name, label, ...props }: TfTextInputProps<TForm>) {
    return (
        <form.Field name={name as string}>
            {(field: any) => {
                const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                    <Field data-invalid={isInvalid}>
                        {label && (
                            <FieldLabel htmlFor={field.name}>
                                {label}{' '}
                                {props.required && (
                                    <span className="text-destructive">*</span>
                                )}
                            </FieldLabel>
                        )}
                        <Input
                            id={field.name}
                            type={props.type ?? 'text'}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder={props.placeholder}
                            autoComplete={props.autoComplete ?? 'off'}
                            disabled={props.disabled}
                        />

                        {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                        )}
                    </Field>
                );
            }}
        </form.Field>
    );
}