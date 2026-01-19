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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfTextInput
                    form={form}
                    name={'name'}
                    label="Name"
                    placeholder="Enter your name"
                />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfTextInput
                    form={form}
                    name={'email'}
                    label="Email"
                    placeholder="your@email.com"
                    required
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
                username: 'disableduser',
            },
        });

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfTextInput
                    form={form}
                    name={'username'}
                    label="Username"
                    disabled
                />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfTextInput form={form} name={'fullName'} label="Full Name" />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
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

        const values = form.state.values;

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-sm space-y-2"
            >
                <TfTextInput
                    form={form}
                    name={'password'}
                    type="password"
                    label="Password"
                    placeholder="••••••••"
                />
                <div className="text-xs text-muted-foreground">
                    Values: {JSON.stringify(values)}
                </div>
            </form>
        );
    },
};
