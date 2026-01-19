import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from '@tanstack/react-form';

import { TfTextInput } from '@/components/tanstack-form/text-input';

const meta: Meta<typeof TfTextInput> = {
    title: 'Components/TanStackForm/TextInput',
    component: TfTextInput,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Text input integrated with TanStack Form. Shows label, value binding, and optional required indicator.',
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
                name: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfTextInput
                    form={form}
                    name={'name'}
                    label="Name"
                    placeholder="Enter your name"
                />
            </div>
        );
    },
};

export const Required: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                email: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfTextInput
                    form={form}
                    name={'email'}
                    label="Email"
                    placeholder="your@email.com"
                    required
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                username: 'disableduser',
            },
        });

        return (
            <div className="max-w-sm">
                <TfTextInput
                    form={form}
                    name={'username'}
                    label="Username"
                    disabled
                />
            </div>
        );
    },
};

export const Prefilled: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                fullName: 'John Doe',
            },
        });

        return (
            <div className="max-w-sm">
                <TfTextInput form={form} name={'fullName'} label="Full Name" />
            </div>
        );
    },
};

export const Password: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                password: '',
            },
        });

        return (
            <div className="max-w-sm">
                <TfTextInput
                    form={form}
                    name={'password'}
                    type="password"
                    label="Password"
                    placeholder="••••••••"
                />
            </div>
        );
    },
};
