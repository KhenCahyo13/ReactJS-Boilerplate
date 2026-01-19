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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfDateTimeInput
                    form={form}
                    name={'datetime'}
                    label="Date & Time"
                    placeholder="MM/DD/YYYY hh:mm aa"
                />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfDateTimeInput
                    form={form}
                    name={'datetime'}
                    label="Date & Time"
                />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfDateTimeInput
                    form={form}
                    name={'datetime'}
                    label="Date & Time"
                    placeholder="MM/DD/YYYY hh:mm aa"
                    disabled
                />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
        );
    },
};
