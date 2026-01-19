import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from '@tanstack/react-form';

import { TfCalendarInput } from '@/components/tanstack-form/calendar-input';

const meta: Meta<typeof TfCalendarInput> = {
    title: 'Components/TanStackForm/CalendarInput',
    component: TfCalendarInput,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Calendar-based date input integrated with TanStack Form. Stores value as ISO string and displays localized date.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                date: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfCalendarInput
                    form={form}
                    name={'date'}
                    label="Date"
                    placeholder="Select date"
                />
            </div>
        );
    },
};

export const WithDefaultValue: Story = {
    render: () => {
        const initial = new Date();
        const form = useForm({
            defaultValues: {
                date: initial.toISOString(),
            },
        });

        return (
            <div className="max-w-sm">
                <TfCalendarInput form={form} name={'date'} label="Date" />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                date: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfCalendarInput
                    form={form}
                    name={'date'}
                    label="Date"
                    placeholder="Select date"
                    disabled
                />
            </div>
        );
    },
};
