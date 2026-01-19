import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Calendar } from '../ui/calendar';

interface TfCalendarInputProps<TForm extends { Field: any; state: { values: Record<string, any> } }> {
	form: TForm;
	name: keyof TForm['state']['values'];
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
}

export function TfCalendarInput<TForm extends { Field: any; state: { values: Record<string, any> } }>(
	{ form, name, label, placeholder, required, disabled, className }: TfCalendarInputProps<TForm>
) {
	return (
		<form.Field name={name as string}>
			{(field: any) => {
				const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

				const getSelectedDate = () => {
					const v = field.state.value;
					if (!v) return undefined;
					// accept Date or ISO string
					if (v instanceof Date) return v as Date;
					try {
						return new Date(String(v));
					} catch {
						return undefined;
					}
				};
				
				const selectedDate = getSelectedDate();

				return (
					<Field data-invalid={isInvalid} className={className}>
						{label && (
							<FieldLabel htmlFor={field.name}>
								{label} {required && <span className="text-destructive">*</span>}
							</FieldLabel>
						)}

						<Popover>
							<PopoverTrigger asChild>
								<Input
									id={field.name}
									name={field.name}
									readOnly
									placeholder={placeholder}
									value={selectedDate ? selectedDate.toLocaleDateString() : ''}
									aria-invalid={isInvalid}
									disabled={disabled}
								/>
							</PopoverTrigger>
							<PopoverContent className='py-0'>
								<Calendar
									mode="single"
									selected={selectedDate}
									onSelect={(date) => {
										if (!date) {
											field.handleChange('');
											return;
										}

										// store as ISO string
										field.handleChange((date as Date).toISOString());
									}}
								/>
							</PopoverContent>
						</Popover>

						{isInvalid && <FieldError errors={field.state.meta.errors} />}
					</Field>
				);
			}}
		</form.Field>
	);
}
