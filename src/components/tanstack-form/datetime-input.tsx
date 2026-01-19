import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { IconCalendar } from '@tabler/icons-react';

interface TfDateTimeInputProps<TForm extends { Field: any; state: { values: Record<string, any> } }> {
	form: TForm;
	name: keyof TForm['state']['values'];
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
}

export function TfDateTimeInput<TForm extends { Field: any; state: { values: Record<string, any> } }>(
	{ form, name, label, placeholder, required, disabled, className }: TfDateTimeInputProps<TForm>
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
				const hours = Array.from({ length: 12 }, (_, i) => i + 1);

				const handleDateSelect = (date: Date | undefined) => {
					if (!date) {
						field.handleChange('');
						return;
					}

					// preserve time if exists
					if (selectedDate) {
						date.setHours(selectedDate.getHours());
						date.setMinutes(selectedDate.getMinutes());
					}

					field.handleChange((date as Date).toISOString());
				};

				const handleTimeChange = (type: 'hour' | 'minute' | 'ampm', value: string) => {
					if (selectedDate) {
						const newDate = new Date(selectedDate);
						if (type === 'hour') {
							newDate.setHours(
								(parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
							);
						} else if (type === 'minute') {
							newDate.setMinutes(parseInt(value));
						} else if (type === 'ampm') {
							const currentHours = newDate.getHours();
							newDate.setHours(
								value === 'PM' ? currentHours + 12 : currentHours - 12
							);
						}
						field.handleChange((newDate as Date).toISOString());
					}
				};

				return (
					<Field data-invalid={isInvalid} className={className}>
						{label && (
							<FieldLabel htmlFor={field.name}>
								{label} {required && <span className="text-destructive">*</span>}
							</FieldLabel>
						)}

						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className={cn(
										'w-full justify-start text-left font-normal',
										!selectedDate && 'text-muted-foreground'
									)}
									disabled={disabled}
									id={field.name}
								>
									<IconCalendar className="mr-2 h-4 w-4" />
									{selectedDate ? (
										format(selectedDate, 'MM/dd/yyyy hh:mm aa')
									) : (
										<span>{placeholder ?? 'MM/DD/YYYY hh:mm aa'}</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<div className="sm:flex">
									<Calendar
										mode="single"
										selected={selectedDate}
										onSelect={handleDateSelect}
										initialFocus
										disabled={disabled}
									/>
									<div className="flex flex-col sm:flex-row sm:h-75 divide-y sm:divide-y-0 sm:divide-x">
										<ScrollArea className="w-64 sm:w-auto">
											<div className="flex sm:flex-col p-2">
												{hours.map((hour) => (
													<Button
														key={hour}
														size="icon"
														variant={
															selectedDate && selectedDate.getHours() % 12 === hour % 12
																? 'default'
																: 'ghost'
														}
														className="sm:w-full shrink-0 aspect-square"
														onClick={() =>
															handleTimeChange('hour', hour.toString())
														}
														disabled={disabled}
													>
														{String(hour).padStart(2, '0')}
													</Button>
												))}
											</div>
											<ScrollBar orientation="horizontal" className="sm:hidden" />
										</ScrollArea>
										<ScrollArea className="w-64 sm:w-auto">
											<div className="flex sm:flex-col p-2">
												{Array.from({ length: 60 }, (_, i) => i).map((minute) => (
													<Button
														key={minute}
														size="icon"
														variant={
															selectedDate && selectedDate.getMinutes() === minute
																? 'default'
																: 'ghost'
														}
														className="sm:w-full shrink-0 aspect-square"
														onClick={() =>
															handleTimeChange('minute', minute.toString())
														}
														disabled={disabled}
													>
														{String(minute).padStart(2, '0')}
													</Button>
												))}
											</div>
											<ScrollBar orientation="horizontal" className="sm:hidden" />
										</ScrollArea>
										<ScrollArea className="">
											<div className="flex sm:flex-col p-2">
												{['AM', 'PM'].map((ampm) => (
													<Button
														key={ampm}
														size="icon"
														variant={
															selectedDate &&
															((ampm === 'AM' && selectedDate.getHours() < 12) ||
																(ampm === 'PM' && selectedDate.getHours() >= 12))
																? 'default'
																: 'ghost'
														}
														className="sm:w-full shrink-0 aspect-square"
														onClick={() => handleTimeChange('ampm', ampm)}
														disabled={disabled}
													>
														{ampm}
													</Button>
												))}
											</div>
										</ScrollArea>
									</div>
								</div>
							</PopoverContent>
						</Popover>

						{isInvalid && <FieldError errors={field.state.meta.errors} />}
					</Field>
				);
			}}
		</form.Field>
	);
}