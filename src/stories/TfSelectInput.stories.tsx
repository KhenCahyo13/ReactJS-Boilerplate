import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from '@tanstack/react-form';

import { TfSelectInput } from '@/components/tanstack-form/select-input';

const meta: Meta<typeof TfSelectInput> = {
    title: 'Components/TanStackForm/SelectInput',
    component: TfSelectInput,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Select input integrated with TanStack Form. Supports placeholder and option lists with disabled states.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
];

export const Default: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                status: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfSelectInput
                    form={form}
                    name={'status'}
                    label="Status"
                    placeholder="Select status"
                    options={statusOptions}
                />
            </div>
        );
    },
};

export const WithDisabledOption: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                status: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfSelectInput
                    form={form}
                    name={'status'}
                    label="Status"
                    placeholder="Select status"
                    options={[
                        { label: 'Active', value: 'active' },
                        {
                            label: 'Inactive (disabled)',
                            value: 'inactive',
                            disabled: true,
                        },
                        { label: 'Pending', value: 'pending' },
                    ]}
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                status: 'active',
            },
        });

        return (
            <div className="max-w-sm">
                <TfSelectInput
                    form={form}
                    name={'status'}
                    label="Status"
                    options={statusOptions}
                    disabled
                />
            </div>
        );
    },
};

export const Preselected: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                status: 'pending',
            },
        });

        return (
            <div className="max-w-sm">
                <TfSelectInput
                    form={form}
                    name={'status'}
                    label="Status"
                    options={statusOptions}
                />
            </div>
        );
    },
};
