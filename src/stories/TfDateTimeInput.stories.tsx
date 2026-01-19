import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from '@tanstack/react-form';

import { TfDateTimeInput } from '@/components/tanstack-form/datetime-input';

const meta: Meta<typeof TfDateTimeInput> = {
    title: 'Components/TanStackForm/DateTimeInput',
    component: TfDateTimeInput,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Date-time input with calendar and time pickers integrated with TanStack Form. Stores value as ISO string.',
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
                datetime: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfDateTimeInput
                    form={form}
                    name={'datetime'}
                    label="Date & Time"
                    placeholder="MM/DD/YYYY hh:mm aa"
                />
            </div>
        );
    },
};

export const WithDefaultValue: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                datetime: new Date().toISOString(),
            },
        });

        return (
            <div className="max-w-sm">
                <TfDateTimeInput
                    form={form}
                    name={'datetime'}
                    label="Date & Time"
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                datetime: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfDateTimeInput
                    form={form}
                    name={'datetime'}
                    label="Date & Time"
                    placeholder="MM/DD/YYYY hh:mm aa"
                    disabled
                />
            </div>
        );
    },
};
